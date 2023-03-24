import { useMutation } from "@apollo/client";
import { differenceInHours } from "date-fns";
import { UPSERT_LAST_SEEN_MODAL } from "../../../../graphql/studentPortal/freemium/upsertLastSeenModal";
import { useAuth } from "../../../../lib/authContext";

export function showModal(lastSeenModal) {
  const [updateLastSeenModal] = useMutation(UPSERT_LAST_SEEN_MODAL);
  const { user} = useAuth();
  const currentDateTime = new Date();
  const timeDifferenceInHours = lastSeenModal
    ? differenceInHours(currentDateTime, new Date(lastSeenModal))
    : null;

    console.log(lastSeenModal)
    if (
      (!lastSeenModal || timeDifferenceInHours >= 24)
    ) {
      updateLastSeenModal({ variables: { userId: user.uid, lastSeenModal: currentDateTime } });
      return true;
    } else {
      return false;
    }
    
}
