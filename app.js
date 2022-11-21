const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//we pass a function with 2 arguments req and response
// app.get("/", (req, res) => {
//   res.send("Hey");
// });

//Here we define another route
app.get("/api/recipes", (req, res) => {
  res.send([1, 2, 3]);
});

//create a route woth a dynamic id to get recipes
//id here is the name of ther parameter, it can be named anything
app.get("/api/recipes/:id", (req, res) => {
  res.send(req.params.id);
});

//PORT is an env variable

app.listen(port, () => console.log(`Listening on port ${port}...`));
