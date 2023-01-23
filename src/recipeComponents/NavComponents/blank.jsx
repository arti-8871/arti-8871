import React, { useState, useEffect } from "react";
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
   const [areaSearch, setareaSearch] = useState(" ");
   const [recipeDetails, setRecipeDetails] = useState([])
   // strMeal,strMealThumb,idMeal
   // "name":"",
   // "image":"",
   // "id":""

   let changeHandler = (e) => {
      setareaSearch(e.target.value)
   }
   let clickhandle = (e) => {
      e.preventDefault();
      setareaSearch(e.target.innerText)

   }
   // useEffect(() =>{
   // // console.log(areaSearch)

   // ???page refresh, url me ? q h,null in console
   // },[areaSearch])
   let url = `https://themealdb.com/api/json/v1/1/filter.php?a=${areaSearch}`;
   useEffect(() => {
      let response = axios.get(url)
         .then((data) => {
            setRecipeDetails([data.data.meals])
            // "name":data.strMeal,
            // "id":data.idMeal,
            // "image":data.strMealThumb

            console.log(data.data.meals)
         })
      // console.log("hi")

   }, [url])
   console.log(recipeDetails)
   const handleSubmit = event => {
      event.preventDefault();
   };

   return (<>

      <h1>Areas</h1>
      <form onSubmit={handleSubmit}>
         <input type="text" id="searchBox" placeholder="what want to eat" value={areaSearch} onChange={changeHandler} />

         <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <ul className="dropdown-content">

               {/* {
               Areameals.map = (menuss) => {
                  return (<li className="recipeItem" onClick={clickhandle} >{menuss.strArea}</li>);
                  }y not working????????
                } */}
               {Areameals.map((item) => {
                  return <li className="recipeItem font-20" key={item.id} onClick={clickhandle}>{item.strArea}</li>
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
                  // console.log(h[item].strMeal)
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
               //    return(<>
               //    
               // <div id="recipeInfo">
               //    <h4>{h.strMeal}</h4>
               //    <p>Area:American</p>
               // </div>

               //    </>)
            })
         }

      </div >
   </>
   )
}
export default Areas;