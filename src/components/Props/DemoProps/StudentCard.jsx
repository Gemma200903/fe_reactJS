import React, { Component } from "react";

export default class StudentCard extends Component {
  render() {
    
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.props.studentObject.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.studentObject.studentName}</h5>
            <h6 style={{ color: "gray" }} className="card-title">{this.props.studentObject.birthYear}</h6>
            <h6 style={{ color: "gray" }} className="card-title">{this.props.studentObject.major}</h6>
            <h6 style={{ color: "gray" }} className="card-title">{this.props.studentObject.university}</h6>
            
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
