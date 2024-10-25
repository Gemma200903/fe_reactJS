import React, { Component } from 'react'

export default class StateComopent extends Component {

    state ={
        fSize: 16
    };
  render() {
    return (
      <div className='container'>
        <p style={{
            fontSize: this.state.fSize
        }}>Lorem ipsum dolor sit amet.</p>

        <button onClick={()=>{
            let newState = {
                fSize: this.state.fSize + 1,
            }
            this.setState(newState)
        }} className="btn btn-success">+ Plus</button>
      </div>
    )
  }
}
