import React from "react";

export default function Header(props) {
  return (
    <header>
      {props.name} 2021
      <nav>
        <ul>
          <img
            alt="Glenview United Team"
            src="/images/logo.png"
            width="200"
            height="130"
          />
        </ul>
      </nav>
    </header>
  );
}
