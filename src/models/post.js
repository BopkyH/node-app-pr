class Post extends Model {}

Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
}, {
    sequelize,
    modelName: 'Post',
});

Post.belongsTo(User);  // Establishes a many-to-one relationship between Post and User
