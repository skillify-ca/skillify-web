import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../components/ui/Button";

import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dialog";
import LandingNavbarV2 from "../components/landingPage/LandingNavbarV2";
import { Theme } from "../redux/themeSlice";

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
];

const HOURS = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
];

const original = [10, 20, 30, 40, 50, 60, 70];

function rotate(arr: number[], k: number) {
  return [...arr.slice(k), ...arr.slice(0, k)];
}

export default function RotatedArray() {
  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Rotated Sorted Array</h1>

      <p>
        This activity is a simulation of a rotated sorted array. The array is
        rotated by a random number of positions. It's based on{" "}
        <a
          className="text-blue-500 underline"
          href="https://leetcode.com/problems/search-in-rotated-sorted-array/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leetcode problem 33
        </a>
        .
      </p>

      <p>
        Rotated sorted arrays can appear in various ways in real life. For
        example, the months of the school year is a sorted array, but the
        starting position is rotated to September instead of January.
      </p>

      <div className="flex flex-row gap-2 items-center justify-start overflow-x-scroll lg:overflow-x-visible lg:justify-center">
        {MONTHS.map((month) => (
          <p key={month} className="border border-gray-300 rounded-md p-2">
            {month}
          </p>
        ))}
      </div>

      <p>
        The hours of a day is a sorted array, but we may want to start the day
        at 8am instead of 1am if we want to represent someones calendar or
        schedule.
      </p>

      <div className="flex flex-row gap-2 items-center justify-start overflow-x-scroll lg:overflow-x-visible lg:justify-center">
        {HOURS.map((month) => (
          <p key={month} className="border border-gray-300 rounded-md p-2">
            {month}
          </p>
        ))}
      </div>

      <p>A common problem is to find an item in a rotated sorted array.</p>

      <RandomSearchExample />

      <p className="font-bold">Approach 2: Linear Search</p>

      <p>Coming soon...</p>

      <p className="font-bold">Approach 3: Binary Search</p>
      <p>Coming soon...</p>

      {/* <h3 className="text-lg font-bold">Example 2: Schedules</h3> */}
    </div>
  );
}

function MagicalLibrary() {
  const [target, setTarget] = useState<number | null>(null);
  const [array, setArray] = useState<number[] | null>(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [message, setMessage] = useState("");

  // Only run on the client
  useEffect(() => {
    const rotation = Math.floor(Math.random() * original.length);
    const rotated = rotate(original, rotation);
    const picked = rotated[Math.floor(Math.random() * rotated.length)];

    setArray(rotated);
    setTarget(picked);
    setLeft(0);
    setRight(rotated.length - 1);
  }, []);

  if (!array || target == null) {
    return <div className="p-6">📚 Shuffling the library...</div>;
  }

  const mid = Math.floor((left + right) / 2);
  const isLeftSorted = array[left] <= array[mid];

  const sortedRange = isLeftSorted ? [left, mid] : [mid, right];

  function pick(direction: "left" | "right") {
    if (left > right) {
      setMessage("❌ The librarian is lost!");
      return;
    }

    if (array[mid] === target) {
      setMessage("🎉 You found the magical book!");
      return;
    }

    let goLeft: boolean;

    if (isLeftSorted) {
      goLeft = target >= array[left] && target < array[mid];
    } else {
      goLeft = !(target > array[mid] && target <= array[right]);
    }

    const correct =
      (direction === "left" && goLeft) || (direction === "right" && !goLeft);

    if (!correct) {
      setMessage("💥 Wrong hallway! The books vanish.");
      setLeft(1);
      setRight(0);
      return;
    }

    if (goLeft) {
      setRight(mid - 1);
    } else {
      setLeft(mid + 1);
    }
  }

  return (
    <div>
      <p>
        Find the magical book:{" "}
        <span className="font-bold text-purple-600">{target}</span>
      </p>

      <div className="flex gap-2 justify-center">
        {array.map((b, i) => {
          const isMid = i === mid;
          const isSorted = i >= sortedRange[0] && i <= sortedRange[1];

          return (
            <div
              key={i}
              className={`
            w-12 h-16 flex items-center justify-center rounded
            border text-lg font-bold
            ${isMid ? "bg-yellow-300" : ""}
            ${isSorted ? "border-green-500" : "border-red-400"}
            ${i < left || i > right ? "opacity-30" : ""}
          `}
            >
              {b}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => pick("left")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search Left
        </button>
        <button
          onClick={() => pick("right")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Search Right
        </button>
      </div>

      <p className="text-lg font-semibold text-center">{message}</p>

      <div className="text-sm text-gray-600 text-center">
        🟨 = mid &nbsp; 🟩 = sorted half &nbsp; 🟥 = rotated half
      </div>
    </div>
  );
}

const studentNames = [
  "Liiyaani",
  "Ayla",
  "Vaira",
  "Veerayi",
  "Minnal",
  "Bhoomi",
  "Kyran",
  "Nila",
  "Akash",
  "Kaavia",
  "Viyan",
  "Arjen",
  "Sathiyan",
  "Harini",
  "Aarav",
  "Ishaan",
  "Sakshi",
  "Riya",
  "Sanya",
  "Vivaan",
  "Sam",
  "Alex",
  "Aaron",
  "Harry",
];

function RandomSearchExample() {
  const [messageHeader, setMessageHeader] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [counter, setCounter] = useState(0);
  const [birthdayMap, setBirthdayMap] = useState<Map<string, string[]>>(
    new Map()
  );
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [triedMonths, setTriedMonths] = useState<string[]>([]);
  const [searchStudent, setSearchStudent] = useState<string | null>(null);
  const [months, setMonths] = useState<string[]>(MONTHS);
  // Add this state to manage the student list
  const [studentList, setStudentList] = useState<string[]>(studentNames);

  // randomly assign a birthday to each student. a month can have multiple students.
  const createBirthdayMap = useCallback(() => {
    const birthdayMap = new Map<string, string[]>();
    for (const student of studentList) {
      const birthday = MONTHS[Math.floor(Math.random() * MONTHS.length)];
      if (!birthdayMap.has(birthday)) {
        birthdayMap.set(birthday, [student]);
      } else {
        birthdayMap.get(birthday)?.push(student);
      }
    }
    console.log("birthdayMap", birthdayMap);
    console.log("studentList", studentList);
    return birthdayMap;
  }, [studentList]);

  const getRandomStudent = useCallback(() => {
    return studentList[Math.floor(Math.random() * studentList.length)];
  }, [studentList]);

  // Handler for when students are updated
  const handleStudentsUpdate = (newStudents: string[]) => {
    setStudentList(newStudents);
    // Reset the game with new student list
    reset();
  };

  const checkBirthday = (selectedMonth: string) => {
    const students = birthdayMap.get(selectedMonth);
    if (students?.includes(searchStudent)) {
      setMessageHeader(
        `🎉 You found ${searchStudent}'s birthday! They have a ${selectedMonth} birthday.`
      );
      setMessageBody("");
    } else {
      setMessageHeader(`❌ You did not find ${searchStudent}'s birthday!`);
      // show all students for this month
      const studentsForMonth = birthdayMap.get(selectedMonth);
      if (studentsForMonth) {
        if (studentsForMonth.length > 1) {
          setMessageBody(
            `${studentsForMonth.join(", ")} have a ${selectedMonth} birthday.`
          );
        } else {
          setMessageBody(
            `Only ${studentsForMonth[0]} has a ${selectedMonth} birthday.`
          );
        }
      } else {
        setMessageBody("No students found for this month.");
      }
    }

    setCounter(counter + 1);

    setTriedMonths([...triedMonths, selectedMonth]);
  };

  const reset = () => {
    setMessageHeader("");
    setMessageBody("");
    setCounter(0);
    setSelectedMonth(null);
    const map = createBirthdayMap();
    setBirthdayMap(map);
    setSearchStudent(getRandomStudent());
    setMonths(MONTHS);
    setTriedMonths([]);
  };

  useEffect(() => {
    reset();
  }, [studentList]);

  return (
    <div className="space-y-6">
      <div className="flex flex-row gap-2 items-center">
        <h3 className="text-lg font-bold">Example 1: Birthdays</h3>
        <ManageStudentsModal
          students={studentList}
          defaultStudents={studentNames}
          onSave={handleStudentsUpdate}
        />
      </div>

      <p>Find a student's birthday in the list of birthday months.</p>

      <p className="font-bold">Approach 1: Random Search</p>

      <div className="flex flex-col gap-2 items-center overflow-x-scroll">
        {months.map((month) => {
          const isTried = triedMonths.includes(month);
          const isSelected = selectedMonth === month;

          return (
            <p
              key={month}
              onClick={() => !isTried && setSelectedMonth(month)} // Prevent clicking tried months
              className={`
                border border-gray-300 rounded-md p-2 w-36 text-center 
                transition-opacity duration-300
                ${
                  isSelected && !isTried ? "bg-orange-200 text-black" : ""
                }                
                ${
                  isTried
                    ? "opacity-40 line-through cursor-not-allowed bg-gray-200 text-gray-500"
                    : "cursor-pointer "
                }                
              `}
            >
              {month}
            </p>
          );
        })}
      </div>

      <p className="text-lg font-semibold text-center">
        {searchStudent
          ? `Searching for ${searchStudent}'s birthday...`
          : "No student selected"}
      </p>
      <p className="text-lg font-semibold text-center">{messageHeader}</p>
      <p className="text text-center">{messageBody}</p>
      <p className="text-lg font-semibold text-center">{counter} attempts</p>

      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          size="long"
          label="Check Birthdays"
          onClick={() => checkBirthday(selectedMonth)}
          backgroundColor="blue"
        />
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

function GearIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function ManageStudentsModal({
  students,
  defaultStudents,
  onSave,
}: {
  students: string[];
  defaultStudents: string[];
  onSave: (students: string[]) => void;
}) {
  const [localStudents, setLocalStudents] = useState<string[]>(students);
  const [newStudentName, setNewStudentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showRestoreConfirm, setShowRestoreConfirm] = useState(false);

  const handleAddStudent = () => {
    if (
      newStudentName.trim() &&
      !localStudents.includes(newStudentName.trim())
    ) {
      setLocalStudents([...localStudents, newStudentName.trim()]);
      setNewStudentName("");
    }
  };

  const handleRemoveStudent = (studentToRemove: string) => {
    setLocalStudents(localStudents.filter((s) => s !== studentToRemove));
  };

  const handleRestoreDefaults = () => {
    setLocalStudents(defaultStudents);
    setShowRestoreConfirm(false);
  };

  const handleSave = () => {
    if (localStudents.length > 0) {
      onSave(localStudents);
      setIsOpen(false);
    }
  };

  const handleCancel = () => {
    setLocalStudents(students); // Reset to original
    setNewStudentName("");
    setShowRestoreConfirm(false);
    setIsOpen(false);
  };

  // Check if current list matches default list
  const isDefaultList =
    JSON.stringify([...localStudents].sort()) ===
    JSON.stringify([...defaultStudents].sort());

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <button className="p-2 hover:bg-gray-50 transition-colors rounded-md">
          <GearIcon />
        </button>
      </Trigger>

      <Portal>
        <Overlay className="bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50" />

        <Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h2 className="text-xl font-bold">Manage Student List</h2>
              <p className="text-sm text-gray-600 mt-1">
                Add or remove students from your class roster
              </p>
            </div>

            {/* Add student input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddStudent()}
                placeholder="Enter student name"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAddStudent}
                disabled={!newStudentName.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Add
              </button>
            </div>

            {/* Student list */}
            <div className="border border-gray-200 rounded-md max-h-64 overflow-y-auto">
              {localStudents.length === 0 ? (
                <p className="text-center py-8 text-gray-500">
                  No students added yet
                </p>
              ) : (
                <div className="divide-y divide-gray-200">
                  {localStudents.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
                    >
                      <span className="text-gray-900">{student}</span>
                      <button
                        onClick={() => handleRemoveStudent(student)}
                        className="text-red-500 hover:text-red-700 font-medium text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Warning if list is empty */}
            {localStudents.length === 0 && (
              <p className="text-sm text-orange-600 bg-orange-50 p-3 rounded-md">
                ⚠️ You need at least one student to play the game
              </p>
            )}

            {/* Footer buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              {/* Left side - Restore Defaults */}
              <div>
                {isDefaultList ? (
                  <span className="text-sm text-gray-500">
                    Currently using default list
                  </span>
                ) : showRestoreConfirm ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Are you sure?</span>
                    <button
                      onClick={handleRestoreDefaults}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setShowRestoreConfirm(false)}
                      className="text-sm text-gray-600 hover:text-gray-700"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowRestoreConfirm(true)}
                    className="text-sm text-gray-600 hover:text-gray-800 underline"
                  >
                    Restore Defaults
                  </button>
                )}
              </div>

              {/* Right side - Cancel/Save */}
              <div className="flex gap-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={localStudents.length === 0}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}

RotatedArray.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbarV2 onSetCurrentCopy={() => {}} theme={Theme.DEFAULT} />
        {page}
    </div>
  );
};
