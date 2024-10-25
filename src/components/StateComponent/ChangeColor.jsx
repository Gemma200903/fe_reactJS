import React, { Component } from "react";

export default class ChangeColor extends Component {
  state = {
    fSize: 40,
    color: "green",
  };

  render() {
    return (
      <div className=" mt-5 container">
        <i
          style={{ fontSize: this.state.fSize, color: this.state.color }}
          className="fa-duotone fa-solid fa-car"
        ></i>
        <p className="mt-3">
          <button
            onClick={() => {
              this.setState({
                color: "green",
              });
            }}
            className="btn btn-success"
          >
            Green
          </button>
          <button
            onClick={() => {
              this.setState({
                color: "blue",
              });
            }}
            className="btn btn-primary ms-3"
          >
            Blue
          </button>
          <button onClick={()=>{
            this.setState({
                color: "red"
            })
          }} className="btn btn-danger ms-3">Red</button>
        </p>
      </div>
    );
  }
}
