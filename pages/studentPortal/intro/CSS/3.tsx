import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

const CSS3 = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 5,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 6,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro");
    });
  };
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100 dark:bg-gray-800">
          <ProgressBar completed={100} />
          <div className="grid grid-cols-1">
            <div className="pt-4 ">
              <div className="grid grid-cols-1">
                <div className="flex justify-center w-full p-4">
                  <img src="/images/CssAchievement.svg" />
                </div>
                <h1 className="text-xl font-bold text-center text-charmander">
                  {" "}
                  You have unlocked a new achievement!
                </h1>
                <p className="text-center">Lesson Complete</p>
                <div className="mt-24">
                  <p className="text-center mr-80">Up Next:</p>
                  <div className="grid grid-cols-1 place-items-center">
                    <div className="p-12 mt-4 bg-white dark:bg-gray-500 border-2 border-gray-200 rounded-lg px-36">
                      <p className="text-xl font-bold text-center">Quiz</p>
                      <p className="text-center">What is CSS?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full mt-12 sm:justify-end">
              <Link href={"/studentPortal/intro/CSS/4"}>
                <Button
                  label="Continue"
                  disabled={false}
                  onClick={handleContinue}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS3;
