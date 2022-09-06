const { postService } = require('../services/postServices');

const MSG_ERROR = 'ERRO INTERNO';

const postController = {
  create: async (req, res) => {
    try {
      const { body } = req;

      const id = body.categoryIds[0];

      const result = await postService.create(body, id);

      if (!result) return res.status(400).json({ message: '"categoryIds" not found' });
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: MSG_ERROR });
    }
  },
};

module.exports = { postController };
