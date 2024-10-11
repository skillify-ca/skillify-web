import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import {
  FETCH_LAST_SEEN_MODAL,
  FetchModalData,
} from "../../../graphql/studentPortal/freemium/fetchLastSeenModal";
import { UPSERT_LAST_SEEN_MODAL } from "../../../graphql/studentPortal/freemium/upsertLastSeenModal";
import { useAuth } from "../../../lib/authContext";
import { UserRole } from "../../../redux/profileSlice";

export const useLastSeenModal = (
  userId: string,
  userRole: string,
  createdAt: Date
) => {
  const [updateLastSeenModal] = useMutation(UPSERT_LAST_SEEN_MODAL);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const { user } = useAuth();
  const email = user?.email;

  useQuery<FetchModalData>(FETCH_LAST_SEEN_MODAL, {
    variables: {
      userId: userId,
    },
    skip: userRole != UserRole.FREEMIUM,

    onCompleted: (data) => {
      const userRole = data.freemium_users[0]?.user.userRole.value;

      if (userRole !== "freemium") {
        return;
      }
    },
  });

  return { showOnboardingModal, showExitModal };
};
