const { User } = require('../database/models');

const userService = {

  createLogin: async ({ email, password }) => {
    const result = await User.findOne({ where: { email, password } });
    return result;
  },

  create: async ({ displayName, email, password, image }) => {
    const isValid = await User.findOne({ where: { email } });
    if (isValid) return null;
    console.log(isValid);
    const result = await User.create({ displayName, email, password, image });
    return result;
  },
};

module.exports = {
  userService,
};
