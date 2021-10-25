import { gql } from "@apollo/client";

export const SAVE_FOOD_TRUCK_RESULT = gql`
mutation saveFoodTruckAttempt($userId: String = "", $badgeId: Int, $profit: Int, $timeTaken: timetz) {
  insert_foodtruck_results(objects: {userId: $userId, badgeId: $badgeId, profit: $profit, timeTaken: $timeTaken}) {
    returning {
        userId
      }
  }
}
`
;