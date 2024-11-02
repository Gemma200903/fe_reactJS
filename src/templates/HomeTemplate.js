import React, { Component } from 'react'
import HeaderPage from '../components/HeaderPage/HeaderPage'
import { Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <HeaderPage></HeaderPage>
        <Outlet></Outlet>
      </div>
    )
  }
}
