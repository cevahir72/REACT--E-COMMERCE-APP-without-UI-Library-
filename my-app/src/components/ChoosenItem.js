import React from 'react';
import "../style/ChoosenItem.css"

const ChoosenItem = ({item}) => {
  return (
    <div className='choosen'>
      <div className='choosen-inner-A'><h4 >{item.title}</h4></div>
      <div className='choosen-inner-B'><h3 >${item.price}</h3></div>
      <div className='choosen-inner-C'><h3>{item.cartQuantity}</h3></div>
      
      
      
        
    </div>
  )
}

export default ChoosenItem