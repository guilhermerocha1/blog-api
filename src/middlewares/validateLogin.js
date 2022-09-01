const validationLogin = {
  validateLogin: async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
  },
};

module.exports = {
  validationLogin,
};
