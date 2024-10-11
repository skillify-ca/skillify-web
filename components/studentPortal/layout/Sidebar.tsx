import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_USER_ROLE,
  FetchRoleData,
} from "../../../graphql/studentPortal/users/fetchUserRole";
import { useAuth } from "../../../lib/authContext";
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
      if (data && data.users) {
        if (data.users[0].userRole === "coach") {
          dispatch(setUserRole("coach"));
        } else if (data.users[0].userRole === "student") {
          dispatch(setUserRole("student"));
        } else if (data.users[0].userRole === "paid") {
          dispatch(setUserRole("paid"));
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
    } else if (router.pathname.startsWith("/studentPortal/workshops")) {
      dispatch(setActivePage("workshops"));
    } else if (router.pathname.startsWith("/studentPortal/courses/frontend")) {
      dispatch(setActivePage("frontend_development"));
    } else if (
      router.pathname.startsWith("/studentPortal/courses/codingBasics")
    ) {
      dispatch(setActivePage("coding_basics"));
    } else if (router.pathname.startsWith("/studentPortal")) {
      dispatch(setActivePage("dashboard"));
    } else {
      dispatch(setActivePage("dashboard"));
    }
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

          {userRole === "student" || userRole === "coach" ? (
            <ExperimentalSidebarSection userRole={userRole} />
          ) : null}
          {userRole === "coach" ? (
            <Link href="/studentPortal/admin">
              <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Admin</p>
              </div>
            </Link>
          ) : null}
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
