require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { db, cors: options } = require("./configs");
const errors = require("./misc/errors");

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());

const routes = require("./routes");

app.use(routes(db));

app.use((_, __, next) => {
  next(errors[404]);
});

app.use(({ statusCode, error }, _, res, __) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

app.listen(process.env.PORT, () =>
  console.info(`App listening at port: ${process.env.PORT}`)
);
