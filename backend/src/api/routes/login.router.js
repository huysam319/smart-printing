const express = require("express");
const routes = express.Router();
const loginController = require("../controllers/login.controller")
routes.post("/student",loginController.studentLogin)
routes.post("/admin",loginController.adminLogin)
module.exports = routes