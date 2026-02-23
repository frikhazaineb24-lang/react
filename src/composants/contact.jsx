import React from "react";

function Contact() {
  const handleOpenLocation = () => {
    window.open(
      "https://www.google.com/maps/place/Tunis,+Tunisia/",
      "_blank"
    );
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h1>Contactez-nous</h1>

      <p>Email : restaurantdelice@gmail.com</p>
      <p>Téléphone : +216 55 115 253</p>

      <h3>Adresse :</h3>
      <p>123 Rue Tunis</p>

      <button 
        onClick={handleOpenLocation}
        style={{
          marginTop: "20px",
          padding: "12px 18px",
          backgroundColor: "#ff6347",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          color: "white",
          fontSize: "16px"
        }}
      >
        Voir la localisation
      </button>
    </div>
  );
}

export default Contact;
