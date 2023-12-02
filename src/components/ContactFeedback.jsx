import React from "react";

const ContactFeedback = () => {
  return (
    <div id="contact" className="container-fluid">
      <form id="form" style={{ marginTop: "20px", marginBottom: "50px" }}>
        <div className="jumbotron jumbotron-fluid">
          <div className="jumbotron">
            <h1 className="display-4">Share Your Sip Story 🍹✨</h1>
          </div>
        </div>
        <div className="container-fluid">
          <p
            style={{
              fontWeight: "bold",
              marginLeft: "8em",
              fontSize: "20px",
            }}
          >
            We're thrilled to hear about your cocktail adventure! Your feedback
            matters, and we'd love to know all about your experience with our
            drinks. Whether you discovered a new favorite or have a suggestion
            for improvement, your insights help us shake things up for the
            better.
          </p>
        </div>
        <div className="form-group row">
          <label
            id="label"
            for="inputEmail3"
            className="col-sm-2 col-form-label"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              style={{ border: "solid" }}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label
            id="label"
            for="inputPassword3"
            className="col-sm-2 col-form-label"
          >
            Thoughts?
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              style={{ height: "30vh", border: "solid" }}
            />
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend id="label" className="col-form-label col-sm-2 pt-0">
              What did you enjoy
            </legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label
                  id="label"
                  className="form-check-label"
                  for="gridRadios1"
                >
                  Drink Selection
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label
                  id="label"
                  className="form-check-label"
                  for="gridRadios2"
                >
                  Bar Location
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                />
                <label
                  id="label"
                  className="form-check-label"
                  for="gridRadios3"
                >
                  Everything 🥳
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <div id="label" className="col-sm-2">
            Would you reccomend to a friend
          </div>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" for="gridCheck1"></label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFeedback;
