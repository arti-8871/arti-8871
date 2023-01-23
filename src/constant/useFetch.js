import React,{useState, useEffect} from "react";
export default function useFetch(url){
    const [isLoading, setIsloading] = useState(false)
    const [dishesArr, setDishesArr] = useState()

    
    const showDishes = () => {
        setIsloading(!isLoading)
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        setTimeout( async function dishRam() {
           try {
              const data = await axios.get(url);
              setDishesArr(data.data.meals);
              console.log(data.data.meals)
              setIsShown(true);
           } catch(error) {
              console.log(error)
           }
           finally {
              setIsloading(false)
           }
        }, 4000);
     }

}