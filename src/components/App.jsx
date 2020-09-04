import React, { useState } from "react";

// const [headingText, setHeadingText] = useState("Hello");

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColor, setButtonColor] = useState({ backgroundColor: "white" });
  const [name, setName] = useState("");

  function updateHeadingText() {
    setHeadingText(headingText + " " + name);
  }

  function lighten() {
    setButtonColor({ backgroundColor: "white" });
  }

  function darken() {
    setButtonColor({ backgroundColor: "black" });
  }

  function handleEvent() {
    // console.log(event.target.value);
    setName(event.target.value);
    console.log(name);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        onChange={handleEvent}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={buttonColor}
        onMouseOver={darken}
        onMouseOut={lighten}
        onClick={updateHeadingText}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
