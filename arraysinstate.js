import React, { useState } from "react";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
// options here is an array that contains the name of all pizza toppings
// this data is static data meaning it does not change
// best to define static data models outside of function components
// IN JSX below we use map method to render a button for each of the toppings in options array

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
  // selected is an array representing selected toppings of personal pizza
  // selected contains dynamic data and so changes based on users actions
  // here we are initializing a state variable called selected that will keep track of list of string values
  // and initializing it as empty array - this is why we have [] in ()


  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    // so here the clickedTopping is the value been clicked

    setSelected((prev) => {
     // check if clicked topping is already selected - checking if previous selection is included in clickedTopping
      if (prev.includes(clickedTopping)) {
        // if it is included then filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state - here we are 
        return [clickedTopping, ...prev];
      }
    });
  };

  // below when button is clicked the toggleTopping event handler is called
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}