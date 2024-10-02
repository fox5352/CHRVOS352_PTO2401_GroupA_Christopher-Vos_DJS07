import React from "react";
import memeData from "../../assets/memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getRandomMeme = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * memeData.data.memes.length);
    const imageData = memeData.data.memes[randomIndex];

    setMeme((prvData) => ({
      ...prvData,
      randomImage: imageData.url,
    }));
  };

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
            name="topText"
            value={meme.topText}
            onChange={handleInput}
          />
        </div>
        <div className="form-input-container">
          <label className="form--label">Bottom Text</label>
          <input
            type="text"
            placeholder="and take my money"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleInput}
          />
        </div>

        <button onClick={getRandomMeme} className="form--button">
          Get a new meme image 🖼
        </button>
      </form>

      {meme.randomImage.length > 0 && (
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
}
