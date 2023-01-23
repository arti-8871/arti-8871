import React from "react";
import Wheather from "./Wheather";
import RecipeApp from "./RecipeApp";
import ErrorBoundary from "../ErrorBoundary";
import "./Recipe.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Areas from "./NavComponents/Areas";
function Recipe() {
    return (<>
        <h1>recipe</h1>
        <div className="recipeContainer">
            <div className="recipeContainer d-flex" >
            
                <div className="wheatherApp">
                   <ErrorBoundary> <Wheather /></ErrorBoundary>
                </div>
                <div className="recipeApp">
                <ErrorBoundary> <RecipeApp /></ErrorBoundary>
                </div>
            </div>

        </div>
    </>
    )
}
export default Recipe;