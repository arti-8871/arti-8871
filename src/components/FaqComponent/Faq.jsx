import React, { useState } from "react";
import "./Faq.css";
import Product from "./Product";
import SideBar from "./SideBar";
import Banner from "./Banner";
function Faq() {
  const [display, setDisplay] = useState(1);
  let changeComponet = (id) => {
    setDisplay(id);
  };
  return (
    <>
    <Banner />
      <div className="FaqContainer">
        
        <SideBar changeComponet={changeComponet} />
        <Product render={display} />
      </div>
    </>
  );
}

export default Faq;
