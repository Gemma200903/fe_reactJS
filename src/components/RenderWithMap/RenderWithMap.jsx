import React, { Component } from "react";

const arrPhone = [
  {
    id: 1,
    name: "iphone",
    price: 1000,
    img: "https://picsum.photos/id/5/200/200",
  },
  {
    id: 2,
    name: "samsung",
    price: 2000,
    img: "https://picsum.photos/id/5/200/200",
  },
  {
    id: 1,
    name: "nokia",
    price: 3000,
    img: "https://picsum.photos/id/5/200/200",
  },
];

export default class RenderWithMap extends Component {
  renderTrListTable = () => {
    return arrPhone.map((phone, i) => {
      return (
        <tr key={phone.id}>
          <td>{phone.id}</td>
          <td>{phone.name}</td>
          <td>
            <img width={50} height={50} src={phone.img} alt="" />
          </td>
          <td>{phone.price}</td>
        </tr>
      );
    });
  };

  renderListCardPhone = ()=>{
    return arrPhone.map((phone, i)=>{
      return <div key={phone.id} className="card" style={{ width: "18rem" }}>
      <img src={phone.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{phone.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p>{phone.price}</p>
        <a href="#" className="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
    })
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>Stt</td>
              <td>Product Name</td>
              <td>Image</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>{this.renderTrListTable()}</tbody>
        </table>

        {/* render list Card Phone */}
        <div className="container mt-3 d-flex justify-content-between">
          {this.renderListCardPhone()}
        </div>
        
      </div>
    );
  }
}
