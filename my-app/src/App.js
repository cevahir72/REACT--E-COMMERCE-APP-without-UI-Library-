import "./style/App.css";
import Categories from "./components/Categories";
import { useState, useEffect } from "react";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
  const [dropdown, setDrowdown] = useState("button-close");

  const [carousel, setCarousel] = useState("inner");

  

  useEffect(() => {
    console.log(carousel);
  }, [carousel]);

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
