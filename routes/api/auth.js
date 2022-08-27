const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/auth");

const { validationBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/signup", validationBody(schemas.signupSchema), ctrlWrapper(ctrl.register))
router.post("/login", validationBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

module.exports=router