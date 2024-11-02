import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div>
        <div className="">Xin lỗi trang này đang sửa chữa</div>
        <NavLink className={'btn btn-success'} to={"/"}>Quay về trang chủ</NavLink>
      </div>
    )
  }
}
