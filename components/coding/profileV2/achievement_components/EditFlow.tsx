import { useQuery } from "@apollo/client";
import {
  FetchUserRoleData,
  FETCH_USER_ROLE,
} from "../../../../graphql/fetchUserRole";

const enableCoachEditing = (userId: string, setIsEditable) => {
  const {} = useQuery<FetchUserRoleData>(FETCH_USER_ROLE, {
    variables: {
      _id: userId,
    },
    onCompleted: (roleData) => {
      if (roleData.users[0].userRole.value === "coach") {
        setIsEditable(true);
      }
    },
  });
};

export default enableCoachEditing;
