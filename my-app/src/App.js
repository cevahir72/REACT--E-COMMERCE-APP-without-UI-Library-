import "./style/App.css";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import UpHeader from "./components/UpHeader";
import {useState, useEffect} from "react";
import Featured from "./components/Featured";



function App() {

  const [dropdown,setDrowdown] = useState("button-close")

  const [carousel,setCarousel] = useState("inner")
  
  useEffect(() => {
    
    console.log(carousel);

  }, [carousel])
  
    
  return (
    <div className="App">
      <div className="upper-part">
      <UpHeader/>
      <Navbar/>
      </div>
      
      <Categories carousel={carousel} setCarousel={setCarousel} dropdown={dropdown} setDropdown={setDrowdown}/>
        <Featured/>
        
        
    </div>
  );
}

export default App;
