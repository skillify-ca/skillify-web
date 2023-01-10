import { ApolloClient, InMemoryCache } from "@apollo/client";
import GoalsSectionComponent from "../../../components/coding/GoalsSectionComponent";
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
import { userGoalsSelector } from "../../../redux/userGoalsSlice";

export default function ExternalUserProfile({ slug, uid }) {
  const user = {
    uid,
  };
  return (
    <div>
      <LandingNavbar />
      <div className="flex flex-col p-8 m-4 overflow-auto bg-scroll bg-slate-50 sm:m-auto max-w-7xl dark:bg-slate-800 dark:text-white">
        <ProfileHeaderComponent user={user} />

        <h2 className="text-lg font-bold mt-14 mb-9">Projects</h2>

        <div className="grid grid-cols-1 mb-16">
          <AssignmentSectionComponent />
        </div>

        <h2 className="text-lg font-bold mt-14 mb-9">Goals</h2>

        <div className="grid grid-cols-1 mb-16 sm:grid-cols-3">
          <GoalsSectionComponent />
        </div>

        <h2 className="text-lg font-bold mb-9">Achievements</h2>
        <BadgesSection user={user} />
        <AcheivementComponent data={undefined} />
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
