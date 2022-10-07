import { useQuery } from "@apollo/client";
import React from "react";

import ReactTable from "react-table";
import {
  FetchGameLevelResponse,
  FETCH_GAME_LEVEL,
} from "../../../graphql/longestStreak/fetchGameLevel";
import { useAuth } from "../../../lib/authContext";

const columns = [
  {
    Header: "Name",
    accessor: "user.name",
  },
  {
    Header: "Current Level",
    accessor: "currentLevel",
  },
  {
    Header: "Games Played",
    accessor: "gamesPlayed",
  },
  {
    Header: "Games Won",
    accessor: "gamesWon",
  },
  {
    Header: "Games Lost",
    accessor: "gamesLost",
  },
];

class LongestStreakTable extends React.Component {
  render() {
    const { user } = useAuth();
    const { data } = useQuery<FetchGameLevelResponse>(FETCH_GAME_LEVEL, {
      variables: { objects: FETCH_GAME_LEVEL },
    });
    return (
      <div>
        <h2> ADMIN </h2>
        <ReactTable
          data={[
            {
              userId: user.uid,
              currentLevel: data.longestStreakUserData[0].currentLevel,
              gamesPlayed: data.longestStreakUserData[0].gamesPlayed,
              gamesWon: data.longestStreakUserData[0].gamesWon,
              gamesLost: data.longestStreakUserData[0].gamesLost,
            },
          ]}
          columns={columns}
          defaultPageSize={10}
        />
      </div>
    );
  }
}
export default LongestStreakTable;
