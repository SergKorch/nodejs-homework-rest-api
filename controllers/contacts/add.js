const {Contact} = require("../../schemas/contacts");

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
