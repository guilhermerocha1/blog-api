const { BlogPost, Category, sequelize, PostCategory } = require('../database/models');

const postService = {
  create: async (body, id) => {
    const { rows } = await Category.findAndCountAll({ where: { id: body.categoryIds } });

    if (rows.length !== body.categoryIds.length) return false;
    const result = await sequelize.transaction(async (transaction) => {
      const create = await BlogPost.create({ title: body.title, 
        content: body.content,
        userId: id },  
        { transaction });
      const infos = body.categoryIds.map((category) => ({
        postId: create.dataValues.id, categoryId: category,
      }));
      await PostCategory.bulkCreate(infos, { transaction });
      return create.dataValues;
    });

    return result;
  },
};

module.exports = { postService };
