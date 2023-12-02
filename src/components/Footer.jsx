import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark"
      style={{
        background: "#333",
        color: "white",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        height: "50px",
        // marginTop: "100px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <p style={{ marginRight: "10px" }}>&copy; 2023 This Calls for a Drink</p>
      <p>Designed and Developed by World</p>
    </footer>
  );
};

export default Footer;
