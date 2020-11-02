// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
// we call them function components
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}



import React from 'react';
import ReactDOM from 'react-dom';

export const NewFriend = (props) => {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
}

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

// here passing in props to NewFriend component 