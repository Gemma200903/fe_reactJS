import React, { Component } from "react";

export default class ListPhone extends Component {


    renderListPhone = ()=>{
        let {arrayIphone, handleAddProduct} = this.props;

        return arrayIphone.map((iphone)=>{
            return <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{width: "100%", height:"280px"}} src={iphone.hinhAnh} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{iphone.giaBan}</h5>
                <p className="card-text">
                  {iphone.tenSP}
                </p>
                <button onClick={()=>{handleAddProduct(iphone)}} className="btn btn-primary">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        })
    }
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            {this.renderListPhone()}
          </div>
        </div>
      </div>
    );
  }
}
