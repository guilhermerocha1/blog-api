const { Category } = require('../database/models');

const categoriesService = {
  getAll: async () => {
    const getCategories = await Category.findAll();
    return getCategories;
  },
  create: async (name) => {
    const categoryCreate = await Category.create({ name });
    return categoryCreate;
  },
};

module.exports = { categoriesService };
