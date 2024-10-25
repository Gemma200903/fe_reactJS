import React, { Component } from 'react'

export default class ChangeAvatar extends Component {

    state ={
        name: "Alices",
        des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        numberAvatar: 18,

    }
  render() {
    return (
      <div className='container'>

<div className="row">
  <div className="col">
  <div className="card" style={{width: '18rem'}}>
<img src={`https://i.pravatar.cc?u=${this.state.numberAvatar}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{this.state.name}</h5>
    <p className="card-text">{this.state.des}</p>
    <button onClick={()=>{
        let numberRandom = Math.floor(Math.random()*100);
        this.setState({
            numberAvatar: numberRandom
        })
    }} className="btn btn-primary">Change Avatar</button>
  </div>
</div>

  </div>
  
</div>


      </div>
    )
  }
}
