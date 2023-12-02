import React, { useState } from "react";
import DrinkRecipeData from "./DrinkRecipeData";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CocktailRecipes = () => {
  const drinkData = DrinkRecipeData;

  const [modalStates, setModalStates] = useState({});

  const handleClose = (id) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [id]: false,
    }));
  };

  const handleShow = (id) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [id]: true,
    }));
  };

  return (
    <div
      className="container-fluid"
      style={{
        borderStyle: "solid",
        width: "80%",
        marginTop: "25px",
        borderRadius: "15px",
        marginBottom: "80px",
      }}
      id="cardContainer"
    >
      <div className="jumbotron jumbotron-fluid">
        <div className="container" id="jumbo">
          {/* <h1 class="display-4" style={{ marginTop: "10px" }}>
            Welcome to our Cocktail Paradise 🍹
          </h1> */}
          <h1>Welcome to our Cocktail Paradise 🍹</h1>
          <p className="lead" style={{ fontSize: "22px" }}>
            Discover the art of mixology with our curated collection of
            exquisite cocktails! Each crafted masterpiece offers a delightful
            blend of flavors to tantalize your taste buds. From classic
            concoctions to innovative creations, find the perfect sip for any
            occasion.
          </p>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        {drinkData.map((data) => (
          <div key={data.id} className="col-sm-3 col-md-3 col-lg-3">
            <div className="card" id="card">
              <img
                className="card-img-top"
                src={data.image}
                alt={data.image}
                id="cardImage"
              />
              <div className="card-body" id="cardBody">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                <button
                  type="button"
                  onClick={() => handleShow(data.id)}
                  className="btn"
                  id="cardButton"
                >
                  Show Me How
                </button>

                <Modal
                  show={modalStates[data.id] || false}
                  onHide={() => handleClose(data.id)}
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{data.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h3>
                      <strong>Ingredients</strong>
                    </h3>
                    <p>{data.ingredients}</p>
                    <h3>
                      <strong>Instructions</strong>
                    </h3>
                    <p>{data.instructions}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(data.id)}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailRecipes;
