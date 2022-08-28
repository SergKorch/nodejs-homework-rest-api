const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/users");

const { auth } = require("../../middlewares");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
