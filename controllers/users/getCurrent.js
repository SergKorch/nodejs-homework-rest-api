const getCurrent = async (req, res) => {
  const { email } = req.user;
  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      user: {
        email,
        subscription: "starter",
      },
    },
  });
};

module.exports = getCurrent;
