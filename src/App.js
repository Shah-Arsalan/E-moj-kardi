import "./styles.css";
import React, { useState } from "react";

var emojilist = {
  "😋": "Face savouring food",
  "🥱": "Yawning Face",
  "😶": "Face without mouth",
  "😊": "Smiling face",
  "😏": "Smirking face",
  "😚": "Kissing face with closed eyes",
  "😝": "Squinting face with tongue",
  "😖": "Confounded face",
  "😨": "Fearful face",
  "🥺": "Pleading face"
};

var ouremojis = Object.keys(emojilist);

export default function App() {
  var [inputemoji, setemoji] = useState("");

  function findemoji(event) {
    var emojientered = event.target.value;
    var inputemoji = emojilist[emojientered];

    if (inputemoji === undefined) {
      inputemoji = "We dont have this emoji in our database";
    }

    setemoji(inputemoji);
  }

  function clickemoji(emoji) {
    var inputemoji = emojilist[emoji];
    setemoji(inputemoji);
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji Finder</h1>
      <h2>Enter the emoji and will tell you the meaning</h2>
      <input onChange={findemoji}></input>

      <div className="output">{inputemoji}</div>

      <div>
        {ouremojis.map(function (emoji) {
          return (
            <div
              className="list"
              style={{ cursor: "pointer" }}
              onClick={() => clickemoji(emoji)}
            >
              {" "}
              {emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
}
