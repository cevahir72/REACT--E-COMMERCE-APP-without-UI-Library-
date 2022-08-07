import {useEffect} from 'react';
import "../style/Card.css";
import { useSelector,useDispatch } from 'react-redux';
import {addToCart,getTotals} from "../redux/cartSlice";

const Card = ({product}) => {

  const dispatch = useDispatch()

  const cart = useSelector((state)=>state.cart)

  const handleAddToCart = (a)=>{
    dispatch(addToCart(a))
  }

  useEffect(() => {
    
    dispatch(getTotals())
  }, [cart,dispatch])
  
  


  return (
    <div className='card-main'>
      <button onClick={()=>handleAddToCart(product)} className='button1'>+</button>
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