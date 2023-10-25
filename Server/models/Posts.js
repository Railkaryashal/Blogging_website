module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
    });

    Posts.hasMany(models.Likes, {
      onDelete: "cascade",
    });
  };

  // // Add the new column 'age' to the 'Posts' table
  // sequelize
  //   .query('ALTER TABLE Posts ADD COLUMN age INTEGER')
  //   .then(() => {
  //     console.log('Column "age" added successfully.');
  //   })
  //   .catch((error) => {
  //     console.error('Error adding column "age":', error);
  //   });

  return Posts;
};
