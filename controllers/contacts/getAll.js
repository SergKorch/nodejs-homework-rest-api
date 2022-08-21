const {Contact} = require("../../schemas/contacts");

const getAll = async(_, res) => {
    const result = await Contact.find({}, "-createdAt -updatedAt");
    res.json({
        status: "success",
        code: 200,
        data: {
            result,
        },
      });
}

module.exports = getAll;
