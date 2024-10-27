import React, { Component } from "react";
import Card from "./Card";
import ProductProp from "./ProductProp";
import StudentCard from "./StudentCard";

export default class DemoProps extends Component {
  render() {

    let student = {
      studentName : "Emily Johnson",
      birthYear: 2003,
      major: "Computer Science",
      university: "Hanoi University of Science and Technology",
      avatar: "./img/student1.jpg"
    }
    return (
      <div className="container">
        <div className="d-flex">
          <div className="w-25">
            <Card
              name="Chiếc lá cuối cùng"
              author="O. Henry"
              coverPhoto="https://i.pravatar.cc?u=52"
            ></Card>
          </div>
          <div className="w-25 ms-5">
            <Card
              name="Hoàng tử bé"
              author="Antoine de Saint-Exupéry"
              coverPhoto="https://i.pravatar.cc?u=8"
            ></Card>
          </div>
          <div className="w-25 ms-5">
            <Card
              name="Cuộc phiêu lưu của Tom Sawyer"
              author="Mark Twain"
              coverPhoto="https://i.pravatar.cc?u=18"
            ></Card>
          </div>
        </div>

        <div className="d-flex">

        <div className="mt-5">
          <ProductProp nameProduct="iPhone 15 Pro" price ="$999" imgProduct ="./img/iphone15Pro.jpg"></ProductProp>
        </div>
        <div className="mt-5 ms-5">
          <ProductProp nameProduct="SAMSUNG S23 Ultra" price ="$999" imgProduct ="./img/SAMSUNGS23Ultra.jpg"></ProductProp>
        </div>

        </div>

        <div className="d-flex mt-5">
          
          <StudentCard studentObject ={student}></StudentCard>
        </div>

  

        
      </div>
    );
  }
}
