const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fileSystem = require("fs");
const axios = require("axios");

//here we define an array with multiple recipes
const recipes = [
  { id: 1, name: "recipe1" },
  { id: 2, name: "recipe2" },
  { id: 3, name: "recipe3" },
  { id: 4, name: "recipe4" },
  { id: 5, name: "recipe5" },
  { id: 6, name: "recipe6" },
];

//we pass a function with 2 arguments req and response

// app.get("/", (req, res) => {
//   res.send("Hey");
// });

//Here we define another route to get all the recipes

app.get("/api/recipes", (req, res) => {
  res.send(recipes);
});

//create a route woth a dynamic id to get single recipes
//id here is the name of ther parameter, it can be named anything
//we use req.query to call out a recipe based on its id value
// use r as an argument to denote a recipe that we want to find based on its id

//we parse the req.params.id into an integer as its original form is a string

app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipe) res.status(404).send("Recipe not found");
  res.send(recipe);
});

//PORT is an env variable

app.listen(port, () => console.log(`Listening on port ${port}...`));
