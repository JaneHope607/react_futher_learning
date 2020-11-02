import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }
  // updated version below
  // const handleChange = (event) =>
  // setEmail(event.target.value); 

  return (
    <input value={email} onChange={handleChange} />
  );
}

// manage changing value of string as a user types into a text input field

// local variable named email assigned current state value at index 0 from the array returned by useState()
// local variable named setEmail() is assigned a reference to state setter function function
// HERE THE handleChange() is defined outside of JSX but inside of defintion for our function component

