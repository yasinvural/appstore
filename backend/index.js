const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// app config
const app = express();
const router = require("./router");
const port = 3001;

// middlewares
app.use(express.json());
app.use(cors());
app.use(router);

// db config
const mongoUrl =
  "mongodb+srv://admin:egLxeWrr0XjXyhgX@cluster0.waeas.mongodb.net/appstoredb?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("db connected");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
