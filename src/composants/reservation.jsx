import React, { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    persons: 1,
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre réservation a été envoyée !");
    console.log("Données de réservation :", formData);
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Réservez votre table
      </h1>

      <form onSubmit={handleSubmit}>

        <label style={{ fontWeight: "bold" }}>Nom complet :</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={{ fontWeight: "bold" }}>Numéro de téléphone :</label>
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={{ fontWeight: "bold" }}>Date :</label>
        <input 
          type="date" 
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={{ fontWeight: "bold" }}>Heure :</label>
        <input 
          type="time" 
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={{ fontWeight: "bold" }}>Nombre de personnes :</label>
        <input 
          type="number" 
          name="persons"
          min="1"
          max="20"
          value={formData.persons}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button 
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            fontSize: "16px",
            backgroundColor: "#ff6347",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Réserver maintenant
        </button>
      </form>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 20px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px"
};

export default Reservation;
