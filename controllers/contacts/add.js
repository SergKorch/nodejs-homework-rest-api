const { Contact } = require("../../models/contacts");

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
