require("dotenv").config(); // Load .env variables
const express = require("express");

const app = express();
const PORT = 3000;

// Load API Key from .env
const API_KEY = process.env.CMC_API_KEY;

console.log("API Key from .env:", API_KEY); // ✅ Print API Key to terminal

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
