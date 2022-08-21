const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { handleSchemaValidationErrors } = require("../helpers");
// const isbnRegexp = /^\d{3}-\d-\d{3}-\d{5}-\d$/;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  // isbn: {
  //   type: String,
  //   match: isbnRegexp,
  //   unique: true,
  //   required: true,
  // },
}, {versionKey: false, timestamps: true});
// contactSchema.post("save", handleSchemaValidationErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
  // isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);
module.exports = { Contact, schemas };
