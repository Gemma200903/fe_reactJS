import React, { Component } from "react";

export default class CartPhone extends Component {
    renderRowIphone = ()=>{
        let {arrayCartPhone, handleRemoveIphone, handleChangeQuantity} = this.props;
        return arrayCartPhone.map((product)=>{
            return <tr>
            <td>{product.tenSP}</td>
            <td><img src={product.hinhAnh} style={{width: "50px", height:"55px"}} alt="" srcset="" /></td>
            <td>
              <button  onClick={()=>{
                handleChangeQuantity(product.maSP, -1)
              }} className="btn btn-primary me-3">-</button>
              {product.soLuong}
              <button onClick={()=>{
                handleChangeQuantity(product.maSP, 1)
              }} className="btn btn-primary ms-3">+</button>
              

            </td>
            <td>{product.giaBan}</td>
            <td></td>
            <td>
              <button onClick={()=>{
                handleRemoveIphone(product.maSP)
              }} className="btn btn-danger">Xóa</button>
            </td>
          </tr>
        })
    }
  render() {
    return (
      <div className="container mt-5">
        <h5>Giỏ hàng</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Gía</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            
            {this.renderRowIphone()}
            
          </tbody>
        </table>
      </div>
    );
  }
}
