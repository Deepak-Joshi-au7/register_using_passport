import express from "express";
const app = express();

import "dotenv/config";

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server started at PORT ${Port}`);
});
