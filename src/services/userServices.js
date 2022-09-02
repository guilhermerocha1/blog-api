const { User } = require('../database/models');

const userService = {

  createLogin: async ({ email, password }) => {
    const result = await User.findOne({ where: { email, password } });
    return result;
  },
};

module.exports = {
  userService,
};
