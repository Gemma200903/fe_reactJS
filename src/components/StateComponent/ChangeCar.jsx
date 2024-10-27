import React, { Component } from 'react'

export default class ChangeCar extends Component {

    state ={
        imgURL : "./img/black-car.jpg"
    }

    handleChangeCar = (url) =>{

        this.setState({
            imgURL : url,
        })

    }
  render() {
    return (
      <div className='container d-flex'>
        <div className="w-50">
            <img width={'100%'} src={this.state.imgURL} alt="" srcset="" />
        </div>
        <div className="w-50">
        <button onClick={()=>{
            this.handleChangeCar("./img/black-car.jpg")
        }} className="ms-3 btn btn-dark">Black</button>
        <button onClick={() =>{
            this.handleChangeCar("./img/red-car.jpg")
            
        }} className="ms-3 btn btn-danger">Red</button>
        <button onClick={()=>{
            this.handleChangeCar("./img/silver-car.jpg")
            
        }} className="ms-3 btn btn-success">Silver</button>
        </div>
        
      </div>
    )
  }
}
