# DJS07 - Build a Meme Generator

- `In this challenge you are required to code-along the Scrimba lesson: https:`//scrimba.com/playlist/prXJpCQ

This starter repo only has CSS styling added to the empty React project.

After cloning run `npm install` to install dependencies.

## Run project after installing dependencies

```bash
npm run dev
```

## Project Structure

```
CHRVOS352_PTO2401_GroupA_Christopher-Vos_DJS07/

├── assets/
│ ├── memesData.js
│ └── troll-face.png
├── public/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ └── Meme.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

- `assets/:` Contains static assets and data files.
- `src/:` The main source code directory.

- `components/:` Reusable React components.
- `App.jsx:` The main application component.
- `main.jsx:` The entry point of your React application.

- `index.html:` The HTML template for your app.
- `package.json:` Defines project dependencies and scripts.
- `vite.config.js:` Configuration for Vite (your build tool).
- `eslint.config.js:` ESLint configuration for code linting.

## State Management in React

### Examples from Meme.jsx

Let's examine how state is used in your `Meme.jsx` component:

#### 1. Managing Meme Data

```javascript
const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg",
});
```

This state object manages the current meme's properties. It's updated when the user types in the input fields or gets a new random image.

#### 2. Storing API Data

```javascript
const [allMemes, setAllMemes] = React.useState();
```

This state variable stores all memes fetched from the API. It's populated in the `useEffect` hook:

```javascript
React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
    .then((data) => data.json())
    .then((data) => setAllMemes(data.data.memes));
}, []);
```

#### 3. Updating State

#### Updating meme image:

```javascript
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
```

This function updates the `randomImage` property of the `meme` state when the user clicks to get a new meme.

#### Updating text inputs:

```javascript
function handleChange(event) {
  const { name, value } = event.target;
  setMeme((prevMeme) => ({
    ...prevMeme,
    [name]: value,
  }));
}
```

This function updates the `topText` or `bottomText` properties of the `meme` state as the user types.

## How State Controls Component Behavior

1. **Controlled Inputs**: The input fields are controlled by the `meme` state:

   ```jsx
   <input
     type="text"
     name="topText"
     value={meme.topText}
     onChange={handleChange}
   />
   ```
