const { categoriesService } = require('../services/categoriesServices');

const MSG_ERROR = 'ERROR INTERNO';

const categoriesController = {

  getAll: async (req, res) => {
    try {
      const getCategory = await categoriesService.getAll();
      res.status(200).json(getCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: MSG_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) return res.status(400).json({ message: '"name" is required' });
      const createCategory = await categoriesService.create(name);
      res.status(201).json(createCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: MSG_ERROR });
    }
  },

};

module.exports = { categoriesController };
