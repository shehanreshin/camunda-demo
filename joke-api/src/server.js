const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Joke API listening at http://localhost:${PORT}`);
});
