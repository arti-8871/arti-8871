import React, { useState, useEffect } from "react";
import axios from "axios";
import Randomdishes from "./Randomdishes";


function Random() {
   const [isShown, setIsShown] = useState(false);
   const [isLoading, setIsloading] = useState(false)
   const [dishesArr, setDishesArr] = useState()
   const showDishes = () => {
      setIsloading(!isLoading)
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      setTimeout( async function dishRam() {
         try {
            const data = await axios.get(url);
            setDishesArr(data.data.meals);
            setIsShown(true);
         } catch(error) {
            console.log(error)
         }
         finally {
            setIsloading(false)
         }
      }, 4000);
   }

useEffect(() => {
   console.log(isShown)

}, [isShown])
if (isLoading) {
  return  <h3>loading....</h3>
}
return (<>
   <h1>Random</h1>
   <div className="rotationImg" onClick={showDishes}>
      <img className="diceRotation" alt="diceImg" src={`${process.env.PUBLIC_URL}/images/diceLogo.svg`}></img>
   </div>
   <div className="randomText" style={{ display: isShown ? "none" : "block" }}>
      <h2 className="randomHeading font-60">Have difficulty choosing what to eat?</h2>
      <p className="font-30">Click the dice to make a decision!</p>
   </div>
   <div>
      {isShown && <Randomdishes dishConstent={dishesArr} />}
   </div>
</>
)
}
export default Random;