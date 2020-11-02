import React, { useState} from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState();
// above we are using const to declare and assign the return values from calling useState() to color and setColor
// the current state is name of color and state setter is name of setColor

const divStyle = {backgroundColor: color};
// color here is the current state variable - this is set for backgroundColor property

return (
  <div style={divStyle}>
    <p>The color is {color}</p>
    <button onClick={() => setColor('Aquamarine')}>
      Aquamarine
    </button>
    <button onClick={() => setColor('BlueViolet')}>
      BlueViolet
    </button>
    <button onClick={() => setColor('Chartreuse')}>
      Chartreuse
    </button>
    <button onClick={() => setColor('CornflowerBlue')}>
      CornflowerBlue
    </button>
  </div>
);
}

// above in the JSX we are using onClick event listeners to call the setColor()
// state setter function with appropriate color when user clicks on each of these buttons
