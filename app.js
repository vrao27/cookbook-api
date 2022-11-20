const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//we pass a function with 2 arguments req and response
// app.get("/", (req, res) => {
//   res.send("Hey");
// });

//Here we define another route
app.get("/", (req, res) => {
  res.send([1, 2, 3]);
});

//PORT is an env variable

app.listen(port, () => console.log(`Listening on port ${port}...`));
