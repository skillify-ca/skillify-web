import { useQuery } from "@apollo/client";
import { addDays, format } from "date-fns";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchGoalCountResponse,
  FETCH_USER_GOALS_COUNT,
} from "../../../graphql/studentPortal/goals/fetchUserGoalsCount";
import { useAuth } from "../../../lib/authContext";
import { profileSelector } from "../../../redux/profileSlice";
import { setIsGoalApproaching } from "../../../redux/sidebarSlice";
import { setTheme, Theme, themeSelector } from "../../../redux/themeSlice";
import { FreemiumHeader } from "../freemium/FreemiumHeader";
import Sidebar from "./Sidebar";

export const Layout: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const { currentTheme } = useSelector(themeSelector);
  const { userRole, createdAt } = useSelector(profileSelector);
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
    <div className={`flex flex-col h-full bg-white ${currentTheme}`}>
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
        {userRole === "freemium" ? (
          <FreemiumHeader
            handleMenuIconClick={() => setActive(!active)}
            handleToggleClick={() =>
              dispatch(
                currentTheme === Theme.DEFAULT
                  ? setTheme(Theme.DRACULA)
                  : setTheme(Theme.DEFAULT)
              )
            }
            createdAt={createdAt}
            theme={currentTheme}
          />
        ) : (
          <Header
            handleMenuIconClick={() => setActive(!active)}
            handleToggleClick={() =>
              dispatch(
                currentTheme === Theme.DEFAULT
                  ? setTheme(Theme.DRACULA)
                  : setTheme(Theme.DEFAULT)
              )
            }
            theme={currentTheme}
          />
        )}
      </div>
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden h-full max-h-screen grid-cols-1 pt-16 overflow-auto border-r-2 w-96 lg:grid">
          <Sidebar />
        </div>
        <div
          className={`overflow-auto pt-16 w-full max-h-screen h-full transition-all transform duration-500 ease-in-out grid grid-cols-1 bg-backgroundPrimary text-textPrimary`}
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

function Header({
  handleMenuIconClick,
  handleToggleClick,
  theme = Theme.DEFAULT,
}) {
  return (
    <div className="grid w-full h-16 grid-cols-3 border-b-2 bg-backgroundPrimary">
      {/* <div /> */}
      <div onClick={handleMenuIconClick} className="flex items-center pl-4">
        <div className="cursor-pointer text-textPrimary lg:hidden">
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
      <div className="place-self-center">
        {theme === Theme.DEFAULT ? (
          <img className="w-48 h-8 " src="/images/logo.svg" />
        ) : theme === Theme.DRACULA ? (
          <img className="w-48 h-8" src="/images/logo-dark.svg" />
        ) : null}
      </div>
      <div
        onClick={handleToggleClick}
        className="flex items-center justify-end pr-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-textPrimary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Layout;
