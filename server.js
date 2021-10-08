const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 8055;

const db = {};

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/", (req, res) => {
  res.send({ string: "helloworld" });
});

app.post("/employee/add", (req, res) => {
  res.end(JSON.stringify(req.body.employeeData));
});
