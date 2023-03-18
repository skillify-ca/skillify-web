import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FreemiumUnitView from "../../../components/studentPortal/freemium/FreemiumUnitView";
import UnitView from "../../../components/studentPortal/lessons/UnitView";
import PageHeader from "../../../components/ui/PageHeader";
import { FETCH_USER_INTRO_NODES } from "../../../graphql/studentPortal/courses/fetchUserIntroNodes";
import { UPDATE_USER } from "../../../graphql/studentPortal/users/updateUser";
import { useAuth } from "../../../lib/authContext";
import { profileSelector } from "../../../redux/profileSlice";
import { freemiumUnits } from "../../api/studentPortal/freemium/freemiumUnits";
import { paidUnits } from "../../api/studentPortal/freemium/paidUnits";
import { reactUnits, Unit } from "../../api/studentPortal/units";
export default function StudentPortalPage() {
  const { user } = useAuth();
  const { userRole } = useSelector(profileSelector);
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_INTRO_NODES, {
    variables: {
      userId: user.uid,
    },
  });
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    setUnits(reactUnits);
  }, [data]);

  useEffect(() => {
    // TODO save profile photos to firebase storage and allow users to edit photos
    updateUser({
      variables: {
        userId: user.uid,
        last_seen: new Date(),
        profile_image: user.photoURL,
      },
    });
  }, [user]);

  return (
    <div className="flex flex-col w-full px-4 pb-4 sm:px-8 sm:pb-8 ">
      <PageHeader
        title={`Let's start learning, ${user.displayName}`}
        description={moment().format("MMM Do YYYY")}
      />
      {userRole === "freemium" ? (
        <div className="grid grid-cols-1 gap-4">
          {freemiumUnits.map((it, index) => (
            <FreemiumUnitView key={index} data={it} />
          ))}
        </div>
      ) : userRole === "paid" ? (
        <div className="grid grid-cols-1 gap-4">
          {paidUnits.map((it, index) => (
            <FreemiumUnitView key={index} data={it} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {units.map((it, index) => (
            <UnitView key={index} data={it} />
          ))}
        </div>
      )}
    </div>
  );
}

StudentPortalPage.auth = true;
