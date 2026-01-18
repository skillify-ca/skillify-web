import React, { useEffect, useState } from "react";
import { Button } from "../../../ui/Button";

// Examples
const MONTHS = [
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
];

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
];

// randomly assign a birthday to each student. a month can have multiple students.
const createBirthdayMap = (studentList) => {
  const birthdayMap = new Map<string, string[]>();
  for (const student of studentList) {
    const birthday = MONTHS[Math.floor(Math.random() * MONTHS.length)];
    if (!birthdayMap.has(birthday)) {
      birthdayMap.set(birthday, [student]);
    } else {
      birthdayMap.get(birthday)?.push(student);
    }
  }
  return birthdayMap;
};

// returns age order based on calendar year
const enumerateStudents = (birthdayMap) => {
  const enumeration = new Map<string, number>(); // Map<studentName, number>
  let counter = 1;

  for (const month of CALENDAR_MONTHS) {
    const students = birthdayMap.get(month);
    if (students && students.length > 0) {
      for (const student of students) {
        enumeration.set(student, counter);
        counter++;
      }
    }
  }

  return enumeration;
};
  students: Student[];
  revealedStudentIds: Array<string>;

const getRandomStudent = (enumeration, studentList) => {
  if (!enumeration || enumeration.size === 0) return null;

  const ordinals = Array.from(enumeration.values());
  const maxOrdinal = Math.max.apply(null, ordinals);

  const eligibleStudents = studentList.filter((student) => {
    const ordinal = enumeration.get(student);
    return ordinal !== 1 && ordinal !== maxOrdinal;
  });

  if (eligibleStudents.length === 0) return null;

  return eligibleStudents[Math.floor(Math.random() * eligibleStudents.length)];
};

export function BinarySearchExample({
  studentList,
}: {
  studentList: string[];
}) {
  const [messageHeader, setMessageHeader] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [counter, setCounter] = useState(0);
  const [birthdayMap, setBirthdayMap] = useState<Map<string, string[]>>(
    new Map()
  );
  const middleMonthIndex = Math.floor(MONTHS.length / 2);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    MONTHS[middleMonthIndex]
  );
  const [triedMonths, setTriedMonths] = useState<string[]>([]);
  const [searchStudent, setSearchStudent] = useState<string | null>(null);
  const [isPrimaryButtonDisabled, setIsPrimaryButtonDisabled] = useState(false);

  const [enumeration, setEnumeration] = useState<Map<string, number>>(
    new Map()
  );

  const checkBirthday = (selectedMonth: string) => {
    const students = birthdayMap.get(selectedMonth);
    if (students?.includes(searchStudent)) {
      setMessageHeader(
        `🎉 You found ${searchStudent}'s birthday! They have a ${selectedMonth} birthday.`
      );
      setMessageBody("");
      setIsPrimaryButtonDisabled(true);
    } else {
      console.log("length", triedMonths.length, MONTHS.length);
      if ([...triedMonths, selectedMonth].length === MONTHS.length) {
        setMessageHeader(`❌ You did not find ${searchStudent}'s birthday!`);
        setMessageBody("Did you use all the information provided?");
      } else {
        setMessageHeader(
          `Searching for ${searchStudent}'s birthday month (${getOrdinalSuffix(
            enumeration.get(searchStudent)
          )} oldest)...`
        );

        // show all students for this month
        const studentsForMonth = birthdayMap.get(selectedMonth);
        if (studentsForMonth) {
          if (studentsForMonth.length > 1) {
            const studentRanks = studentsForMonth.map(
              (student) =>
                `${student} (${getOrdinalSuffix(
                  enumeration.get(student)
                )} oldest)`
            );
            setMessageBody(
              `${studentRanks.join(", ")} have a ${selectedMonth} birthday.`
            );
          } else {
            const studentRank = getOrdinalSuffix(
              enumeration.get(studentsForMonth[0])
            );
            setMessageBody(
              `Only ${studentsForMonth[0]} (${studentRank} oldest) has a ${selectedMonth} birthday.`
            );
          }
        } else {
          setMessageBody("No students found for this month.");
        }
      }
    }

    if (!triedMonths.includes(selectedMonth)) {
      setTriedMonths([...triedMonths, selectedMonth]);
    }
    setCounter(counter + 1);
  };

  const searchEarlierMonths = () => {
    const selectedIndex = MONTHS.indexOf(selectedMonth);

    // Eliminate selected month and all later months
    const monthsToEliminate = MONTHS.slice(selectedIndex);

    // Remaining untried earlier months
    const remainingEarlierMonths = MONTHS.slice(0, selectedIndex).filter(
      (month) => !triedMonths.includes(month)
    );

    if (remainingEarlierMonths.length === 0) return;

    // Pick new midpoint
    const newMiddleIndex = Math.floor((remainingEarlierMonths.length - 1) / 2);
    const newSelectedMonth = remainingEarlierMonths[newMiddleIndex];

    setTriedMonths((prev) => {
      const newMonths = monthsToEliminate.filter((m) => !prev.includes(m));
      return [...prev, ...newMonths];
    });
    setSelectedMonth(newSelectedMonth);
  };

  const searchLaterMonths = () => {
    const selectedIndex = MONTHS.indexOf(selectedMonth);

    // Eliminate selected month and all earlier months
    const monthsToEliminate = MONTHS.slice(0, selectedIndex + 1);

    // Remaining untried later months
    const remainingLaterMonths = MONTHS.slice(selectedIndex + 1).filter(
      (month) => !triedMonths.includes(month)
    );

    if (remainingLaterMonths.length === 0) return;

    // Pick new midpoint
    const newMiddleIndex = Math.floor(remainingLaterMonths.length / 2);
    const newSelectedMonth = remainingLaterMonths[newMiddleIndex];

    setTriedMonths((prev) => {
      const newMonths = monthsToEliminate.filter((m) => !prev.includes(m));
      return [...prev, ...newMonths];
    });
    setSelectedMonth(newSelectedMonth);
  };

  const reset = () => {
    setMessageBody("");
    setCounter(0);
    setSelectedMonth(MONTHS[middleMonthIndex]);
    const map = createBirthdayMap(studentList);
    setBirthdayMap(map);
    const newEnumeration = enumerateStudents(map);
    const newSearchStudent = getRandomStudent(newEnumeration, studentList);
    setSearchStudent(newSearchStudent);
    const header = `Searching for ${newSearchStudent}'s birthday month (${getOrdinalSuffix(
      newEnumeration.get(newSearchStudent)
    )} oldest)...`;
    setEnumeration(newEnumeration);
    setMessageHeader(header);
    setTriedMonths([]);
    setIsPrimaryButtonDisabled(false);
  };

  useEffect(() => {
    reset();
  }, [studentList]);

  const getFirstBirthdayMonth = (birthdayMap, monthsInOrder) => {
    for (const month of monthsInOrder) {
      const students = birthdayMap.get(month);
      if (students && students.length > 0) {
        return students[0];
      }
    }
    return null; // No birthdays at all
  };

  const getLastBirthdayMonth = (birthdayMap, monthsInOrder) => {
    for (let i = monthsInOrder.length - 1; i >= 0; i--) {
      const month = monthsInOrder[i];
      const students = birthdayMap.get(month);
      if (students && students.length > 0) {
        return students[students.length - 1];
      }
    }
    return null;
  };

  const getOrdinalSuffix = (num) => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    // Special cases: 11th, 12th, 13th
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return num + "th";
    }

    // Regular cases
    if (lastDigit === 1) return num + "st";
    if (lastDigit === 2) return num + "nd";
    if (lastDigit === 3) return num + "rd";
    return num + "th";
  };

  const checkPreviousMonth = () => {
    const currentIndex = MONTHS.indexOf(selectedMonth);

    for (let i = currentIndex - 1; i >= 0; i--) {
      const month = MONTHS[i];

      // Skip months already eliminated by binary search
      if (!triedMonths.includes(month)) {
        setSelectedMonth(month);
        return;
      }
    }
  };

  const checkNextMonth = () => {
    const currentIndex = MONTHS.indexOf(selectedMonth);

    for (let i = currentIndex + 1; i < MONTHS.length; i++) {
      const month = MONTHS[i];

      // Skip months already eliminated by binary search
      if (!triedMonths.includes(month)) {
        setSelectedMonth(month);
        return;
      }
    }
  };

  const earliestBirthdayStudent = getFirstBirthdayMonth(birthdayMap, MONTHS);
  const earliestBirthdayStudentOrdinal = getOrdinalSuffix(
    enumeration.get(earliestBirthdayStudent)
  );
  const latestBirthdayStudent = getLastBirthdayMonth(birthdayMap, MONTHS);
  const latestBirthdayStudentOrdinal = getOrdinalSuffix(
    enumeration.get(latestBirthdayStudent)
  );

  return (
    <div className="space-y-6">
      <p className="">
        Binary search means reducing the search space by half each time you
        check a birthday month. I've provided some extra information to help you
        decide which half to check next. Every time you check a birthday month,
        you will learn what students in that class have a birthday in that
        month, and what their age rank is relative to the other students. For
        example the oldest student in the class would have an age rank of 1 and
        is probably born in January. The second oldest student in the class
        would have an age rank of 2. Can you find the student's birthday with
        the information provided?
      </p>

      <p>
        Earliest birthday in the school year is {earliestBirthdayStudent} (
        {earliestBirthdayStudentOrdinal} oldest)
      </p>
      <p>
        Latest birthday in the school year is {latestBirthdayStudent} (
        {latestBirthdayStudentOrdinal} oldest)
      </p>

      <div className="flex flex-col gap-2 items-center overflow-x-scroll">
        {MONTHS.map((month) => {
          const isTried = triedMonths.includes(month);

          return (
            <p
              key={month}
              className={`
                  border border-gray-300 rounded-md p-2 w-36 text-center 
                  transition-opacity duration-300
                  ${month === selectedMonth ? "bg-orange-200 text-black" : ""}
                  ${
                    isTried
                      ? "opacity-40 line-through cursor-not-allowed bg-gray-200 text-gray-500"
                      : "cursor-default"
                  }                
                `}
            >
              {month}
            </p>
          );
        })}
      </div>

      <p className="text-lg font-semibold text-center">{messageHeader}</p>
      <p className="text text-center">{messageBody}</p>
      <p className="text-lg font-semibold text-center">{counter} attempts</p>

      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          size="long"
          label="Check Birthdays"
          disabled={isPrimaryButtonDisabled}
          onClick={() => checkBirthday(selectedMonth)}
          backgroundColor="blue"
        />
        {messageBody === "No students found for this month." ? (
          <>
            <Button
              size="long"
              label="Check Previous Month"
              onClick={() => checkPreviousMonth()}
              backgroundColor="green"
            />
            <Button
              size="long"
              label="Check Next Month"
              onClick={() => checkNextMonth()}
              backgroundColor="purple"
            />
          </>
        ) : (
          <>
            <Button
              size="long"
              label="Search Earlier Months"
              disabled={isPrimaryButtonDisabled}
              onClick={() => searchEarlierMonths()}
              backgroundColor="green"
            />
            <Button
              size="long"
              label="Search Later Months"
              disabled={isPrimaryButtonDisabled}
              onClick={() => searchLaterMonths()}
              backgroundColor="purple"
            />
          </>
        )}
        <Button
          size="long"
          label="Reset"
          onClick={() => reset()}
          backgroundColor="white"
          textColor="text-blue-500"
        />
      </div>
    </div>
  );
}
