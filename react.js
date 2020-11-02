import React from 'react';
// this line is creating a new varibale called react - its value is a imported JavaScript object
// this gets the react library via this line - this contains methods need in order to use react
import ReactDOM from 'react-dom';
// methods improted from 'react-dom' are meant for interacting with the DOM

class MyComponentClass extends React.Component {
    // on line above you are declaring a new component class called MyComponentClass
    // React.Component is a property on ovject which was returned by import React on line 1
    // Component class variable names must begin with capital letters
    render() {
    // render method is a property whose name is render - value is a function
    // render method must contain a return statement
    // usually this return statement returns a JSX expression
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
    <MyComponentClass />,
    //returning instance of MyComponentClass component class
    // this is component class
	document.getElementById('app')
);