import React, { Component } from "react";
import ListPhone from "./ListPhone";
import CartPhone from "./CartPhone";

const arrIphone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExPhoneCart extends Component {
  state = {
    arrCartPhone: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
        soLuong: 3,
      },
      {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "./img/meizuphone.jpg",
        soLuong: 3,
      },
      {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        cameraTruoc: "7 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "./img/applephone.jpg",
        soLuong: 3,
      },
    ],
  };

  handleAddProduct = (phoneClick) => {
    // đi clone lại giỏ hàng hiện tại
    let arrCartNow = [...this.state.arrCartPhone];

    let findIphone = arrCartNow.find(
      (iphone) => iphone.maSP === phoneClick.maSP
    );

    // check phoneClick đã tồn tại trong giỏ hàng chưa
    if (findIphone) {
      // nếu có rồi thì tăng số lượng sản phẩm đó lên 1
      findIphone.soLuong += 1;
    } else {
      // nếu chưa có thì thêm key số lượng là 1
      let iphoneCart = { ...phoneClick, soLuong: 1 };
      // sau đó thêm sản phẩm đó vào giỏ hàng
      arrCartNow.push(iphoneCart);
    }

    this.setState({
      arrCartPhone: arrCartNow,
    });
  };

  handleRemoveIphone = (id) => {
    // clone giỏ hàng hiện tại
    let arrCartNow = [...this.state.arrCartPhone];

    // CÁCH 1
    // check sp tồn tại hay chưa
    // let index = arrCartNow.findIndex((iphone)=> iphone.maSP === id);

    // khác -1 là không tồn tại
    // if(index!= -1){

    //   arrCartNow.splice(index, 1);

    // }

    // CÁCH 2
    arrCartNow = arrCartNow.filter((iphone) => iphone.maSP !== id);

    this.setState({
      arrCartPhone: arrCartNow,
    });
  };

  handleChangeQuantity = (maSPClick, soLuong) => {

    // clone lại giỏ hàng hiện tại
    let arrCartNow = [...this.state.arrCartPhone];

    // tìm sp change soLuong
    let phoneClick = arrCartNow.find((phone)=>phone.maSP === maSPClick);

    if(phoneClick){
      phoneClick.soLuong += soLuong;

      if(phoneClick.soLuong <1){
        this.handleRemoveIphone(maSPClick);
        return;
      }
    }

    this.setState({
      arrCartPhone: arrCartNow
    })


  };
  render() {
    return (
      <div className="container">
        <ListPhone
          arrayIphone={arrIphone}
          handleAddProduct={this.handleAddProduct}
        ></ListPhone>
        <CartPhone
          arrayCartPhone={this.state.arrCartPhone}
          handleRemoveIphone={this.handleRemoveIphone}
          handleChangeQuantity ={this.handleChangeQuantity}
        ></CartPhone>
      </div>
    );
  }
}
