require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT, () =>
  console.info(`App listening at port: ${process.env.PORT}`)
);
