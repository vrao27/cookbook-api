const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = 8000;

const recipeData = require("./contentful-data.json");

// console.log(recipeData.entries);

// store data in a new variable:recipes
// {title,description,image,ingredients,directions,id} = recipes

const recipes = recipeData.entries;
const recipesImage = recipeData.assets;

// console.log(recipes);
app.get("/", (req, res) => {
  res.send({ recipes, recipesImage });
});

app.get("/about", (req, res) => {
  res.send("hello world");
});

app.get("/contact", (req, res) => {
  res.send("hello world");
});

app.get("/recipes/:id", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
