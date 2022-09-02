const { User } = require('../database/models');

const userService = {

  createLogin: async ({ email, password }) => {
    const result = await User.findOne({ where: { email, password } });
    return result;
  },

  create: async ({ displayName, email, password, image }) => {
    const isValid = await User.findOne({ where: { email } });
    if (isValid) return null;
    const result = await User.create({ displayName, email, password, image });
    return result;
  },

  getAll: async () => {
   const getUser = await User.findAll(
      { attributes: ['id', 'displayName', 'email', 'image'] },
    );
    return getUser;
  },

  getById: async (id) => {
    const findUser = User.findOne(
      { attributes: ['id', 'displayName', 'email', 'image'], where: { id } },
    );
    if (!findUser) return null;
    return findUser;
  },
};

module.exports = {
  userService,
};
