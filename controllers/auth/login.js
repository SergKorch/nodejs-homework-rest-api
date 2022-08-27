const { Unauthorized } = require("http-errors");
// const { required } = require("joi");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const { SECRET_KEY } = process.env;
const { User } = require("../../models/user");
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      token,
      user: {
        email,
        // subscription
      },
    },
  });
};
// Status: 200 OK
// Content-Type: application/json
// ResponseBody: {
//   "token": "exampletoken",
//   "user": {
//     "email": "example@example.com",
//     "subscription": "starter"
//   }
// }
module.exports = login;
