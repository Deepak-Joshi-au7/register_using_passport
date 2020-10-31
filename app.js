import express, { urlencoded } from "express";
import expressLayouts from "express-ejs-layouts";
import "dotenv/config";
import mongoose from "mongoose";

//Routes import
import login from "./routes/index.js";
import users from "./routes/users";
const app = express();

// Connection to Mongo
mongoose
  .connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

// EJS Layouts
app.use(expressLayouts);
app.set("view engine", "ejs");

//Body Parser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", login);
app.use("/users", users);

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server started at PORT http://localhost:${Port}`);
});
