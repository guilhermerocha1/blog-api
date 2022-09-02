const { Category } = require('../database/models');

const categoriesService = {
  getAll: async () => {
    const getCategories = await Category.findAll();
    return getCategories;
  },
};

module.exports = { categoriesService };
