const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fileSystem = require("fs");
const axios = require("axios");
const MyRecipes = require("./MyRecipes.json");


//we pass a function with 2 arguments req and response
//Here we define another route to get all the recipes

app.get("/MyRecipes", (req, res) => {
  console.log(MyRecipes);
  res.json(MyRecipes);
});

//create a route woth a dynamic id to get single recipes
//id here is the name of ther parameter, it can be named anything
//we use req.query to call out a recipe based on its id value
// use r as an argument to denote a recipe that we want to find based on its id

//we parse the req.params.id into an integer as its original form is a string

// app.get("/api/recipes/:id", (req, res) => {
//   const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
//   if (!recipe) res.status(404).send("Recipe not found");
//   res.send(recipe);
// });

//PORT is an env variable

app.listen(port, () => console.log(`Listening on port ${port}...`));
