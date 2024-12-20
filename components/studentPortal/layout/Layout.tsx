import { useQuery } from "@apollo/client";
import { addDays, format } from "date-fns";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FETCH_USER_GOALS_COUNT,
  FetchGoalCountResponse,
} from "../../../graphql/studentPortal/goals/fetchUserGoalsCount";
import { useAuth } from "../../../lib/authContext";
import { UserRole, profileSelector } from "../../../redux/profileSlice";
import { setIsGoalApproaching } from "../../../redux/sidebarSlice";
import { Theme, setTheme, themeSelector } from "../../../redux/themeSlice";
import FreemiumDialogComponent from "../freemium/FreemiumDialogueComponent";
import FreemiumExitComponent from "../freemium/FreemiumExitComponent";
import { FreemiumHeader } from "../freemium/FreemiumHeader";
import Sidebar from "./Sidebar";
import { useLastSeenModal } from "./useLastSeenModal";

type LayoutProps = {
  children: React.ReactNode;
  isPremiumPage?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, isPremiumPage }) => {
  const [active, setActive] = useState(false);
  const { currentTheme } = useSelector(themeSelector);
  const { userRole, createdAt } = useSelector(profileSelector);
  const { user } = useAuth();
  const dispatch = useDispatch();

  const goalDateThreshold = format(addDays(new Date(), 7), "MM/dd/yyyy");
  const {} = useQuery<FetchGoalCountResponse>(FETCH_USER_GOALS_COUNT, {
    variables: {
      userId: user?.uid,
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

  const { showOnboardingModal, showExitModal } = useLastSeenModal(
    user?.uid,
    userRole,
    createdAt
  );

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
        {userRole === UserRole.FREEMIUM ? (
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
          <Sidebar closeSidebar={() => setActive(false)} />
        </div>
        <div
          className={`pt-16 w-full max-h-screen h-full transition-all transform duration-500 ease-in-out grid grid-cols-1 bg-backgroundPrimary text-textPrimary`}
        >
          <div className="min-h-screen">
            {isPremiumPage && userRole === UserRole.FREEMIUM ? (
              <div className="p-4">
                <p>
                  You are not allowed to view this page. Please contact the
                  website admin to upgrade your account.
                </p>
              </div>
            ) : (
              <div>{children}</div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-10 w-56 top-16 lg:hidden overflow-auto ${
          active ? "left-0" : "-left-56"
        } h-full transition-all transform duration-500 ease-in-out bg-white dark:bg-gray-900 border-r-2`}
      >
        <Sidebar closeSidebar={() => setActive(false)} />
      </div>
      {showOnboardingModal && <FreemiumDialogComponent trigger={false} />}

      {showExitModal && <FreemiumExitComponent />}
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
