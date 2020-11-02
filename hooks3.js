import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState('Tomato');

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

// this has been refactored so can be more colors

// we have initial state argument here in useState()

// During the first render, the initial state argument is used.
// When the state setter is called, React ignores the initial state argument and uses the new value.
// When the component re-renders for any other reason, React continues to use the same value from the previous render.
// If we don’t pass an initial value when calling useState(), then the current value of the state during the first render will be undefined.
// Often, this is perfectly fine for the machines, but it can be unclear to the humans reading our code. So, we prefer to explicitly initialize our state. If we don’t have the value needed during the first render, we can explicitly pass null instead of just passively leaving the value as undefined.