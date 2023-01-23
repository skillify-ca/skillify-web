import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/Button";
import Navbar from "../../components/ui/Navbar";
import { LOCK_USER_BADGES } from "../../graphql/lockUserCodingBadges";
import { useAuth } from "../../lib/authContext";

//You need to create a badge object
type Badge = {
  image: string;
  visibility: boolean;
};
const studentBadges: Badge[][] = [];
const emptyBadge: Badge = {
  image: "/images/Addition5.png",
  visibility: false,
};
const Student: Badge[] = [];
Student.push(emptyBadge);
Student.push(emptyBadge);
Student.push(emptyBadge);

const numOfStudents = 6;

for (let i = 0; i < numOfStudents; i++) {
  studentBadges.push(Student);
}

const Studentbadges = () => {
  const { user } = useAuth();
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
    const newStudentBadges = JSON.parse(JSON.stringify(allStudentBadges)); //Deep copy
    const studentId = getStudentId();
    newStudentBadges[studentId][badge].visibility =
      !newStudentBadges[studentId][badge].visibility;
    setallStudentBadges(newStudentBadges);
    //Graphql
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-white">
          <h1 className="text-center border-4 border-black">Students</h1>
          <h1 className="text-2xl font-bold text-center justify">{student}</h1>
          <ol>
            <div className="grid grid-cols-1 gap-2 m-2 justify-items-center">
              <li>
                <Button
                  label={"Kishan"}
                  backgroundColor="blue"
                  onClick={() => setStudent("Kishan")}
                ></Button>
              </li>
              <li>
                <Button
                  label={"Mithulan"}
                  backgroundColor="blue"
                  onClick={() => setStudent("Mithulan")}
                ></Button>
              </li>
              <li>
                <Button
                  label={"Raveen"}
                  backgroundColor="blue"
                  onClick={() => setStudent("Raveen")}
                ></Button>
              </li>
              <li>
                <Button
                  label={"Vinon"}
                  backgroundColor="blue"
                  onClick={() => setStudent("Vinon")}
                ></Button>
              </li>
              <li>
                <Button
                  label={"Sujee"}
                  backgroundColor="blue"
                  onClick={() => setStudent("Sujee")}
                ></Button>
              </li>
              <li>
                <Button
                  label={"Mau"}
                  backgroundColor="blue"
                  onClick={() => setStudent("Mau")}
                ></Button>
              </li>
            </div>
          </ol>
        </div>
        <div className="col-span-9">
          <h1 className="text-center border-4 border-black">Badges</h1>
          <div className="grid grid-cols-3 mt-2">
            <img
              src="/images/Addition5.png"
              className={`w-full h-full ${
                allStudentBadges[getStudentId()][0].visibility
                  ? "border-8 border-green-600"
                  : "border-8 border-red-600"
              }`}
              onClick={() => onButtonClick(student, 0)}
            />
            <img
              src="/images/Addition6.png"
              className={`w-full h-full ${
                allStudentBadges[getStudentId()][1].visibility
                  ? "border-8 border-green-600"
                  : "border-8 border-red-600"
              }`}
              onClick={() => onButtonClick(student, 1)}
            />
            <img
              src="/images/Addition4.png"
              className={`w-full h-full ${
                allStudentBadges[getStudentId()][2].visibility
                  ? "border-8 border-green-600"
                  : "border-8 border-red-600"
              }`}
              onClick={() => onButtonClick(student, 2)}
            />
          </div>

          <div className="mt-2 text-center border-4 border-black">
            Description
          </div>
          <div className="m-2"></div>

          <div className="flex justify-center w-full">
            <Button
              label={"Save Changes"}
              backgroundColor="green"
              onClick={() => saveChanges()}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentbadges;

Studentbadges.getLayout = (page) => {
  return <div>{page}</div>;
};
