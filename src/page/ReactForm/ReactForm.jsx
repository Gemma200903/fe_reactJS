import React, { Component } from "react";

export default class ReactForm extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    ngaySinh: "",
  };

  handleChangeInput = (e) => {
    let {name, value} = e.target;
    console.log("🚀 ~ ReactForm ~ value:", value)
    console.log("🚀 ~ ReactForm ~ name:", name)
  };
  render() {
    return (
      <div>
        <div className="container w-50 m-auto p-5">
          <h3 className="text-center">Demo React Form</h3>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Tài khoản
            </label>
            <input
              onChange={this.handleChangeInput}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="taiKhoan"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Mật khẩu
            </label>
            <input
              onChange={this.handleChangeInput}
              name="matKhau"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Ngày sinh
            </label>
            <input
              onChange={this.handleChangeInput}
              name="ngaySinh"
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
