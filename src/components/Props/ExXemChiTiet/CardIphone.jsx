import React, { Component } from 'react'

export default class CardIphone extends Component {
  render() {
    let {iphone, handleXemChiTietSp} = this.props;
    return (
        <div className="col">
        <div  className="card" style={{ width: "18rem" }}>
          <img
            style={{ width: "100%", height: "280px" }}
            src={iphone.hinhAnh}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{iphone.giaBan} vnd</h5>
            <p className="card-text">{iphone.tenSP}</p>
            <button
              onClick={()=>{
                handleXemChiTietSp(iphone);
              }}
              className="btn btn-primary"
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </div>
    )
  }
}
