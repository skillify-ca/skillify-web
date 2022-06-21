import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../../components/ui/Button";
import { COMPLETE_USER_INTRO_NODE } from "../../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../../lib/authContext";

const JS_A1 = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 46,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 47,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/9");
    });
  };
  return (
    <>
      <div className="m-4 mx-12">
        <ProgressBar completed={100} />
      </div>

      <div className="p-4">
        <h1 className="text-xl font-bold ">Submit your Assignment</h1>
        <div
          className="p-12 font-bold text-center rounded-lg cursor-pointer bg-charmander"
          onClick={handleContinue}
        >
          <p>
            {" "}
            Stop! Click here only if you have submitted the Pokemon Javascript
            Assignment to the Slack channel
          </p>
        </div>
      </div>
      <div className="flex mt-12 sm:justify-end">
        <Button label="Continue" disabled={false} onClick={handleContinue} />
      </div>
    </>
  );
};

export default JS_A1;
