import React from "react";
import "../style/Categories.css";
import slider from "../helpers/slider.json"


const Categories = ({ dropdown, setDropdown, carousel, setCarousel,basket,setBasket }) => {
  
  // DROPDOWN MENU
  const drop = () => {
    setDropdown(dropdown === "button-open" ? "button-close" : "button-open");
  };
  //CAROUSEL
  const slide =(e)=> {
    if(e.target.className === "first"){
        setCarousel( carousel = "inner")
        
    }else if(e.target.className === "second"){
        setCarousel( carousel = "inner-A")
    }else if(e.target.className === "third"){
        setCarousel( carousel = "inner-B")
    }else if(e.target.className === "fourth"){
        setCarousel( carousel = "inner-C")
    }

  }
  // CART ITEMS
  


  return (
    <div className="Categories">
      <div className="category">
        <button onClick={drop} className="button">
          
          <span id="span">CATEGORIES </span>
          <ion-icon style={{fontSize:"20px"}} name="arrow-down-outline"></ion-icon>
        </button>
        <div className={dropdown}>
          <ul>
            <li>Home</li>
            <li>Clothes</li>
            <li>Technology</li>
            <li>Furniture</li>
            <li>Lawn - Garden</li>
            <li>Healthcare</li>
            <li>Cosmetics</li>
            <li>Sports</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Grossery</li>
          </ul>
        </div>
      </div>
      <div className="slider">
        <div className="wrapper">
          <div className={carousel}>
            {
                slider.map(item=>{
                    return(
                        <div className="card" key={item.id}>
                            <img style={{ height:"52vh"}} className="slide-image" src={item.image} alt= {item.title} />
                            <div className="content">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    )
                })
            }

          </div>
        </div>
        <div className="map">
          <div className="map-container">
          <button onClick={slide} className="first"></button>
          <button onClick={slide} className="second"></button>
          <button onClick={slide} className="third"></button>
          <button onClick={slide} className="fourth"></button>

          </div>
          
        </div>
      </div>
      <div className="basket">
        <h1>CART ITEMS</h1>
      </div>
    </div>
  );
};

export default Categories;
