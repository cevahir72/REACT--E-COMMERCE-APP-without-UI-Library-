import React from 'react';
import products from "../helpers/products.json";
import Card from "./Card";
import "../style/Featured.css"


const Featured = () => {
  return (
    <div className='Featured'>

        <h1>Featured Items</h1>
        <div className="container">
            {
                products.map(product=>(
                    <Card ket= {product.id} product={product}/>
                ))
            }
        </div>



    </div>
  )
}

export default Featured