require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(process.env.PORT || 4000, () =>
    console.log(`Up and running on port ${process.env.PORT}`)
);

module.exports = app;