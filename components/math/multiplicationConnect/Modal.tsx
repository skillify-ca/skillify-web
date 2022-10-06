import { useMutation } from "@apollo/client";
import React, { FC, Ref, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USER_MC_DATA } from "../../../graphql/multiplication-connect/fetchUserData";
import { UPDATE_USER_LOSS_MCDATA } from "../../../graphql/multiplication-connect/updateUserLoss";
import { UPDATE_USER_WIN_MCDATA } from "../../../graphql/multiplication-connect/updateUserWin";
import { useAuth } from "../../../lib/authContext";
import {
  multiplicationConnectSelector,
  setNewGame,
} from "../../../redux/multiplicationConnectSlice";

interface ModalProps {
  type: "rules" | "fullscreen-welcome" | "game-alert" | "game-over-prompt";
  closeModal?: () => void;
  children: any;
}

const Modal: FC<ModalProps> = ({ type, closeModal, children }) => {
  const ref = useRef<HTMLDivElement>();
  const { newGame } = useSelector(multiplicationConnectSelector);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [updateUserWin] = useMutation(UPDATE_USER_WIN_MCDATA);

  const fadeOut = (ref) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = "0";
      }
    }, 750);
  };

  return (
    <>
      {type === "rules" ? (
        <section className="fixed z-50">
          {/* Overlay */}
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-50 -mb-[28rem] bg-black-500/10 backdrop-blur-[1px]"
            onClick={() => closeModal()}
          />
          {/* Modal (pop-up with buttons) */}
          <div
            className="fixed z-50 backdrop-blur-xl flex flex-col justify-center w-7/12 gap-10 p-[7%] -translate-x-1/2 -translate-y-1/2 
              shadow-[0_0px_50px_40px_rgba(0,0,0,0.3)] rounded-xl  top-1/2 left-1/2 bg-sky-700/60 text-white"
          >
            {children}
            <div className="flex justify-center">
              <button
                type="button"
                className="text-xs ring-2 ring-amber-400 font-mono font-bold text-gray-900 bg-white border border-gray-300 
                    focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-3 py-2.5 mr-2 mb-2 
                    dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
                    dark:focus:ring-gray-700"
                onClick={() => closeModal()}
              >
                Close
              </button>
            </div>
          </div>
        </section>
      ) : type === "fullscreen-welcome" ? (
        <section
          ref={ref}
          className="transition-opacity duration-200 ease-in"
          onMouseMove={() => fadeOut(ref)}
          onTransitionEnd={() => closeModal()}
        >
          {/* Overlay (+'Rules' highlight) */}
          <div className="fixed top-0 bottom-0 left-0 right-0 z-20 -mb-[28rem] bg-gradient-to-b from-amber-600/5 to-black-500 backdrop-blur-lg" />
          {/* Modal */}
          <div
            className="fixed drop-shadow-2xl z-50 flex flex-col justify-center gap-10 font-bold text-transparent bg-clip-text 
                bg-gradient-to-tr from-[#F20000]/80 via-[#ffcf00]/100 to-[#ffed5b]/100 text-5xl w-full text-center -translate-x-1/2 
                -translate-y-1/2 top-72 left-1/2 px-12"
          >
            {children}
          </div>
        </section>
      ) : type === "game-alert" ? (
        <section className="flex justify-center">
          <div className="fixed z-50 p-8 mt-4 rounded-lg shadow-2xl bg-white/70 dark:bg-gray-900/90 dark:text-inherit backdrop-blur-md">
            {children}

            <div className="flex items-center justify-end mt-8 text-xs">
              <button
                type="button"
                className="px-4 py-2 font-medium text-red-600 rounded bg-red-50"
                onClick={() => closeModal()}
              >
                Close without saving
              </button>
              <button
                type="button"
                className="px-4 py-2 ml-2 font-medium text-green-600 rounded bg-green-50"
                onClick={() => {
                  updateUserWin({
                    variables: { id: user.uid },
                    refetchQueries: [
                      {
                        query: FETCH_USER_MC_DATA,
                        variables: { id: user.uid },
                      },
                    ],
                  });
                  closeModal();
                }}
              >
                Save & Close
              </button>
              <button
                type="button"
                className="px-4 py-2 ml-2 font-medium text-green-600 rounded bg-green-50"
                onClick={() => {
                  updateUserWin({
                    variables: { id: user.uid },
                    refetchQueries: [
                      {
                        query: FETCH_USER_MC_DATA,
                        variables: { id: user.uid },
                      },
                    ],
                  });
                  dispatch(setNewGame(newGame));
                }}
              >
                Save & Start New Game
              </button>
            </div>
          </div>
        </section>
      ) : (
        type === "game-over-prompt" && (
          <section>
            {/* Overlay (+'Settings' highlight)*/}
            <div className="fixed top-0 bottom-0 left-0 right-0 -mb-[28rem] bg-black-500/30 z-20 backdrop-blur-[1px]" />
            {/* Modal */}
            <div className="fixed z-50 w-8/12 max-w-md p-[5%] text-left text-white -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-2xl backdrop-blur-xl top-72 left-1/2">
              {children}
            </div>
          </section>
        )
      )}
    </>
  );
};

export default Modal;
