import { useMutation } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";

import UnitView from "../../components/studentPortal/lessons/UnitView";
import PageHeader from "../../components/ui/PageHeader";

import { UPDATE_USER } from "../../graphql/studentPortal/users/updateUser";
import { useAuth } from "../../lib/authContext";

import GoalsFeed from "../../components/studentPortal/goals/feed/GoalsFeed";
import { Unit, codingBasicsCourse } from "../api/studentPortal/units";

export default function StudentPortalPage() {
  const { user } = useAuth();

  const [updateUser] = useMutation(UPDATE_USER);

  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    setUnits(codingBasicsCourse.units);
  }, []);

  useEffect(() => {
    if (user) {
      updateUser({
        variables: {
          userId: user.uid,
          last_seen: new Date(),
          profile_image: user.photoURL,
        },
      });
    }
  }, [user, updateUser]);

  return (
    <div className="grid w-full grid-cols-12">
      <div className="flex flex-col h-screen col-span-12 px-4 pb-4 overflow-y-auto lg:col-span-8 sm:px-8 sm:pb-8">
        <PageHeader
          title={`Let's start learning, ${user.displayName}`}
          description={moment().format("MMM Do YYYY")}
        />
        <div className="grid grid-cols-1 gap-4">
          {units.map((it, i) => (
            <UnitView key={i} data={it} course="codingBasics" />
          ))}
        </div>
      </div>
      <div className="hidden col-span-4 overflow-y-auto lg:flex">
        <GoalsFeed />
      </div>
    </div>
  );
}

StudentPortalPage.auth = true;
