import { gql } from "@apollo/client";

export const FETCH_USER_PROJECTS = gql`
  query fetchUserProjects($userId: String = "") {
    user_projects(where: { userId: { _eq: $userId } }) {
      githubLink
      name
      projectLink
      image
    }
  }
`;

export type FetchUserProjectsDataResponse = {
  user_projects: Array<UserProjectData>;
};

export type UserProjectData = {
  name: string;
  githubLink: string;
  projectLink: string;
  image: string;
};
