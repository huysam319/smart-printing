const express = require("express");
const routes = express.Router();
const {AdminAuth} = require("../middlewares");
const adminControllers = require('../controllers/admin.controller')


routes.get('/',AdminAuth,adminControllers.getAdminById)
routes.post('/',adminControllers.createAdmin)
module.exports = routes