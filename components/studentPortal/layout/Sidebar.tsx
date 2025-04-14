"use client";

import { useQuery } from "@apollo/client/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_USER_ROLE,
  FetchRoleData,
} from "../../../graphql/studentPortal/users/fetchUserRole";
import { useAuth } from "../../../lib/authContext";
import { Mixpanel } from "../../../lib/mixpanel";
import { fetchProfilePicture } from "../../../pages/api/studentPortal/profile/profilePicturesClient";
import {
  profileSelector,
  setCreatedAt,
  setUserRole,
} from "../../../redux/profileSlice";
import { activePageSelector, setActivePage } from "../../../redux/sidebarSlice";
import FreemiumSidebarHeader from "../freemium/FreemiumSidebarHeader";
import PaidSidebarHeader from "../freemium/PaidSidebarHeader";
import ExperimentalSidebarSection from "./ExperimentalSidebarSection";
import { premiumCourses, sideBarItemsData } from "./SidebarData";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ closeSidebar }) {
  const { goalApproaching } = useSelector(activePageSelector);
  const { userRole, createdAt } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const { signOut, user } = useAuth();

  const [userProfileImage, setUserProfileImage] = useState<string>("");

  useQuery<FetchRoleData>(FETCH_USER_ROLE, {
    variables: {
      _id: user?.uid,
    },
    onCompleted: (data) => {
      if (data && data.users && data.users.length > 0) {
        if (data.users[0].userRole === "coach") {
          dispatch(setUserRole("coach"));
        } else if (data.users[0].userRole === "student") {
          dispatch(setUserRole("student"));
        } else if (data.users[0].userRole === "freemium") {
          dispatch(setCreatedAt(data.users[0].created_at));
          dispatch(setUserRole("freemium"));
        }
      }
    },
    fetchPolicy: "cache-and-network",
  });

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith("/studentPortal/coaches")) {
      dispatch(setActivePage("coaches"));
    } else if (router.pathname.startsWith("/studentPortal/admin")) {
      dispatch(setActivePage("admin"));
    } else if (router.pathname.startsWith("/profile")) {
      dispatch(setActivePage("profile"));
    } else if (router.pathname.startsWith("/studentPortal/goals")) {
      dispatch(setActivePage("goals"));
    } else if (router.pathname.startsWith("/studentPortal/accountability")) {
      dispatch(setActivePage("accountability"));
    } else if (router.pathname.startsWith("/studentPortal/courses/frontend")) {
      dispatch(setActivePage("frontend_development"));
    } else if (
      router.pathname.startsWith("/studentPortal/courses/codingBasics")
    ) {
      dispatch(setActivePage("coding_basics"));
    } else if (router.pathname.startsWith("/studentPortal")) {
      dispatch(setActivePage("dashboard"));
    } else if (router.pathname.startsWith("/studentPortal/jobs")) {
      dispatch(setActivePage("jobs"));
    } else {
      dispatch(setActivePage("dashboard"));
    }
    closeSidebar();
  }, [router.pathname]);

  useEffect(() => {
    if (user) {
      fetchProfilePicture(user.uid).then((imageUrl) => {
        if (imageUrl !== null) {
          setUserProfileImage(imageUrl);
        } else {
          // If no profile picture, use the one from Google
          setUserProfileImage(user.photoURL);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      Mixpanel.identify(user?.uid);
      Mixpanel.people.set({
        $name: user.displayName,
        $email: user?.email,
        plan: userRole,
      });
    }
  }, [user]);

  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full overflow-auto bg-backgroundPrimary text-textPrimary">
      <div className="grid">
        {user && userRole === "freemium" ? (
          <FreemiumSidebarHeader createdAt={createdAt} />
        ) : (
          <PaidSidebarHeader
            userRole={userRole}
            userProfileImage={userProfileImage}
          />
        )}
        {sideBarItemsData(user, goalApproaching).map((it) => {
          return (
            <SidebarItem
              key={it.title}
              userRole={userRole}
              it={it}
              closeSidebar={closeSidebar}
            />
          );
        })}
        <div>
          <div className="flex items-center justify-between p-4 ">
            <p className="font-bold">Courses</p>
          </div>
          <div className="">
            {premiumCourses.map((course) => {
              return (
                <SidebarItem
                  key={course.title}
                  userRole={userRole}
                  it={course}
                  closeSidebar={closeSidebar}
                />
              );
            })}
          </div>

          <ExperimentalSidebarSection
            userRole={userRole}
            closeSidebar={closeSidebar}
          />
        </div>
        <div
          className="flex flex-wrap p-4 mb-16 cursor-pointer hover:text-charmander hover:bg-yellow-50 dark:hover:bg-gray-800"
          onClick={signOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </div>
      </div>
    </div>
  );
}
