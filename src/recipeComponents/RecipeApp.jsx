import React from "react";
import RecipeNavigation from "./RecipeNavigation";
 function RecipeApp() {
    return (<>
    
    <div className="recipeAppContainer">
    <h2>It's your dinner time on Wednesday, what would you like to eat?</h2>
    <p>I would like to eat by :</p>
        <RecipeNavigation />
    </div>
    </>
    )
 }
  export default RecipeApp;