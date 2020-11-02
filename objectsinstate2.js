import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});
  // here we are intitalized profile as an empty object - do this by passing {} as argument to useState() function call
  // and initializing state with the useState() function with the value we want React to use as state during first render

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

// above the first argument of callback function is called prevProfile - and we use
// the spread operator to copy over values from prevProfile into new state object

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}