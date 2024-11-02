import React, { Component } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'

/**
 *        /auth/login
 *        /auth/register
 *          
 */

export default class AuthTemplate extends Component {

  
  render() {

    const isLogin = true; //đã đăng nhập
    if (isLogin){
      alert('Bạn đã đăng nhập')
      return <Navigate to={'/'}> </Navigate>
    }
    return (
      <div className='d-flex'>
        <div className="w-50" style={{ height: "100vh" }}>
            <img style={{width: "100%", height: "100%", objectFit: 'cover'}} src="https://i.pinimg.com/736x/02/f7/53/02f7534740a32361bbaccc33f647b720.jpg" alt="" srcset="" />
        </div>
        <div className="w-50 h-100 d-flex justify-content-center align-items-center">

            <Outlet></Outlet>
        </div>
      </div>
    )
  }
}
