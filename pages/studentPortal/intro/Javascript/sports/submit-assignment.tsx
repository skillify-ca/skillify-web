import React from "react";
import { Button } from "../../../../../components/ui/Button";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { COMPLETE_USER_INTRO_NODE } from "../../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../../lib/authContext";

const JS12 = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 47,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 53,
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
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100">
          <ProgressBar completed={100} />
          <div className="grid grid-cols-1">
            <div className="pt-4 ">
              <div
                className="p-12 font-bold text-center rounded-lg cursor-pointer bg-charmander"
                onClick={handleContinue}
              >
                <p>
                  {" "}
                  Click here if you have submitted the Sports Javascript
                  Assignment to the Slack channel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS12;
