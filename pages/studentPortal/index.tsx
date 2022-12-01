import React, { useEffect, useState } from "react";
import Sidebar from "../../components/coding/studentPortal/Sidebar";
import UnitView from "../../components/coding/studentPortal/UnitView";
import { useAuth } from "../../lib/authContext";
import { interviewUnits, reactUnits, Unit } from "../api/studentPortal/units";

import moment from "moment";
import { useMutation, useQuery } from "@apollo/client";
import {
  INIT_USER_INTRO_NODES,
  objects,
} from "../../graphql/coding/initUserIntroNodes";
import {
  FETCH_USER_INTRO_NODES,
  transform,
} from "../../graphql/coding/fetchUserIntroNodes";
import { UPDATE_USER } from "../../graphql/updateUser";
import { useSelector } from "react-redux";
import { courseSelector } from "../../redux/courseSlice";
import ProfileDetailCard from "../../components/coding/studentPortal/ProfileDetailCard";

export default function StudentPortalPage() {
  const { user } = useAuth();

  const [initUserNodes] = useMutation(INIT_USER_INTRO_NODES);
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_INTRO_NODES, {
    variables: {
      userId: user.uid,
    },
  });
  const [units, setUnits] = useState<Unit[]>([]);
  useEffect(() => {
    // TODO move this to user onboarding, so we're not re-initializing the nodes on every page load
    if (user) {
      initUserNodes({
        variables: {
          objects: objects(user),
        },
        refetchQueries: [
          {
            query: FETCH_USER_INTRO_NODES,
            variables: {
              userId: user.uid,
            },
          },
        ],
      });
    }
  }, [user]);

  const course = useSelector(courseSelector);

  useEffect(() => {
    console.log("current course", course.currentCourse);

    if (course.currentCourse === "react") {
      setUnits(reactUnits);
    } else if (course.currentCourse === "interview") {
      setUnits(interviewUnits);
    } else if (data) {
      setUnits(transform(data));
    }
  }, [data, course.currentCourse]);

  useEffect(() => {
    // TODO save profile photos to firebase storage and allow users to edit photos
    updateUser({
      variables: {
        userId: user.uid,
        last_seen: new Date(),
        profile_image: user.photoURL,
      },
    });
  }, [user]);

  const profileData = [
    {
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Yvonne Yukon",
      joinDate: "2020-12-12",
      badges: "20/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "learning javascript syntax",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Jessica Yale",
      joinDate: "2021-11-7",
      badges: "2/35",
      currentFocus: "using React to build web applications",
      nextGoal: "learning Redux",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Mark Duckerberg",
      joinDate: "2019-4-12",
      badges: "33/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "unit testing",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Miler Perour",
      joinDate: "2022-1-1",
      badges: "35/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "learning javascript syntax",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Yvonne Yukon V2",
      joinDate: "1972-12-12",
      badges: "20/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "learning javascript syntax",
    },
  ];
  return (
    // // Skeleton Code to display the coaching dashboard if they are a coach and student dashboard if student
    // switch({user}.role){
    //   case "coach":
    //     // Put Coaching dashboard code here
    //     break;
    //   case "student":
    //     // Put Student dashboard code here
    //     break;
    // }
    <div className="flex flex-col w-full px-4 pb-4 sm:px-8 sm:pb-8 ">
      {/* Coaching DashBoard Code */}
      <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
        <div>
          <div className="mb-8 text-3xl">Coaching Dashboard</div>
          <h2 className="mb-4">Enrolled Students</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {profileData.map((it) => (
              <div className="rounded-md">
                <ProfileDetailCard
                  avatar={it.avatar}
                  name={it.name}
                  joinDate={it.joinDate}
                  badges={it.badges}
                  currentFocus={it.currentFocus}
                  nextGoal={it.nextGoal}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Coaching DashBoard Code */}
      <div className="p-4 bg-white shadow-md mb-14 sm:p-8 dark:bg-gray-900">
        <p className="font-bold">{moment().format("MMM Do YYYY")}</p>
        <p className="text-3xl font-bold">
          Let's start learning, {user.displayName}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {units.map((it) => (
          <UnitView data={it} />
        ))}
      </div>
    </div>
  );
}

StudentPortalPage.auth = true;
