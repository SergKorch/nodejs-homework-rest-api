const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validationBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validationBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:contactId",
  isValidId,
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validationBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;
