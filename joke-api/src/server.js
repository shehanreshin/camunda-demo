const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  joke = {
    id: 20,
    category: "salty",
    content: {
      line1: "Line 1 of joke",
      line2: "Line 2 of joke",
      line3: "Line 3 of joke",
    },
    author: "Jian Yang",
    date_created: Date(Date.now()),
  };
  res.status(200).send(joke);
});

app.listen(PORT, () => {
  console.log(`Joke API listening at http://localhost:${PORT}`);
});
