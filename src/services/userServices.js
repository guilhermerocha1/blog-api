const { User } = require('../database/models');

const userService = {

  createLogin: async ({ email }) => {
    const result = await User.findOne({ where: { email } });
    if (!result) return null;
    return result;
  },
};

module.exports = {
  userService,
};
