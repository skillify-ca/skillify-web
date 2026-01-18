import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dialog";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../../../ui/Button";

// ============================================================================
// CONSTANTS
// ============================================================================

const SCHOOL_YEAR_MONTHS = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
] as const;

const CALENDAR_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type Month = typeof SCHOOL_YEAR_MONTHS[number];

// ============================================================================
// DATA MODELS
// ============================================================================

interface Student {
  id: string;
  name: string;
  birthMonth: Month;
  ageRank: number; // 1 = oldest (earliest in school year)
  schoolYearRank: number;
}

interface BinarySearchState {
  students: Student[];
  targetStudent: Student | null;
  selectedMonth: Month;
  checkedMonths: Month[];
  revealedStudentIds: Array<string>;
  attemptCount: number;
  isComplete: boolean;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Assigns random birth months to students and calculates age rankings
 * Age rank is based on school year order (Sept = oldest)
 */
function initializeStudents(studentNames: string[]): Student[] {
  // Step 1: Assign random birth months
  const studentsWithMonths = studentNames.map((name, index) => ({
    id: `student-${index}`,
    name,
    birthMonth: SCHOOL_YEAR_MONTHS[
      Math.floor(Math.random() * SCHOOL_YEAR_MONTHS.length)
    ] as Month,
    ageRank: 0, // Will calculate next
    schoolYearRank: 0,
  }));

  // Step 2: Sort by school year order to calculate age rankings
  const sortedBySchoolYearMonths = [...studentsWithMonths].sort((a, b) => {
    const aIndex = SCHOOL_YEAR_MONTHS.indexOf(a.birthMonth);
    const bIndex = SCHOOL_YEAR_MONTHS.indexOf(b.birthMonth);
    return aIndex - bIndex;
  });

  // Step 3: Assign age ranks (1 = oldest)
  sortedBySchoolYearMonths.forEach((student, index) => {
    student.schoolYearRank = index + 1;
  });

  const sortedByCalendarYearMonths = [...studentsWithMonths].sort((a, b) => {
    const aIndex = CALENDAR_MONTHS.indexOf(a.birthMonth);
    const bIndex = CALENDAR_MONTHS.indexOf(b.birthMonth);
    return aIndex - bIndex;
  });

  // Step 3: Assign age ranks (1 = oldest)
  sortedByCalendarYearMonths.forEach((student, index) => {
    student.ageRank = index + 1;
  });

  return studentsWithMonths;
}

/**
 * Selects a random student that's not the oldest or youngest
 */
function selectTargetStudent(students: Student[]): Student | null {
  if (students.length < 3) return null;

  const maxRank = students.length;
  const eligibleStudents = students.filter(
    (s) => s.ageRank !== 1 && s.ageRank !== maxRank
  );

  if (eligibleStudents.length === 0) return null;

  return eligibleStudents[Math.floor(Math.random() * eligibleStudents.length)];
}

/**
 * Gets students who have birthdays in a specific month
 */
function getStudentsByMonth(students: Student[], month: Month): Student[] {
  return students.filter((s) => s.birthMonth === month);
}

/**
 * Gets the middle month from a list of months
 */
function getMiddleMonth(months: Month[]): Month {
  return months[Math.floor(months.length / 2)];
}

/**
 * Gets untried months from the school year
 */
function getUntriedMonths(checkedMonths: Month[]): Month[] {
  return SCHOOL_YEAR_MONTHS.filter((month) => !checkedMonths.includes(month));
}

/**
 * Gets months earlier than selected month in school year
 */
function getEarlierMonths(selectedMonth: Month, checkedMonths: Month[]): Month[] {
  const selectedIndex = SCHOOL_YEAR_MONTHS.indexOf(selectedMonth);
  return SCHOOL_YEAR_MONTHS.slice(0, selectedIndex).filter(
    (month) => !checkedMonths.includes(month)
  );
}

/**
 * Gets months later than selected month in school year
 */
function getLaterMonths(selectedMonth: Month, checkedMonths: Month[]): Month[] {
  const selectedIndex = SCHOOL_YEAR_MONTHS.indexOf(selectedMonth);
  return SCHOOL_YEAR_MONTHS.slice(selectedIndex + 1).filter(
    (month) => !checkedMonths.includes(month)
  );
}

/**
 * Formats age rank with ordinal suffix
 */
function formatAgeRank(rank: number, totalStudents: number): string {
  const suffix = (n: number) => {
    const lastDigit = n % 10;
    const lastTwo = n % 100;
    if (lastTwo >= 11 && lastTwo <= 13) return "th";
    if (lastDigit === 1) return "st";
    if (lastDigit === 2) return "nd";
    if (lastDigit === 3) return "rd";
    return "th";
  };

  const ordinal = `${rank}${suffix(rank)}`;

  if (rank === 1) return `${ordinal} (oldest)`;
  if (rank === totalStudents) return `${ordinal} (youngest)`;
  return ordinal;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function BinarySearchExample({
  studentList,
}: {
  studentList: string[];
}) {
  // -------------------------------------------------------------------------
  // STATE
  // -------------------------------------------------------------------------

  const [state, setState] = useState<BinarySearchState>({
    students: [],
    targetStudent: null,
    selectedMonth: SCHOOL_YEAR_MONTHS[Math.floor(SCHOOL_YEAR_MONTHS.length / 2)],
    checkedMonths: [],
    revealedStudentIds: new Array(),
    attemptCount: 0,
    isComplete: false,
  });

  const [isAgeRankingModalOpen, setAgeRankingModalOpen] = useState(false);

  // -------------------------------------------------------------------------
  // DERIVED STATE
  // -------------------------------------------------------------------------

  const currentMonthStudents = useMemo(
    () => getStudentsByMonth(state.students, state.selectedMonth),
    [state.students, state.selectedMonth]
  );

  const untriedMonths = useMemo(
    () => getUntriedMonths(state.checkedMonths),
    [state.checkedMonths]
  );

  const oldestStudent = useMemo(
    () => state.students.find((s) => s.ageRank === 1),
    [state.students]
  );

  const youngestStudent = useMemo(
    () => state.students.find((s) => s.ageRank === state.students.length),
    [state.students]
  );

  // -------------------------------------------------------------------------
  // MESSAGE GENERATION
  // -------------------------------------------------------------------------

  const message = useMemo(() => {
    if (!state.targetStudent) {
      return {
        header: "Initializing...",
        body: "",
      };
    }

    if (state.isComplete) {
      return {
        header: `🎉 You found ${state.targetStudent.name}'s birthday! They have a ${state.targetStudent.birthMonth} birthday.`,
        body: "",
      };
    }

    if (state.attemptCount === 0) {
      return {
        header: `Searching for ${state.targetStudent.name}'s birthday month...`,
        body: "",
      };
    }

    if (state.checkedMonths.length === SCHOOL_YEAR_MONTHS.length) {
      return {
        header: `❌ You did not find ${state.targetStudent.name}'s birthday!`,
        body: "Did you use all the information provided?",
      };
    }

    if (currentMonthStudents.length === 0) {
      return {
        header: `Searching for ${state.targetStudent.name}'s birthday month...`,
        body: "No students found for this month.",
      };
    }

    if (currentMonthStudents.length === 1) {
      return {
        header: `Searching for ${state.targetStudent.name}'s birthday month...`,
        body: `Only ${currentMonthStudents[0].name} has a ${state.selectedMonth} birthday.`,
      };
    }

    return {
      header: `Searching for ${state.targetStudent.name}'s birthday month...`,
      body: `${currentMonthStudents.map((s) => s.name).join(", ")} have a ${state.selectedMonth} birthday.`,
    };
  }, [state, currentMonthStudents]);

  // -------------------------------------------------------------------------
  // ACTIONS
  // -------------------------------------------------------------------------

  // Then the checkBirthday function works fine
  const checkBirthday = () => {
    const foundTarget = currentMonthStudents.some(
      (s) => s.id === state.targetStudent?.id
    );

    setState((prev) => ({
      ...prev,
      checkedMonths: [...prev.checkedMonths, prev.selectedMonth],
      revealedStudentIds: [
        ...prev.revealedStudentIds,
        ...currentMonthStudents.map((s) => s.id),
      ].filter((id, index, self) => self.indexOf(id) === index), // Remove duplicates
      attemptCount: prev.attemptCount + 1,
      isComplete: foundTarget,
    }));
  };

  const searchEarlierMonths = () => {
    const earlierMonths = getEarlierMonths(state.selectedMonth, state.checkedMonths);

    if (earlierMonths.length === 0) return;

    const newSelectedMonth = getMiddleMonth(earlierMonths);
    const selectedIndex = SCHOOL_YEAR_MONTHS.indexOf(state.selectedMonth);
    const monthsToEliminate = SCHOOL_YEAR_MONTHS.slice(selectedIndex);

    setState((prev) => ({
      ...prev,
      selectedMonth: newSelectedMonth,
      checkedMonths: [
        ...prev.checkedMonths,
        ...monthsToEliminate.filter((m) => !prev.checkedMonths.includes(m)),
      ],
    }));
  };

  const searchLaterMonths = () => {
    const laterMonths = getLaterMonths(state.selectedMonth, state.checkedMonths);

    if (laterMonths.length === 0) return;

    const newSelectedMonth = getMiddleMonth(laterMonths);
    const selectedIndex = SCHOOL_YEAR_MONTHS.indexOf(state.selectedMonth);
    const monthsToEliminate = SCHOOL_YEAR_MONTHS.slice(0, selectedIndex + 1);

    setState((prev) => ({
      ...prev,
      selectedMonth: newSelectedMonth,
      checkedMonths: [
        ...prev.checkedMonths,
        ...monthsToEliminate.filter((m) => !prev.checkedMonths.includes(m)),
      ],
    }));
  };

  const checkPreviousMonth = () => {
    const currentIndex = SCHOOL_YEAR_MONTHS.indexOf(state.selectedMonth);

    for (let i = currentIndex - 1; i >= 0; i--) {
      const month = SCHOOL_YEAR_MONTHS[i];
      if (!state.checkedMonths.includes(month)) {
        setState((prev) => ({ ...prev, selectedMonth: month }));
        return;
      }
    }
  };

  const checkNextMonth = () => {
    const currentIndex = SCHOOL_YEAR_MONTHS.indexOf(state.selectedMonth);

    for (let i = currentIndex + 1; i < SCHOOL_YEAR_MONTHS.length; i++) {
      const month = SCHOOL_YEAR_MONTHS[i];
      if (!state.checkedMonths.includes(month)) {
        setState((prev) => ({ ...prev, selectedMonth: month }));
        return;
      }
    }
  };

  const reset = () => {
    const newStudents = initializeStudents(studentList);
    const newTarget = selectTargetStudent(newStudents);
    const middleMonth = SCHOOL_YEAR_MONTHS[Math.floor(SCHOOL_YEAR_MONTHS.length / 2)];

    setState({
      students: newStudents,
      targetStudent: newTarget,
      selectedMonth: middleMonth,
      checkedMonths: [],
      revealedStudentIds: new Array(),
      attemptCount: 0,
      isComplete: false,
    });
  };

  // -------------------------------------------------------------------------
  // EFFECTS
  // -------------------------------------------------------------------------

  useEffect(() => {
    reset();
  }, [studentList]);

  // -------------------------------------------------------------------------
  // RENDER HELPERS
  // -------------------------------------------------------------------------

  const AgeRankingContent = (
    <div className="space-y-4">
      {/* Extra Information Section */}
      <div>
        <p className="font-bold mb-2">Extra Information</p>
        <div className="bg-gray-100 p-3 rounded space-y-1 text-sm">
          {oldestStudent && (
            <p>
              The oldest student in the class is: <strong>{oldestStudent.name}</strong> ({oldestStudent.birthMonth})
            </p>
          )}
          {youngestStudent && (
            <p>
              The youngest student the class is: <strong>{youngestStudent.name}</strong> ({youngestStudent.birthMonth})
            </p>
          )}
        </div>
      </div>

      {/* Age Ranking Section */}
      <div>
        <p className="font-bold mb-2">Class Birthdays</p>
        <p className="text-xs text-gray-600 mb-3">
          Sorted by school year (September to August)
        </p>

        <div className="space-y-1">
          {state.students
            .sort((a, b) => {
              return a.schoolYearRank - b.schoolYearRank
            })
            .map((student) => {
              const isRevealed = state.revealedStudentIds.includes(student.id);
              const isTarget = student.id === state.targetStudent?.id;

              return (
                <div
                  key={student.id}
                  className={`
                    p-2 rounded text-sm flex items-center justify-between
                    ${isTarget ? 'bg-orange-100 border-2 border-orange-500' : 'bg-gray-50'}
                  `}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{student.name}</span>
                    {isTarget && <span>🎯</span>}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-blue-100 px-2 py-1 rounded">
                      {formatAgeRank(student.ageRank, state.students.length)}
                    </span>
                    {isRevealed && (
                      <span className="text-xs text-gray-500">
                        {student.birthMonth}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-sm">
        <p className="font-medium mb-1">💡 How to use this information:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Compare students birthdays to decide which direction to search</li>
          <li>Birth months are revealed when you check them</li>
        </ul>
      </div>
    </div>
  );

  // -------------------------------------------------------------------------
  // RENDER
  // -------------------------------------------------------------------------

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <p>
        Binary search means reducing the search space by half each time you
        check a birthday month. I've provided some{" "}
        <Root open={isAgeRankingModalOpen} onOpenChange={setAgeRankingModalOpen}>
          <Trigger asChild>
            <button className="underline text-blue-500 hover:text-blue-700">
              class information
            </button>
          </Trigger>
          <Portal>
            <Overlay className="bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50" />
            <Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg">
              <div className="border-b border-gray-200 p-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Class Information</h2>
                <button
                  onClick={() => setAgeRankingModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {AgeRankingContent}
              </div>
            </Content>
          </Portal>
        </Root>{" "}
        to help you decide which half to check next.
      </p>

      {/* Month Display */}
      <div className="flex flex-col gap-2 items-center">
        {SCHOOL_YEAR_MONTHS.map((month) => {
          const isChecked = state.checkedMonths.includes(month);
          const isSelected = month === state.selectedMonth;

          return (
            <div
              key={month}
              className={`
                border border-gray-300 rounded-md p-2 w-36 text-center 
                transition-all duration-300
                ${isSelected ? "bg-orange-200 border-orange-500 font-semibold" : ""}
                ${isChecked ? "opacity-40 line-through bg-gray-200 text-gray-500" : ""}
              `}
            >
              {month}
            </div>
          );
        })}
      </div>

      {/* Messages */}
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold">{message.header}</p>
        {message.body && <p className="text-gray-700">{message.body}</p>}
        <p className="text-lg font-semibold text-blue-600">
          {state.attemptCount} attempts
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 items-center">
        <Button
          size="long"
          label="Check Birthdays"
          disabled={state.isComplete}
          onClick={checkBirthday}
          backgroundColor="blue"
        />

        {message.body === "No students found for this month." ? (
          <>
            <Button
              size="long"
              label="Check Previous Month"
              onClick={checkPreviousMonth}
              backgroundColor="green"
            />
            <Button
              size="long"
              label="Check Next Month"
              onClick={checkNextMonth}
              backgroundColor="purple"
            />
          </>
        ) : (
          <>
            <Button
              size="long"
              label="Search Earlier Months"
              disabled={state.isComplete}
              onClick={searchEarlierMonths}
              backgroundColor="green"
            />
            <Button
              size="long"
              label="Search Later Months"
              disabled={state.isComplete}
              onClick={searchLaterMonths}
              backgroundColor="purple"
            />
          </>
        )}

        <Button
          size="long"
          label="Reset"
          onClick={reset}
          backgroundColor="white"
          textColor="text-blue-500"
        />
      </div>
    </div>
  );
}