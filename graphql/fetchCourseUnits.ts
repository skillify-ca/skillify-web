import { gql } from "@apollo/client";

export const FETCH_COURSE_UNITS = gql`
  query fetchCourseUnits($courseId: String = "") {
    units(where: { courseId: { _eq: $courseId } }) {
      skills
      level
      badgeId
      title
      image
      locked
    }
  }
`;
