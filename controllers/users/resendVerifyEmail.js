const { BadRequest, NotFound } = require("http-errors");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");

const { RequestError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw NotFound(404, "User not found");
  }
  if (!email) {
    throw BadRequest("Missing required field email");
  }
  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }
  const verificationToken = nanoid();
  const mail = {
    to: email,
    subject: "Welcome! Confirm Your Email",
    html: `<a href="http://localhost:3001/api/users/verify/${verificationToken}" target="_blank">Confirm Email Address</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Email verify resend",
  });
};

module.exports = resendVerifyEmail;
