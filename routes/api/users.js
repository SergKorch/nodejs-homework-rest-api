const express = require("express");

const { ctrlWrapper } = require("../../helpers");
const ctrlGet = require("../../controllers/users");
const ctrl = require("../../controllers/auth");
const { auth, validationBody , upload} = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrlGet.getCurrent));
router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrlGet.updateAvatar));

router.post(
  "/signup",
  validationBody(schemas.signupSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validationBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
