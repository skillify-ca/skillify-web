import moment from "moment";
import { useEffect, useState } from "react";

import UnitView from "../../components/studentPortal/lessons/UnitView";
import PageHeader from "../../components/ui/PageHeader";

import { useAuth } from "../../lib/authContext";
import { supabase } from "../../lib/supabase";

import React from "react";
import GoalsFeed from "../../components/studentPortal/goals/feed/GoalsFeed";
import { vibeCodingUnits } from "../api/studentPortal/courses/vibeCoding/units";
import { Unit } from "../api/studentPortal/units";

export default function StudentPortalPage() {
  const { user } = useAuth();

  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    setUnits(vibeCodingUnits);
  }, []);

  useEffect(() => {
    const updateUser = async () => {
      if (user) {
        try {
          const { error } = await supabase
            .from("users")
            .update({
              last_seen: new Date(),
              profile_image: user.photoURL,
            })
            .eq("id", user.uid);
          if (error) {
            throw error;
          }
        } catch (error) {
          console.error("Error updating user:", error);
        }
      }
    };

    updateUser();
  }, [user]);

  return (
    <div className="grid w-full grid-cols-12">
      <div className="flex flex-col h-screen col-span-12 px-4 pb-4 overflow-y-auto lg:col-span-8 sm:px-8 sm:pb-8">
        <PageHeader
          title={`Let's start learning, ${user.displayName}`}
          description={moment().format("MMM Do YYYY")}
        />
        <div className="grid grid-cols-1 gap-4">
          {units.map((it, i) => (
            <UnitView key={i} data={it} course="vibeCoding" />
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
