const handleSignin = (req, res) => {
  return res.json({ token: "token", success: true, userId: 1 });
};

module.exports = { handleSignin };
