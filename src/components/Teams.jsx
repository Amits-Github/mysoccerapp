import React from "react";
import {UserCountry} from "./UserCountry";





const teamList = [
  "Wellington Phoenix",
  "Sydney FC",
  "Brisbane Roars",
  "Newcastle Jets",
];

function Team({ names }) {
  return (
    <ul>
      {names.map((team) => (
        //  a key is an identifier for a dynamically created element.
        <li key={team.toString()}>{team}</li>
      ))}
    </ul>
  );
}

export default function Teams() {
  return (
    <React.Fragment>
      <Team names={teamList} />
      <div>
        <UserCountry></UserCountry>
      
      </div>

      
    </React.Fragment>
  );
}
