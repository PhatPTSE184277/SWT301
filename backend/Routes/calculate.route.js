const express = require("express");
const route = express.Router();

const controller = require("../Controllers/calculate.controller");

route.post("/", controller.index);

module.exports = route;

