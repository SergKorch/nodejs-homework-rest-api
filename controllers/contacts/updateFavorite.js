const { Contact } = require("../../schemas/contacts");

const { RequestError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(400, "missing field favorite");
  }
  res.json(result);
};

module.exports = updateFavorite;
