import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    let {product}= this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.imgUrl}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 style={{fontSize: "16px"}} className="card-title">{product.name}</h5>
                      <p className="card-text">
                        {product.price}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {product.description}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
