const { Conflict } = require("http-errors");
const {nanoid} = require("nanoid")
const gravatar = require("gravatar");

const {sendEmail} = require("../../helpers")
const { User } = require("../../models/user");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, avatarURL , verificationToken});

  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: 'Welcome! Confirm Your Email',
    html: `<a target="_blank" href="http://localhost:3001/api/users/verify/${verificationToken}">Confirm Email Address</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: "Created",
    code: 201,
    data: {
      user: {
        email,
        subscription: "starter",
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = register;
