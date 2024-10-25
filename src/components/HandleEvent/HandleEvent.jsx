import React, { Component } from "react";

export default class HandleEvent extends Component {

    handleClick = ()=>{
        console.log("Click 1");
        
    }

    sayHello = (name) =>{
        console.log("Hello", name);
        
    }
  render() {
    return (
      <div className="container">
        <button 
        onClick={this.handleClick}
        className="mt-4 btn btn-success">Click me 1</button>

        <button onClick={()=>{
            console.log("Click 2");
            
        }} className="ms-5 mt-4 btn btn-primary">Click me 2</button>

        <button onClick={() =>{
            this.sayHello("Toro")
        }} className="ms-5 mt-4 btn btn-danger">Say Hello</button>
      </div>
    );
  }
}
