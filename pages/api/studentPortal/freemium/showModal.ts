import { useMutation } from "@apollo/client";
import { differenceInHours } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { UPSERT_LAST_SEEN_MODAL } from "../../../../graphql/studentPortal/freemium/upsertLastSeenModal";
import { useAuth } from "../../../../lib/authContext";
import { profileSelector, setLastSeenModal } from "../../../../redux/profileSlice";

export function showModal() {
  const [updateLastSeenModal] = useMutation(UPSERT_LAST_SEEN_MODAL);
  const { userRole, lastSeenModal } = useSelector(profileSelector)
  const { user } = useAuth();
  const dispatch = useDispatch()

  const currentDateTime = new Date();
  const timeDifferenceInHours = lastSeenModal
    ? differenceInHours(currentDateTime, new Date(lastSeenModal))
    : null;

  if (
    timeDifferenceInHours !== null &&
    timeDifferenceInHours >= 24 &&
    (userRole === "freemium" || userRole === "paid")
  ) {
    dispatch(setLastSeenModal(currentDateTime))
  updateLastSeenModal({ variables: { userId: user.uid, lastSeenModal: currentDateTime } });
    return true;
  } else {
    dispatch(setLastSeenModal(currentDateTime))
  updateLastSeenModal({ variables: { userId: user.uid, lastSeenModal: currentDateTime } });
    return false;
  }
}
