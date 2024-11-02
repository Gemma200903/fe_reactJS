import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <form action="" className='border p-5'>
          <h3>Đăng Ký</h3>
          <div className="mb-3">
            <label htmlFor="" className='form-label'>Tài khoản</label>
            <input type="text" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="" className='form-label'>Mật khẩu</label>
            <input type="text" className='form-control' />
          </div>
        </form>
      </div>
    )
  }
}
