import React, { useEffect, useState } from "react";

import { useAuth } from "../lib/authContext";
import { useMutation, useQuery } from "@apollo/client";

import ProfileGoalsSection from "../components/coding/ProfileGoalsSection";
import UserProfileSection from "../components/coding/UserProfileSection";
import BadgesSection from "../components/profile/BadgesSection";
import {FETCH_CODING_BADGES, Data, IntroCourseUnit} from "../graphql/coding/userBadges/fetchUserBadges";

export default function Profile(props) {
  const { user } = useAuth();
  const { data } = useQuery(FETCH_CODING_BADGES, {
    variables: {
      userId: user.uid,
    },
  });

  const [units, setUnits] = useState<IntroCourseUnit[]>([]);
  useEffect(() => {
    if(typeof(data) !== 'undefined')
    { 
      setUnits(data.intro_course_unit);
    }
  }, [data]);

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <UserProfileSection user={user} />

      <h2 className="mt-14 mb-9 font-bold text-lg">Goals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 mb-16">
        <ProfileGoalsSection user={user} />
      </div>

      <h2 className="font-bold text-lg mb-9">Achievements</h2>
      <BadgesSection units={units} />
    </div>
  );
}

Profile.auth = true;
