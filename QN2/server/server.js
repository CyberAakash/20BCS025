const express = require("express");
const axios = require("axios");
const data = require("./data.js")
const cors = require("cors")

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
// const ACCESS_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODg1MzcwMjYsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNGM3MGMzMDQtOTc1MS00OTdjLThmNzctNDRkODQ1MjYyZDQzIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjI1In0.rCVem0JWPxE5i3Q7BNU36TNGBjZZrylzuI_LXsPL2wI"; // Replace with your authentication token

app.get("/trains", (req,res) => {
  res.json(data)
})

app.get(`/trains/:id`, (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server running in PORT 3001")
})