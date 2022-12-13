import { useQuery } from "@apollo/client";
import {
  CheckCircleIcon,
  ClockIcon,
  PencilAltIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import {
  AllUserAssignmentSubmissionsData,
  FetchAllUserAssignmentSubmissionsDataResponse,
  FETCH_ALL_USER_ASSIGNMENTS,
} from "../../../graphql/fetchAllUserAssignments";
import { useAuth } from "../../../lib/authContext";
import ExpandableContainer from "../ExpandableContainer";

export type AssignmentSectionComponentProps = {};

export default function AssignmentsSection({}: AssignmentSectionComponentProps) {
  const { user } = useAuth();
  const [userAssignments, setUserAssignments] = useState<
    AllUserAssignmentSubmissionsData[]
  >([]);
  const { loading: userAssignmentsLoading } =
    useQuery<FetchAllUserAssignmentSubmissionsDataResponse>(
      FETCH_ALL_USER_ASSIGNMENTS,
      {
        variables: {
          user_id: user.uid,
        },

        onCompleted: (data: FetchAllUserAssignmentSubmissionsDataResponse) => {
          setUserAssignments(data.user_assignment_submissions);
        },
      }
    );
  return (
    <ExpandableContainer open={true} title={""}>
      <div>
        {userAssignments.length > 0 && (
          <div className="grid grid-cols-5 text-sm font-semibold text-center border-b-2 md:grid-cols-12 md:text-lg">
            <p className="col-span-2 md:col-span-6">Assignment</p>
            <p className="col-span-2 font-semibold md:col-span-2">Status</p>
          </div>
        )}

        {userAssignmentsLoading ? (
          <div>Loading...</div>
        ) : userAssignments.length === 0 ? (
          <div className="col-span-3 p-8 text-center shadow-md bg-slate-300 dark:bg-slate-900">
            No Active Assignments
          </div>
        ) : (
          userAssignments.map((assignment, index) => {
            return (
              <div
                className={`grid grid-cols-5 my-2 text-sm text-center md:grid-cols-12 md:text-lg place-items-center ${assignment}`}
              >
                <p className="col-span-1">{index + 1}.</p>
                <p className="col-span-1 md:col-span-4">
                  {assignment.coding_assignment.assignment_name}
                </p>
                <p className="col-span-2 md:block md:col-span-4">
                  {assignment.submission_link ? (
                    assignment.review_link === null ? (
                      <ClockIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
                    ) : (
                      <CheckCircleIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
                    )
                  ) : null}
                </p>
                <Link href={"studentPortal/web/React/assignments/template/"}>
                  <PencilAltIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </ExpandableContainer>
  );
}
