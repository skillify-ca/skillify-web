import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FreemiumDialogComponent from "../../../../components/studentPortal/freemium/FreemiumDialogueComponent";
import UnitView from "../../../../components/studentPortal/lessons/UnitView";
import PageHeader from "../../../../components/ui/PageHeader";
import { useAuth } from "../../../../lib/authContext";
import { supabase } from "../../../../lib/supabase";
import { profileSelector } from "../../../../redux/profileSlice";
import { freemiumUnits } from "../../../api/studentPortal/freemium/freemiumUnits";
import { Unit, reactUnits } from "../../../api/studentPortal/units";
export default function StudentPortalPage() {
  const { user } = useAuth();
  const { userRole } = useSelector(profileSelector);
  const [userIntroNodes, setUserIntroNodes] = useState(null);

  useEffect(() => {
    const fetchUserIntroNodes = async () => {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from("user_intro_nodes")
          .select("*")
          .eq("userId", user.uid);

        if (error) {
          throw error;
        }
        setUserIntroNodes(data);
      } catch (error) {
        console.error("Error fetching user intro nodes:", error);
      }
    };

    fetchUserIntroNodes();
  }, [user]);

  const [units, setUnits] = useState<Unit[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setUnits(reactUnits);
  }, [userIntroNodes]);

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
    <div className="flex flex-col w-full px-4 pb-4 sm:px-8 sm:pb-8 ">
      <PageHeader
        title={`Let's start learning, ${user.displayName}`}
        description={moment().format("MMM Do YYYY")}
      />
      {userRole === "freemium" ? (
        <div className="grid grid-cols-1 gap-4">
          {freemiumUnits.map((it, index) => (
            <UnitView key={index} data={it} course="frontend" />
          ))}
          {isModalOpen && <FreemiumDialogComponent trigger={false} />}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {units.map((it, index) => (
            <UnitView key={index} data={it} course="frontend" />
          ))}
        </div>
      )}
    </div>
  );
}

StudentPortalPage.auth = true;
