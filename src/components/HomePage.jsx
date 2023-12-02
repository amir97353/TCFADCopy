import React from "react";
import drinkVideo from "./drinkVideo.mp4";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  function navigation() {
    navigate("/cm");
  }

  return (
    <div className="container" id="home">
      <div className="jumbotron jumbotron-fluid">
        <div className="container jumbotron">
          <h1 className="display-4 animate-charcter ">
            This calls for a drink
          </h1>
        </div>
      </div>
      <p style={{ fontWeight: "bold" }}>
        Welcome to the ultimate destination for cocktail enthusiasts! 🍹 Unleash
        your inner mixologist and explore a world of tantalizing flavors, shaken
        and stirred to perfection. From classic concoctions to innovative
        blends, our cocktail listing site is your passport to the art of
        mixology.
      </p>
      <div className="row col-md-6 offset-md-3 justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-secondary"
          style={{
            marginBottom: "2em",
            backgroundColor: "rgb(200,200,200)",
            color: "black",
            fontSize: "20px",
          }}
          onClick={navigation}
        >
          Check out our collection
        </button>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <video
              width="100%"
              autoPlay
              muted
              controls
              loop
              style={{ borderRadius: "5px" }}
            >
              <source src={drinkVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
