import "./style/App.css";
import Categories from "./components/Categories";
import { useState, useEffect } from "react";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import {useSelector} from "react-redux";

function App() {
  const [dropdown, setDrowdown] = useState("button-close");

  const [carousel, setCarousel] = useState("inner");

  const basket = useSelector((state)=>state.cart.basket)


 
  return (
    <div className="App">
      <Categories
        carousel={carousel}
        setCarousel={setCarousel}
        dropdown={dropdown}
        setDropdown={setDrowdown}
      />
      <div className="Fea-Items">
        <Featured />
      </div>

      <Footer />
    </div>
  );
}

export default App;
