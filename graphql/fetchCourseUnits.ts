import { gql } from "@apollo/client";

export const FETCH_COURSE_UNITS = gql`
  query fetchCourseUnits($courseId: String = "") {
    units(order_by: { order: asc }, where: { courseId: { _eq: $courseId } }) {
      level
      badgeId
      title
      image
      locked
      exploreId
    }
  }
`;
