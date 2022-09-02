const { categoriesService } = require('../services/categoriesServices');

const categoriesController = {
  getAll: async (req, res) => {
    const getCategory = await categoriesService.getAll();
    res.status(200).json(getCategory);
  },
  create: async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const createCategory = await categoriesService.create(name);
    res.status(201).json(createCategory);
  },
};

module.exports = { categoriesController };
