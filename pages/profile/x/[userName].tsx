import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header404 from "../../../components/Header404";
import { FETCH_USER } from "../../../graphql/fetchUser";
import InternalProfile from "../v2/[userId]";

export default function ProfileGateway() {
  const router = useRouter();
  const { userName } = router.query;
  const [validUserId, setValidUserId] = useState<string>();

  const { loading } = useQuery<{ users: Array<{ id: string }> }>(FETCH_USER, {
    variables: {
      link: userName,
    },
    onCompleted: (data) => {
      if (data.users.length > 0) {
        setValidUserId(data.users[0].id);
      }
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (validUserId) {
    return <InternalProfile userIdFromLink={validUserId} />;
  } else {
    return (
      <div>
        <p className="font-bold">User Not Found</p>
        <Header404 />
      </div>
    );
  }
}
