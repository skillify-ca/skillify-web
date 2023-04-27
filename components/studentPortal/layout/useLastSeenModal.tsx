import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import { differenceInHours } from "date-fns";
import {
  FETCH_LAST_SEEN_MODAL,
  FetchModalData,
} from "../../../graphql/studentPortal/freemium/fetchLastSeenModal";
import { UPSERT_LAST_SEEN_MODAL } from "../../../graphql/studentPortal/freemium/upsertLastSeenModal";
import {
  calculateRemainingTrialDays,
  sendSlackNotification,
} from "../../../pages/api/studentPortal/freemium/helpers";

export const useLastSeenModal = (
  userId: string,
  userRole: string,
  createdAt: Date
) => {
  const [updateLastSeenModal] = useMutation(UPSERT_LAST_SEEN_MODAL);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  useQuery<FetchModalData>(FETCH_LAST_SEEN_MODAL, {
    variables: {
      userId: userId,
    },
    skip: userRole != "paid" && userRole != "freemium",

    onCompleted: (data) => {
      const trialDaysRemaining = calculateRemainingTrialDays(createdAt);

      const lastSeenValue = data.freemium_users[0]?.lastSeenModal;

      const lastSeenDifference = lastSeenValue
        ? differenceInHours(new Date(), new Date(lastSeenValue))
        : null;

      // check whether trial has expired and show exit modal
      if (trialDaysRemaining === 0) {
        setShowExitModal(true);
      } else {
        // check whether user has seen onboarding modal in the last 24 hours
        if (lastSeenDifference > 24 || !lastSeenValue) {
          setShowOnboardingModal(true);
          sendSlackNotification();
          updateLastSeenModal({
            variables: { userId: userId, lastSeenModal: new Date() },
          });
        }
      }
    },
  });

  return { showOnboardingModal, showExitModal };
};
