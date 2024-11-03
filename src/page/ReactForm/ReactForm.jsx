import React, { Component } from "react";

export default class ReactForm extends Component {
  state = {
    valueForm: {
      taiKhoan: "",
      matKhau: "",
      ngaySinh: "",
    },
    arrUser: [],
    errFormValue: {
      taiKhoan: "",
      matKhau: "",
      ngaySinh: "",
    },
  };

  handleChangeInput = (e) => {
    // let { name, value } = e.target;

    let dataType = e.target.getAttribute("data-type");

    let valueInput = e.target.value;
    let nameInput = e.target.name;

    let newValueForm = { ...this.state.valueForm };

    newValueForm = { ...newValueForm, [nameInput]: valueInput };

    // validation

    let messErr = "";

    let newErrFormValue = { ...this.state.errFormValue };

    // Không được để trống
    if (valueInput == "") {
      messErr = "Trường này không được để trống";
    } else {
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(valueInput)) {
          messErr = "Trường này chỉ chứa số.";
        }
      }else if(dataType=='string'){

      }
    }
    newErrFormValue = { ...newErrFormValue, [nameInput]: messErr };

    // end validation

    this.setState({
      valueForm: newValueForm,
    });

    this.setState({
      errFormValue: newErrFormValue,
    });
  };

  handleSubmit = () => {

    let valid = true; 

    // nhập đủ các trường
    for(let key in this.state.valueForm){

      // "" === false
      if(!this.state.valueForm[key]){
        valid = false;
      }
    }

    // các trường đều rỗng
    for(let key in this.state.errFormValue){
      if (this.state.errFormValue[key]) {
        valid =false;
      }
      if (!valid) {

        return;
        
      }
    }


    console.log("state", this.state.valueForm);

    let newArrUser = [...this.state.arrUser];

    newArrUser.push(this.state.valueForm);

    this.setState({
      arrUser: newArrUser,
    });
  };
  render() {
    return (
      <div className="container d-flex">
        {/* Form */}
        <div className="container w-50 m-auto p-5">
          <h3 className="">Demo React Form</h3>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Tài khoản
            </label>
            <input
              onChange={this.handleChangeInput}
              type="text"
              data-type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="taiKhoan"
            />
            <p className="text-danger mt-2 fst-italic">
              {this.state.errFormValue.taiKhoan}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Mật khẩu
            </label>
            <input
              onChange={this.handleChangeInput}
              name="matKhau"
              type="text"
              data-type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
            <p className="text-danger mt-2 fst-italic">
              {this.state.errFormValue.matKhau}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Ngày sinh
            </label>
            <input
              onChange={this.handleChangeInput}
              name="ngaySinh"
              type="text"
              data-type="string"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
            <p className="text-danger mt-2 fst-italic">
              {this.state.errFormValue.ngaySinh}
            </p>
          </div>
          <button
            onClick={this.handleSubmit}
            type="button"
            className="btn btn-success"
          >
            Submit
          </button>
        </div>

        {/* Danh sách người dùng */}
        <div className="container w-50 m-autto p-5">
          <h3>Danh sách người dùng</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tài Khoản</th>
                <th scope="col">Mật khẩu</th>
                <th scope="col">Ngày sinh</th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrUser.map((user, index) => {
                return (
                  <tr>
                    <td>{user.taiKhoan}</td>
                    <td>{user.matKhau}</td>
                    <td>{user.ngaySinh}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
