import { useQuery } from "@apollo/client";
import { format, addDays } from "date-fns";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUserAssignmentSubmissionsDataResponse,
  FETCH_USER_ASSIGNMENT_SUBMISSIONS,
} from "../../../graphql/fetchUserAssignmentSubmissions";
import {
  FetchGoalCountResponse,
  FETCH_USER_GOALS_COUNT,
} from "../../../graphql/fetchUserGoalsCount";
import { useAuth } from "../../../lib/authContext";
import {
  activePageSelector,
  setAssignmentReviewed,
  setIsGoalApproaching,
} from "../../../redux/sidebarSlice";
import Navbar from "../../ui/Navbar";
import Sidebar from "./Sidebar";

export const Layout: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();

  const goalDateThreshold = format(addDays(new Date(), 7), "MM/dd/yyyy");
  const {} = useQuery<FetchGoalCountResponse>(FETCH_USER_GOALS_COUNT, {
    variables: {
      userId: user.uid,
      goalDateThreshold: goalDateThreshold,
    },
    onCompleted: (data) => {
      if (data.user_goals_aggregate.aggregate.count) {
        dispatch(setIsGoalApproaching(true));
      } else {
        dispatch(setIsGoalApproaching(false));
      }
    },
    fetchPolicy: "cache-and-network",
  });

  const { data } = useQuery<FetchUserAssignmentSubmissionsDataResponse>(
    FETCH_USER_ASSIGNMENT_SUBMISSIONS,
    {
      variables: {
        user_id: user.uid,
      },
      onCompleted: (data) => {
        if (data.user_assignment_submissions) {
          const instructorReviewed = data.user_assignment_submissions.filter(
            (assignment) => assignment.hasViewed === true
          );
          if (instructorReviewed.length > 0) {
            dispatch(setAssignmentReviewed(true));
          } else {
            dispatch(setAssignmentReviewed(false));
          }
        }
      },
      fetchPolicy: "cache-and-network",
    }
  );

  return (
    <div className="flex flex-col h-full bg-red-300">
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <div className="fixed z-20 flex justify-between w-full h-16 col-span-12 p-4 bg-white border-b-2 dark:bg-gray-900">
        <div onClick={(e) => setActive(!active)}>
          <div className="cursor-pointer dark:text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <img className="visible w-48 h-8 dark:hidden" src="/images/logo.svg" />
        <img
          className="hidden w-48 h-8 dark:visible"
          src="/images/logo-dark.svg"
        />
        <div />
      </div>
      <div className="flex">
        <div className="hidden max-h-screen mt-16 w-96 lg:flex">
          <Sidebar />
        </div>
        <div
          className={`dark:text-white overflow-auto w-full max-h-screen h-full transition-all transform duration-500 ease-in-out grid grid-cols-1 gap-4 bg-gray-100 dark:bg-gray-800`}
        >
          <div className="h-16" />
          <div className="min-h-screen">{children}</div>
        </div>
      </div>
      <div
        className={`fixed z-10 w-56 top-16 lg:hidden ${
          active ? "left-0" : "-left-56"
        } h-full transition-all transform duration-500 ease-in-out`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
