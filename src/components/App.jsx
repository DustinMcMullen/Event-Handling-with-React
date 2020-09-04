import React, { useState } from "react";

// const [headingText, setHeadingText] = useState("Hello");

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColor, setButtonColor] = useState({ backgroundColor: "white" });

  function updateHeadingText() {
    setHeadingText(headingText + " Dustin");
  }

  function lighten() {
    setButtonColor({ backgroundColor: "white" });
  }

  function darken() {
    setButtonColor({ backgroundColor: "black" });
  }

  function handleEvent() {
    // console.log(event.target.value);
    const uName = event.target.value;
    console.log(uName);
    setHeadingText("Hello" + " " + uName);
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
        // onClick={updateHeadingText}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
