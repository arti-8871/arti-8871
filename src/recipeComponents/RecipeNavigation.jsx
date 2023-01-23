import React from "react";
import { Link } from "react-router-dom";
function RecipeNavigation() {
    const RecipeMenu = [
        {
            "id": 1,
            "Name": "Areas",

        },
        {
            "id": 2,
            "Name": "Categories"
        },
        {
            "id": 3,
            "Name": "Ingredients"
        },
        {
            "id": 4,
            "Name": "Random"
        }
    ]
    return (<>
        <div className="RecipeNavigation">
            <ul>

                {RecipeMenu.map((item) => {
                  
                    return <li className="recipeMenuItem font-30" key={item.id}> <Link className="nav-link" to={`/recipe/${item.Name}`}>{item.Name}</Link></li>
                })
                }
            </ul>

        </div>
    </>
    )
}
export default RecipeNavigation;