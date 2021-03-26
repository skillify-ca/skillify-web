import React from "react";
import Badge from "../components/Badge";

export default function Profile(props) {
  return (
    <div className="flex">
      
      <li>
        <ul>- got it</ul>
        <ul>- got it</ul>
        <ul>- not yet</ul>
        <ul>
          <Badge text={"addition"} />
        </ul>
      </li>
    </div>
  );
}
