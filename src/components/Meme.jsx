import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState();

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <button onClick={getMemeImage} className="form--button">
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
