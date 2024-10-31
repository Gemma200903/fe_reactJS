import React, { Component } from "react";
import CardIphone from "./CardIphone";

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

export default class ExXemChiTiet extends Component {
  state = {
    phoneDetail: {
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
  };

  handleXemChiTietSp = (phoneClick) => {
    console.log("🚀 ~ ExXemChiTiet ~ phoneClick:", phoneClick);
    this.setState({
      phoneDetail: phoneClick,
    });
  };

  renderListIphone = () => {
    return arrIphone.map((iphone) => {
      return (
        <CardIphone
          key={iphone.maSP}
          iphone={iphone}
          handleXemChiTietSp={this.handleXemChiTietSp}
        ></CardIphone>
      );
    });
  };
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.phoneDetail;
    return (
      <div className="container">
        <div className="container">
          {/* Danh sách sản phẩm */}
          <div className="row">{this.renderListIphone()}</div>

          {/* Xem chi tiết sản phẩm */}
          <div className="row mt-5">
            <h5>Thông tin sản phẩm</h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên Sản Phẩm</th>
                  <th scope="col">Màn Hình</th>
                  <th scope="col">Hệ Điều Hành</th>
                  <th scope="col">Camera Trước</th>
                  <th scope="col">Camera Sau</th>
                  <th scope="col">Ram</th>
                  <th scope="col">Rom</th>
                  <th scope="col">Hình Ảnh</th>
                  <th scope="col">Gía Bán</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{maSP}</th>
                  <td>{tenSP}</td>
                  <td>{manHinh}</td>
                  <td>{heDieuHanh}</td>
                  <td>{cameraTruoc}</td>
                  <td>{cameraSau}</td>
                  <td>{ram}</td>
                  <td>{rom}</td>
                  <td>
                    <img
                      style={{ width: "50px", height: "55px" }}
                      src={hinhAnh}
                      alt=""
                      srcset=""
                    />
                  </td>
                  <td>{giaBan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
