import React, { Component } from "react";

export default class ProductProp extends Component {
  render() {

    let {nameProduct, price, imgProduct} = this.props

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img style={{width: "100%", height: "390px"}} src={imgProduct} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nameProduct}</h5>
            <h6 className="card-title">{price}</h6>
            
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
