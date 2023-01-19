import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import GoalsSectionComponent from "../../../components/coding/GoalsSectionComponent";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import ProfileGoalsSection from "../../../components/coding/ProfileGoalsSection";
import AcheivementComponent from "../../../components/coding/profileV2/AchievementComponent";
import AssignmentSectionComponent from "../../../components/coding/profileV2/AssignmentSectionComponent";
import ProfileHeaderComponent from "../../../components/coding/profileV2/ProfileHeaderComponent";

import ProjectsSection from "../../../components/coding/ProjectsSection";
import UserProfileSection from "../../../components/coding/UserProfileSection";
import LandingNavbar from "../../../components/LandingNavbar";
import BadgesSection from "../../../components/profile/BadgesSection";
import { FETCH_RECENT_USERS } from "../../../graphql/fetchRecentUsers";
import { FETCH_USER } from "../../../graphql/fetchUser";
import { setUserGoals, userGoalsSelector } from "../../../redux/userGoalsSlice";
import ExpandableContainer from "../../../components/coding/ExpandableContainer";
import AchievementComponent from "../../../components/coding/profileV2/AchievementComponent";
import SkillRatingsComponent from "../../../components/coding/SkillRatingsComponent";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../../graphql/fetchUserGoals";
import { useAuth } from "../../../lib/authContext";

export default function ExternalUserProfile({ slug, uid }) {
  const userToDisplay = {
    uid,
  };
  const { user: loggedInUser } = useAuth();

  const dispatch = useDispatch();
  const { userGoals } = useSelector(userGoalsSelector);
  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: uid,
      },

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        dispatch(setUserGoals(data.user_goals));
      },
    }
  );
  return (
    <div
      className={`dark:text-white overflow-auto w-full max-h-screen h-full transition-all transform duration-500 ease-in-out grid grid-cols-1 gap-4 bg-gray-100 dark:bg-gray-800`}
    >
      <div className="sticky top-0 shadow-lg">
        <LandingNavbar />
      </div>
      <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll space-y-9">
        <ProfileHeaderComponent userId={userToDisplay.uid} />
        <div>
          <ExpandableContainer open={true} title={"Projects"}>
            <ProjectsSection user={userToDisplay} />
          </ExpandableContainer>
        </div>
        {loggedInUser && (
          <div className="grid">
            <ExpandableContainer open={true} title={"Goals"}>
              {userGoalsLoading ? (
                <div>Loading...</div>
              ) : (
                <GoalsSectionComponent
                  inProfile={true}
                  userGoals={userGoals
                    .filter((goal) => !goal.isComplete && !goal.isArchived)
                    .slice(0, 3)}
                />
              )}
            </ExpandableContainer>
          </div>
        )}
        <div className="grid">
          <ExpandableContainer open={true} title={"Skill Ratings"}>
            <SkillRatingsComponent />
          </ExpandableContainer>
        </div>
        <div className="grid">
          <ExpandableContainer open={true} title={"Achievements"}>
            <AchievementComponent user={userToDisplay} />
          </ExpandableContainer>
        </div>
      </div>
    </div>
  );
}

ExternalUserProfile.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_USER,
    variables: {
      link: params.slug,
    },
  });

  console.log(params.slug, data.users[0].id);

  return {
    props: {
      slug: params.slug,
      uid: data.users[0].id,
    },
  };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_RECENT_USERS,
  });

  const ids = data.users
    .map((user) => {
      return { params: { slug: user["link"] } };
    })
    .filter((user) => user.params.slug !== null);

  return {
    paths: ids,
    fallback: true,
  };
}
