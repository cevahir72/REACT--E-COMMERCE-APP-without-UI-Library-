import React from 'react';
import "../style/Card.css";

const Card = ({product}) => {
  return (
    <div className='card-main'>
      <button className='button1'>+</button>
      <div className='img-container'>
      <img  src={product.image} alt={product.title} />
      </div>
      
      <div className='description'>
        <h3>{product.title}</h3>
        {
          product.rate === 2 && (
            <h5> Rating : <ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></h5>
          )
        }
        {
          product.rate === 3 && (
            <h5>Rating : <ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></h5>
          )
        }
        {
          product.rate === 4 && (
            <h5>Rating : <ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon name="star-outline"></ion-icon></h5>
          )
        }
        {
          product.rate === 5 && (
            <h5>Rating : <ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon><ion-icon style={{color:"rgb(213, 135, 10)"}} name="star"></ion-icon></h5>
          )
        }

        
        <h2>${product.price}</h2>
      </div>

         
    </div>
  )
}

export default Card