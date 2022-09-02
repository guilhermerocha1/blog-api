const { categoriesService } = require('../services/categoriesServices');

const categoriesController = {
  getAll: async (req, res) => {
    const getCategory = await categoriesService.getAll();
    res.status(200).json(getCategory);
  },
};

module.exports = { categoriesController };
