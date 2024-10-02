import React from "react";

export default function Meme() {
  return (
    <main className="main">
      <form className="form">
        <div className="form-input-container">
          <label className="form--label" htmlFor="top-text">
            Top Text
          </label>
          <input
            id="top-text"
            type="text"
            placeholder="Shut up"
            className="form--input"
          />
        </div>
        <div className="form-input-container">
          <label className="form--label">Bottom Text</label>
          <input
            type="text"
            placeholder="and take my money"
            className="form--input"
          />
        </div>

        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
