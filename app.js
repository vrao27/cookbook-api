const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//here we define an array with multiple recipes
const recipes = [
  { id: 1, recipeName: "recie1" },
  { id: 2, recipeName: "recie2" },
  { id: 3, recipeName: "recie3" },
  { id: 4, recipeName: "recie4" },
  { id: 4, recipeName: "recie5" },
  { id: 6, recipeName: "recie6" },
];

//we pass a function with 2 arguments req and response

app.get("/", (req, res) => {
  res.send("Hey");
});

//Here we define another route to get all the recipes

app.get("/api/recipes", (req, res) => {
  res.send(recipes);
});

//create a route woth a dynamic id to get single recipes
//id here is the name of ther parameter, it can be named anything
//we use req.query to call out a recipe based on its id value

app.get("/api/recipes/:id", (req, res) => {
  res.send(req.query);
});

//PORT is an env variable

app.listen(port, () => console.log(`Listening on port ${port}...`));
