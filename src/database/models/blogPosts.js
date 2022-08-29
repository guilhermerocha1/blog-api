module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATETIME,
    },
    updated: {
      type: DataTypes.DATETIME,
    }
  }, {
    createdAt: 'published',
    updateAt: 'updated',
    underscored: true,
    tableName: 'blogPosts'
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: "id",
      as: "BlogPosts"
    });
  };
    //BlogPost.associate = (models) => {
    //BlogPost.hasMany(models.PostCategory, {
      //foreignKey: "postId",
      //as: "postCategories"
    //});
  //};
  return BlogPost;
};
