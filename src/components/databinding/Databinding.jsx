import React, { Component } from "react";

export default class Databinding extends Component {
  render() {
    let title = "Good afternoon!";

    let person = {
      name: "John",
      age: 18,
      avatar: "https://i.pravatar.cc?u=35",
    };

    return (
      <div>
        <p id="txt">{title}</p>

        <div className="card" style={{ width: "18rem" }}>
          <img src={person.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
