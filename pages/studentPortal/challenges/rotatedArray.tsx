import React, { useState } from "react";

import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dialog";
import LandingNavbarV2 from "../../../components/landingPage/LandingNavbarV2";
import { BinarySearchExample } from "../../../components/studentPortal/challenges/rotatedArray/BinarySearchExample";
import { LinearSearchExample } from "../../../components/studentPortal/challenges/rotatedArray/LinearSearchExample";
import { RandomSearchExample } from "../../../components/studentPortal/challenges/rotatedArray/RandomSearchExample";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/Collapsible";
import { Theme } from "../../../redux/themeSlice";

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

export default function RotatedArray() {
  const [studentList, setStudentList] = useState<string[]>(studentNames);
  const [isRandomSearchOpen, setIsRandomSearchOpen] = useState(true);
  const [isLinearSearchOpen, setIsLinearSearchOpen] = useState(false);
  const [isBinarySearchOpen, setIsBinarySearchOpen] = useState(false);

  // Handler for when students are updated
  const handleStudentsUpdate = (newStudents: string[]) => {
    setStudentList(newStudents);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Rotated Sorted Array</h1>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 mb-8">
        <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
          <span className="mr-2">🎯</span> Learning Objectives
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-green-600 mr-2 mt-1">✓</span>
            <p className="text-gray-700">Understand what a rotated sorted array is and how it appears in real-world scenarios</p>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2 mt-1">✓</span>
            <p className="text-gray-700">Compare different search approaches: random, linear, and binary search</p>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2 mt-1">✓</span>
            <p className="text-gray-700">Analyze the efficiency of each algorithm in terms of time complexity</p>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2 mt-1">✓</span>
            <p className="text-gray-700">Apply problem-solving strategies based on{" "}
              <a
                className="text-blue-600 underline hover:text-blue-800"
                href="https://leetcode.com/problems/search-in-rotated-sorted-array/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leetcode problem 33
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Examples
        </h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium text-gray-900 mb-2">School Year Months</p>
            <p className="text-gray-700 mb-3">
              The months of the school year form a sorted array, but the starting position is rotated to September instead of January.
            </p>
            <div className="flex flex-row gap-2 items-center justify-start overflow-x-scroll">
              {MONTHS.map((month) => (
                <p key={month} className="border border-blue-300 bg-white rounded-md p-2 text-sm font-medium">
                  {month}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium text-gray-900 mb-2">Work Schedule Hours</p>
            <p className="text-gray-700 mb-3">
              The hours of a day form a sorted array, but we may want to start the day at 8am instead of 1am for someone's calendar or schedule.
            </p>
            <div className="flex flex-row gap-2 items-center justify-start overflow-x-scroll">
              {HOURS.map((hour) => (
                <p key={hour} className="border border-blue-300 bg-white rounded-md p-2 text-sm font-medium">
                  {hour}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <h3 className="text-lg font-bold">Interactive Lesson: Birthdays</h3>
        <ManageStudentsModal
          students={studentList}
          defaultStudents={studentNames}
          onSave={handleStudentsUpdate}
        />
      </div>

      <p>
        Find a specific student's birthday in the list of birthday months for
        your class.
      </p>

      <CollapsibleSection
        title="Approach 1: Random Search"
        open={isRandomSearchOpen}
        setOpen={setIsRandomSearchOpen}
      >
        <RandomSearchExample studentList={studentList} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Approach 2: Linear Search"
        open={isLinearSearchOpen}
        setOpen={setIsLinearSearchOpen}
      >
        <LinearSearchExample studentList={studentList} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Approach 3: Binary Search"
        open={isBinarySearchOpen}
        setOpen={setIsBinarySearchOpen}
      >
        <BinarySearchExample studentList={studentList} />
      </CollapsibleSection>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <span className="mr-2">💭</span> Reflection Questions
        </h3>
        <div className="space-y-4">
          <div className="bg-white rounded-md p-4 shadow-sm border border-blue-100">
            <p className="font-medium text-gray-900 mb-1">1. Efficiency Comparison</p>
            <p className="text-gray-700">Which approach felt the most efficient? Why?</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-sm border border-blue-100">
            <p className="font-medium text-gray-900 mb-1">2. Algorithm Impact</p>
            <p className="text-gray-700">If you had the age rankings for Approach 1 or 2, would that have changed the efficiency of those algorithms?</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-sm border border-blue-100">
            <p className="font-medium text-gray-900 mb-1">3. Pivot Point Analysis</p>
            <p className="text-gray-700">Do any of the algorithms need to change if the school year started in August or October? In general, does it matter where the pivot point in a rotated sorted array is?</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-sm border border-blue-100">
            <p className="font-medium text-gray-900 mb-1">4. Edge Case Handling</p>
            <p className="text-gray-700">Did you ever run into a month with no student birthdays? How did you decide what to do next?</p>
          </div>
        </div>
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
  "Myla",
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
  "Raiya",
  "Sanya",
  "Vivaan",
  "Alayah",
  "Aarangan",
  "Sam",
  "Alex",
  "Aaron",
  "Harry",
];

function CollapsibleSection({
  children,
  open,
  setOpen,
  title,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (boolean) => void;
  title: string;
}) {
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger>
        <div className="flex items-center justify-between">
          <span
            className={`${
              open ? "rotate-180" : "rotate-90"
            } transition-transform duration-300 mr-2`}
          >
            ▲
          </span>
          <p className="font-bold">{title}</p>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent forceMount className="overflow-hidden">
        <div
          className={`grid transition-all duration-300 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden pt-4 pb-4">{children}</div>
        </div>
      </CollapsibleContent>
    </Collapsible>
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
