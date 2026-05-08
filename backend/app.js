const express = require("express");
const app = express();

app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("Backend Restaurant fonctionne 🚀");
});

// API menu
app.get("/api/menu", (req, res) => {
  res.json([
    { id: 1, name: "Pizza", price: 12 },
    { id: 2, name: "Burger", price: 8 },
    { id: 3, name: "Tacos", price: 10 }
  ]);
});

// PORT unique (important Docker)
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});