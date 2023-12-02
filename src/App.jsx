import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./components/HomePage";
import CocktailRecipes from "./components/CocktailRecipes";
import Mapspage from "./components/Mapspage";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactFeedback from "./components/ContactFeedback";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cm" element={<CocktailRecipes />} />
          <Route path="/map" element={<Mapspage />} />
          <Route path="/contactus" element={<ContactFeedback />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
