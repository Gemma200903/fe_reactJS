import React, { Component } from "react";

export default class extends Component {
  render() {
    let { name, author, coverPhoto } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={coverPhoto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
              className="card-title"
            >
              {name}
            </h5>
            <h6 style={{ color: "gray" }} className="card-title">
              {author}
            </h6>

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
