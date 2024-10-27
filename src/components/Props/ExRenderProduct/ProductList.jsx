import React, { Component } from 'react'
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999,
        description: "Latest Apple smartphone with advanced features.",
        imgUrl: "./img/iphone15Pro.jpg"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 1199,
        description: "High-end Android smartphone with a stunning camera.",
        imgUrl: "./img/samsungGalaxyS23.jpg"
    },
    {
        id: 3,
        name: "Google Pixel 8",
        price: 699,
        description: "Smartphone with an excellent camera and clean Android experience.",
        imgUrl: "./img/googlePixel8.jpg"
    },
    {
        id: 4,
        name: "OnePlus 11",
        price: 749,
        description: "Flagship smartphone with fast performance and charging.",
        imgUrl: "./img/oneplus11.jpg"
    },
    {
        id: 5,
        name: "Xiaomi 13 Pro",
        price: 899,
        description: "Premium smartphone with a powerful camera system.",
        imgUrl: "/img/xiaomi13Pro.jpg"
    }
];


export default class ProductList extends Component {

    renderProductCard = () =>{
        return products.map((product)=>{
            return <ProductCard product ={product}></ProductCard>
        })
    }
  render() {
    return (
      <div className='container'>
        <div className="d-flex">{this.renderProductCard()}</div>
      </div>
    )
  }
}
