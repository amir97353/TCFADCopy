import React from "react";

const AboutUs = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "3em", width: "60%" }}
      id="about"
    >
      <header>
        <h1>About Us - Cocktail Recipes</h1>
        <p style={{ fontSize: "23px" }}>
          Explore the art of mixology with our curated collection of delicious
          cocktail recipes!
        </p>
      </header>

      <section>
        <h2>Our Story</h2>
        <p style={{ fontSize: "23px" }}>
          Welcome to Cocktail Recipes, your go-to source for amazing drink ideas
          and mixology inspiration. Whether you're a seasoned bartender or a
          home enthusiast, our goal is to provide you with a wide range of
          cocktail recipes that cater to every taste.
        </p>

        <h2>Meet the Team</h2>
        <p style={{ fontSize: "23px" }}>
          We are a passionate team of mixologists and cocktail enthusiasts
          dedicated to bringing you the best and most creative drink recipes.
          Our love for cocktails and the art of crafting the perfect drink is
          what drives us to share our knowledge and expertise with you.
        </p>

        <h2>Contact Us</h2>
        <p style={{ fontSize: "23px" }}>
          Have a question or suggestion? Feel free to reach out to us:
        </p>
        <ul>
          <li style={{ fontSize: "23px" }}>Email: info@cocktailrecipes.com</li>
          <li style={{ fontSize: "23px" }}>Phone: (555) 123-4567</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
