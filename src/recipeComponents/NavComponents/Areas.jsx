import React, { useState, useEffect, useCallback,useRef } from "react";
import debounce from 'lodash.debounce';
import axios from "axios"
import "./Navcomponent.css";
function Areas() {
   const Areameals = [
      {
         "id": 1,
         "strArea": "American"
      },
      {
         "id": 2,
         "strArea": "British"
      },
      {
         "id": 3,
         "strArea": "Canadian"
      },
      {
         "id": 4,
         "strArea": "Chinese"
      },
      {
         "id": 5,
         "strArea": "Croatian"
      },
      {
         "id": 6,
         "strArea": "Dutch"
      },
      {
         "id": 7,
         "strArea": "Egyptian"
      },
      {
         "id": 8,
         "strArea": "French"
      },
      {
         "id": 9,
         "strArea": "Greek"
      },
      {
         "id": 10,
         "strArea": "Indian"
      },
      {
         "id": 11,
         "strArea": "Irish"
      },
      {
         "id": 12,
         "strArea": "Italian"
      },
      {
         "id": 13,
         "strArea": "Jamaican"
      },
      {
         "id": 14,
         "strArea": "Unknown"
      },
      {
         "id": 15,
         "strArea": "Vietnamese"
      }
   ]
   const ref = useRef()
   const [areaSearch, setareaSearch] = useState(" ");
   const [recipeDetails, setRecipeDetails] = useState([]);
   const [correctValue, setCorrectValue] = useState("")
   let changeHandler = (e) => {
      setareaSearch(e.target.value);
   }
   
   const debouncedChangeHandler = useCallback(
      debounce(changeHandler, 3000)
      , []);
   let clickGetData = (e) => {
      e.preventDefault();
      setareaSearch(e.target.innerText)
      ref.current.value = e.target.innerText
   }
   const handleSubmit = event => {
      event.preventDefault();
      return false;
   };

   let url = `https://themealdb.com/api/json/v1/1/filter.php?a=${areaSearch}`;
   useEffect(() => {
      let response = axios.get(url)
         .then((data) => {
            setRecipeDetails([data.data.meals])
            // if(!data.data.meals){
            //    setCorrectValue("plaese enter valid value")
            // }  ???? y not able to set 
            console.log(recipeDetails)
            console.log(data.data.meals)
         }).catch((error) => { throw (error.statusText) 
         })
   }, [areaSearch])

   return (<>
      <h1>Areas</h1>
      <form onSubmit={handleSubmit}>
         <input ref={ref} type="text" id="searchBox" placeholder="what want to eat" onChange={debouncedChangeHandler} />
         <p>{correctValue}</p>
         <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <ul className="dropdown-content">
               {Areameals.map((item) => {
                  return <li className="recipeItem font-20" key={item.id} onClick={clickGetData}>{item.strArea}</li>
               })
               }
            </ul>
         </div>
      </form>

      <div className="recipesFiltered d-flex">
         {
            recipeDetails.map((h) => {

               if (!h) {
                  return
               }
               else {
                  return Object.keys(h).map((item, index) => {
                     return <div key={h[item].idMeal} className="dishMenu  d-flex">
                        <div id="recipeImg">
                           <img src={h[item].strMealThumb} />
                        </div>
                        < div id="recipeInfo" >
                           <h2>{h[item].strMeal}</h2>
                           <p>id:{h[item].idMeal}</p>
                           <p>Area:{areaSearch}</p>
                        </div>
                     </div>
                  })
               }
            })
         }

      </div >
   </>
   )
}
export default Areas;