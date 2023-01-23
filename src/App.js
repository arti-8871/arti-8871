import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Categories, Areas, Random } from "./recipeComponents/NavComponents";
import Faq from "./components/FaqComponent/Faq"
import Recipe from "./recipeComponents/Recipe"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Faq />}>
          </Route>
          <Route path="recipe" element={<Recipe />} />
          <Route path="/recipe/Areas" element={<Areas />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/recipe/Random/:id" element={<Random />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
