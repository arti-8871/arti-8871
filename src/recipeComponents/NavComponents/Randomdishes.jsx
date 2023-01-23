import React from "react";
// import { useParams} from "react-router-dom";
 function Randomdishes(props) {
         //  let { id } = useParams();
    return (<>
       {
         props.dishConstent.map((i) => {
               return (
                  <>
                  <div key={i.idMeal}>
               <div key={i.idMeal} >{i.strMeal}</div>
               <img src={i.strMealThumb} alt="dishesImges"/>
               <div>{i.strInstructions }</div>
               </div>
               </>)
            })

        }
        </>
    )
 }
 export default Randomdishes;