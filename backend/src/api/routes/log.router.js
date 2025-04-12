const express = require("express");
const routes = express.Router();
const uploadMiddleware = require("../middlewares/upload.middleware")
const {Auth, AdminAuth} = require("../middlewares");
const LogControllers = require("../controllers/log.controller");
routes.get("/student", Auth , LogControllers.getAllLogStudent);
routes.get("/admin",AdminAuth,  LogControllers.getAllLogAdmin);
routes.post("/",Auth,uploadMiddleware,  LogControllers.createLog);
routes.patch("/:id",  LogControllers.submitPrinted);
routes.delete("/:id",  LogControllers.deleteLog);
module.exports = routes;
