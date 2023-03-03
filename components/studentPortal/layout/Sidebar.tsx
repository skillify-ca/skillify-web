import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUserRoleData,
  FETCH_USER_ROLE,
} from "../../../graphql/studentPortal/users/fetchUserRole";
import { useAuth } from "../../../lib/authContext";
import { profileSelector, setUserRole } from "../../../redux/profileSlice";
import {
  activePageSelector,
  setActivePage,
  SidebarPage,
} from "../../../redux/sidebarSlice";
import SkillifyCommandPalette from "./CommandPalette";

interface SidebarItemProps {
  name: string;
  link: string;
  page: SidebarPage;
  icon: ReactElement;
  notifications?: boolean;
}
const SidebarItem = ({
  name,
  link,
  page,
  icon,
  notifications,
}: SidebarItemProps) => {
  const { activePage } = useSelector(activePageSelector);

  return (
    <Link href={link}>
      <div
        className={`flex flex-wrap items-center p-4 hover:border-l-4 ${
          activePage === page
            ? "border-l-4 border-brandPrimary text-brandPrimary cursor-default"
            : "cursor-pointer hover:bg-backgroundSecondary"
        } hover:border-brandPrimary hover:text-brandPrimary `}
      >
        <div>
          {notifications ? (
            <div className="relative left-6 top-1 ">
              <div className="flex w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          ) : null}
          {icon}
        </div>
        {name}
      </div>
    </Link>
  );
};

export const Sidebar: React.FC = () => {
  const { goalApproaching } = useSelector(activePageSelector);
  const { userRole } = useSelector(profileSelector);
  const dispatch = useDispatch();

  const { signOut, user } = useAuth();

  const {} = useQuery<FetchUserRoleData>(FETCH_USER_ROLE, {
    variables: {
      _id: user.uid,
    },
    onCompleted: (data) => {
      if (data.users[0].userRole.value === "coach") {
        dispatch(setUserRole("coach"));
      } else {
        dispatch(setUserRole("student"));
      }
    },
    fetchPolicy: "cache-and-network",
  });

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith("/studentPortal/coaches")) {
      dispatch(setActivePage("coaches"));
    } else if (router.pathname.startsWith("/profile")) {
      dispatch(setActivePage("profile"));
    } else if (router.pathname.startsWith("/studentPortal/goals")) {
      dispatch(setActivePage("goals"));
    } else if (router.pathname.startsWith("/studentPortal/workshops")) {
      dispatch(setActivePage("workshops"));
    } else {
      dispatch(setActivePage("dashboard"));
    }
  }, [router.pathname]);

  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full bg-backgroundPrimary text-textPrimary">
      <div className="grid">
        <div className="flex p-4">
          {user && (
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt=""
            />
          )}

          {user && (
            <div className="w-full">
              <p className="w-full ml-4 font-bold">{user.displayName}</p>
              <p className="ml-4 font-medium capitalize">{userRole}</p>
            </div>
          )}
        </div>
        <SidebarItem
          name={"Dashboard"}
          link={"/studentPortal"}
          page={"dashboard"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          }
        />
        <SidebarItem
          name={"Coaches"}
          link={"/studentPortal/coaches"}
          page={"coaches"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 mr-4`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          }
        />
        <SidebarItem
          name={"Profile"}
          link={`/profile/${user.uid}`}
          page={"profile"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          }
        />
        <SidebarItem
          name={"Goals"}
          notifications={goalApproaching}
          link={"/studentPortal/goals"}
          page={"goals"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" />
            </svg>
          }
        />
        <SidebarItem
          name={"Workshops"}
          link={"/studentPortal/workshops"}
          page={"workshops"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          }
        />

        {userRole === "coach" && (
          <SidebarItem
            name={"Admin"}
            link={"/studentPortal/admin"}
            page={"admin"}
            icon={
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
            }
          />
        )}

        <SkillifyCommandPalette />

        <div>
          <div className="flex items-center justify-between p-4 ">
            <p className="font-bold">Courses</p>
          </div>
          <div className="overflow-auto h-36">
            <Link href="/studentPortal">
              <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <p className="ml-3">Coding Basics</p>
              </div>
            </Link>
            <Link href="/studentPortal/web">
              <div className="flex p-4 cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <p className="ml-3">Web Development</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="flex flex-wrap p-4 cursor-pointer hover:text-charmander hover:bg-yellow-50 dark:hover:bg-gray-800"
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
};

export default Sidebar;
