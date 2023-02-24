import { useQuery } from "@apollo/client";
import { format, addDays } from "date-fns";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FetchGoalCountResponse,
  FETCH_USER_GOALS_COUNT,
} from "../../../graphql/fetchUserGoalsCount";
import { useAuth } from "../../../lib/authContext";
import { setIsGoalApproaching } from "../../../redux/sidebarSlice";
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

  return (
    <div className="flex flex-col h-full bg-white">
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>

      <div className="fixed z-20 w-full">
        <Header handleMenuIconClick={() => setActive(!active)} />
      </div>
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden h-full max-h-screen grid-cols-1 pt-16 overflow-auto bg-blue-500 border-r-2 w-96 lg:grid">
          <Sidebar />
        </div>
        <div
          className={` dark:text-white overflow-auto pt-16 w-full max-h-screen h-full transition-all transform duration-500 ease-in-out grid grid-cols-1 bg-white dark:bg-gray-800`}
        >
          <div className="min-h-screen">
            <div>{children}</div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-10 w-56 top-16 lg:hidden ${
          active ? "left-0" : "-left-56"
        } h-full transition-all transform duration-500 ease-in-out bg-white dark:bg-gray-900 border-r-2`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

function Header({ handleMenuIconClick }) {
  return (
    <div className="flex justify-between w-full h-16 p-4 bg-white border-b-2 dark:bg-gray-900">
      <div onClick={handleMenuIconClick}>
        <div className="cursor-pointer dark:text-white lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
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
  );
}

export default Layout;
