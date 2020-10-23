const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(express.static());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
