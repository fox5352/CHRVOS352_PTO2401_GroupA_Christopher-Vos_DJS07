import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header--image"
        src="../../assets/troll-face.png"
        alt="page logo"
      />
      <h2 className="header--title">Hello, React</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
