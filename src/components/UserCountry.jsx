import React, { useState } from "react";

export function UserCountry() {
  const [status, setStatus] = useState("NZ");
  // array destructuring
  const [, fruits, nuts] = ["chips", "kiwi fruit", "macadamia "];

  function handleChange(e) {
    console.log(e.target.value);
    setStatus(e.target.value);
  }

  function NewZealandFans({ name }) {
    return (
      <div>
        <h3>Cheer for {name} Team!</h3>
        <h3>Eat {fruits}</h3>
      </div>
    );
  }

  function AustralianFans({ name }) {
    return (
      <div>
        <h3>Cheer for {name} Team!</h3>
        <h3>Eat {nuts}</h3>
      </div>
    );
  }

  function Cheer(props) {
    if (props.country === "NZ") {
      return <NewZealandFans name="New Zealand"></NewZealandFans>;
    } else if (props.country === "AUS") {
      return <AustralianFans name="Australian"></AustralianFans>;
    }
  }

  return (
    <React.Fragment>
      <h3>Where are you from ?</h3>
      <input type="radio" value="NZ" name="Country" onChange={handleChange} />
      New Zealand
      <input type="radio" value="AUS" name="Country" onChange={handleChange} />
      Australia
      <Cheer country={status}></Cheer>
    </React.Fragment>
  );
}
