import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

const emojiDatabase = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
};
let emojiData = Object.keys(emojiDatabase);
export default function App() {
  const [userInput, setInput] = useState("");
  const [userClick, setClickValue] = useState("");
  const getInput = (event) => {
    setInput(event.target.value);
  };
  const getOutput = (emoji) => {
    return emojiData.map((item) => {
      if (item === emoji) return emojiDatabase[item];
      else return null;
    });
  };
  const cursorClickHandler = (event) => {
    emojiData.map((item) => {
      if (event.target.id === item) return setClickValue(emojiDatabase[item]);
      else return null;
    });
    return null;
  };
  return (
    <div className="App">
      <h1>Emoji</h1>
      <input onChange={getInput} placeholder="Enter the emoji" />
      <div>
        {getOutput(userInput)}
        {userClick}
      </div>
      {/* <div>{userClick}</div> */}
      <ul>
        {emojiData.map((item) => {
          return (
            <li key={item} id={item} onClick={cursorClickHandler}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
