const express = require("express");
const logger = require("morgan");
const movieRouter = require("./router/movie-router");
const constants = require("./common/constants");


const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const loggerType = app.get("env") === "development" ? "dev" : "short";
app.use(logger(loggerType));
app.use(express.json());

app.use(constants.routes.movie.main, movieRouter);

// Handle error route
app.use((req, res) => {
    res.status(404).json({error: "NOT FOUND"});
});


module.exports = app;
