import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../../../components/Navbar";
import { Button } from "../../../../../components/ui/Button";
import { FETCH_USER_SKILL_BADGE } from "../../../../../graphql/fetchBadgeForSkill";
import { FETCH_USER_BADGES } from "../../../../../graphql/fetchUserBadge";
import { LOCK_USER_BADGES } from "../../../../../graphql/lockUserCodingBadges";
import { FETCH_ALL_STUDENT_CODING_BADGES } from "../../../../../graphql/fetchAllStudentCodingBadges";

//You need to create a badge object
type Badge = {
  image: string;
  visibility: boolean;
};
let studentBadges: Badge[][] = [];
let emptyBadge: Badge = {
  image: "/images/Addition5.png",
  visibility: false,
};
let Student: Badge[] = [];
Student.push(emptyBadge);
Student.push(emptyBadge);
Student.push(emptyBadge);

const numOfStudents = 6;

for (let i = 0; i < numOfStudents; i++) {
  studentBadges.push(Student);
}

const Studentbadges = () => {
  const [student, setStudent] = useState("No Student is Selected");
  const [allStudentBadges, setallStudentBadges] =
    useState<Badge[][]>(studentBadges);

  const getStudentId = () => {
    if (student == "Kishan") {
      return 0;
    } else if (student == "Mithulan") {
      return 1;
    } else if (student == "Vinon") {
      return 3;
    } else if (student == "Sujee") {
      return 4;
    } else if (student == "Mau") {
      return 5;
    } else {
      //Student is Raveen
      return 2;
    }
  };

  const getUserId = (index: number) => {
    if (index === 1) {
      return "8Wz2A4kMUKhF4s1wJvpXrlegDZx2";
    } else if (index === 0) {
      return "o9I7s9CfZtXcQip7TKOCh78gil92";
    } else if (index == 3) {
      return "i4PwuL2ptnRceL6G1QCf10Lj5Jv1";
    } else if (index == 4) {
      return "mG8dDQ9A4mfZVCDrMiKVt07rWdZ2";
    } else if (index == 5) {
      return "JBzifNvp35dITdL5PHtElD9Yvj42";
    } else {
      return "iHvoTD4uKzXUQXJ40kcio0wnJR32";
    }
  };

  const getUserIndex = (userId: string) => {
    if (userId == "o9I7s9CfZtXcQip7TKOCh78gil92") {
      return 0;
    } else if (userId == "8Wz2A4kMUKhF4s1wJvpXrlegDZx2") {
      return 1;
    } else if (userId == "i4PwuL2ptnRceL6G1QCf10Lj5Jv1") {
      return 3;
    } else if (userId == "mG8dDQ9A4mfZVCDrMiKVt07rWdZ2") {
      return 4;
    } else if (userId == "JBzifNvp35dITdL5PHtElD9Yvj42") {
      return 5;
    } else {
      return 2;
    }
  };

  const saveChanges = () => {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        unlockBadge({
          variables: {
            userId: getUserId(i),
            locked: !allStudentBadges[i][j].visibility,
            badgeId: j + 1,
          },
        });
      }
    }
  };

  const [unlockBadge, unlockBadgeData] = useMutation(LOCK_USER_BADGES);
  const onButtonClick = (student: string, badge: number) => {
    let newStudentBadges = JSON.parse(JSON.stringify(allStudentBadges)); //Deep copy
    let studentId = getStudentId();
    newStudentBadges[studentId][badge].visibility =
      !newStudentBadges[studentId][badge].visibility;
    setallStudentBadges(newStudentBadges);
    //Graphql
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold justify text-center">{student}</h1>
      <h1 className="border-4 border-black text-center">Students</h1>
      <ol>
        <div className="grid grid-cols-3 m-2 justify-items-center gap-2">
          <li>
            <Button
              label={"Kishan"}
              backgroundColor="blue"
              textColor="white"
              onClick={() => setStudent("Kishan")}
            ></Button>
          </li>
          <li>
            <Button
              label={"Mithulan"}
              backgroundColor="blue"
              textColor="white"
              onClick={() => setStudent("Mithulan")}
            ></Button>
          </li>
          <li>
            <Button
              label={"Raveen"}
              backgroundColor="blue"
              textColor="white"
              onClick={() => setStudent("Raveen")}
            ></Button>
          </li>
          <li>
            <Button
              label={"Vinon"}
              backgroundColor="blue"
              textColor="white"
              onClick={() => setStudent("Vinon")}
            ></Button>
          </li>
          <li>
            <Button
              label={"Sujee"}
              backgroundColor="blue"
              textColor="white"
              onClick={() => setStudent("Sujee")}
            ></Button>
          </li>
          <li>
            <Button
              label={"Mau"}
              backgroundColor="blue"
              textColor="white"
              onClick={() => setStudent("Mau")}
            ></Button>
          </li>
        </div>
      </ol>

      <h1 className="border-4 border-black text-center">Badges</h1>
      <div className="grid grid-cols-3 mt-2">
        <img
          src="/images/Addition5.png"
          className={`w-full h-full ${
            allStudentBadges[getStudentId()][0].visibility && !loading && data
              ? "border-8 border-green-600"
              : "border-8 border-red-600"
          }`}
          onClick={() => onButtonClick(student, 0)}
        />
        <img
          src="/images/Addition6.png"
          className={`w-full h-full ${
            allStudentBadges[getStudentId()][1].visibility && !loading && data
              ? "border-8 border-green-600"
              : "border-8 border-red-600"
          }`}
          onClick={() => onButtonClick(student, 1)}
        />
        <img
          src="/images/Addition4.png"
          className={`w-full h-full ${
            allStudentBadges[getStudentId()][2].visibility && !loading && data
              ? "border-8 border-green-600"
              : "border-8 border-red-600"
          }`}
          onClick={() => onButtonClick(student, 2)}
        />
      </div>

      <div className="border-4 border-black text-center mt-2">Description</div>
      <div className="m-2"></div>

      <div className="flex w-full justify-center">
        <Button
          label={"Save Changes"}
          backgroundColor="green"
          textColor="white"
          onClick={() => saveChanges()}
        ></Button>
      </div>
    </div>
  );
};

export default Studentbadges;
