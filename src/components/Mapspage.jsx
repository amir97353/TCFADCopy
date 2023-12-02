"use client";
import BarLocationsData from "./BarLocationsData";

import React from "react";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import ListGroup from "react-bootstrap/ListGroup";

const Mapspage = () => {
  const position = { lat: 40.73061, lng: -73.935242 };

  const barLocations = BarLocationsData;
  const [open, setOpen] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;

  return (
    <APIProvider apiKey={apiKey}>
      <div className="container" id="mapsPage">
        <div className="jumbotron jumbotron-fluid">
          <div className="container jumbotron">
            <h1 className="display-4 animate-charcter">
              Discover Cocktail Havens Near You
            </h1>
          </div>
        </div>
        <p style={{ fontWeight: "bold", fontSize: "23px" }}>
          Sip, Savor, and Explore the Best Bars and Cocktail Lounges Uncover
          hidden gems and popular hotspots with our curated guide to cocktail
          destinations. Whether you're a seasoned connoisseur or a casual
          enthusiast, our map will lead you to unforgettable experiences.
        </p>
      </div>
      <div style={{ marginTop: "20px" }} id="mapsPage">
        <div className="row">
          <div
            className="col-md-3"
            id="cocktailList"
            style={{ maxHeight: "40em", overflowY: "auto" }}
          >
            {barLocations.map((data) => (
              <ListGroup
                key={data.id}
                style={{
                  margin: "10px",
                }}
              >
                <ListGroup.Item
                  style={{
                    backgroundColor: "rgb(200,200,200)",
                    fontWeight: "bold",
                  }}
                >
                  {data.name}
                </ListGroup.Item>
                <ListGroup.Item>{data.address}</ListGroup.Item>
                <ListGroup.Item>
                  <a href={data.website}>Visit Website: {data.website}</a>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </div>

          <div className="col-md-6">
            <div
              style={{
                height: "60vh",
                border: "solid",
                borderRadius: "7px",
                marginLeft: "20px",
                marginRight: "10px",
              }}
            >
              <Map zoom={12} center={position} mapId={mapId}>
                {barLocations.map((data) => (
                  <React.Fragment key={data.id}>
                    <AdvancedMarker
                      position={data.position}
                      onClick={() => setOpen(data.id)}
                    >
                      <Pin
                        background={"red"}
                        borderColor={"green"}
                        glyphColor={"purple"}
                      />
                    </AdvancedMarker>
                    {open === data.id && (
                      <InfoWindow
                        position={data.position}
                        onCloseClick={() => setOpen(null)}
                      >
                        <div>
                          <h4>{data.name}</h4>
                          <p>{data.address}</p>
                          <p>
                            <a href={data.website}>{data.website}</a>
                          </p>
                        </div>
                      </InfoWindow>
                    )}
                  </React.Fragment>
                ))}
              </Map>
            </div>
          </div>
        </div>
      </div>
      );
    </APIProvider>
  );
};

export default Mapspage;
