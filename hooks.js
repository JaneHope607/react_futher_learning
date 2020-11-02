// below the State Hook - the most common hook for building React components
// state hook is a named export from react library - usestate() is JS function defined in recat library
// it returns an array with two values - current state and state setter

import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}

// the state setter setToggle()
// no need to worry about binding functions to class instances and using this keyword
// with state hook, updating state is simple as calling a state setter function


