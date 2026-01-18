import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../../ui/Button";

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
  
export function RandomSearchExample({ studentList }: { studentList: string[] }) {
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
    const [isPrimaryButtonDisabled, setIsPrimaryButtonDisabled] = useState(false);
  
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
      return birthdayMap;
    }, [studentList]);
  
    const getRandomStudent = useCallback(() => {
      return studentList[Math.floor(Math.random() * studentList.length)];
    }, [studentList]);
  
    const checkBirthday = (selectedMonth: string) => {
      const students = birthdayMap.get(selectedMonth);
      if (students?.includes(searchStudent)) {
        setMessageHeader(
          `🎉 You found ${searchStudent}'s birthday! They have a ${selectedMonth} birthday.`
        );
        setMessageBody("");
        setIsPrimaryButtonDisabled(true);
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
        setTriedMonths([...triedMonths, selectedMonth]);
      }
  
      setCounter(counter + 1);
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
      setIsPrimaryButtonDisabled(false);
    };
  
    useEffect(() => {
      reset();
    }, [studentList]);
  
    return (
      <div className="space-y-6">
        <p className="">
          Select a random month and click the "Check Birthdays" button to see if
          the student's birthday is in that month.
        </p>
  
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
            disabled={isPrimaryButtonDisabled}
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
  