import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.js'; // Убедитесь, что путь правильный

class Post extends Model {}

Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
}, {
    sequelize, // Экземпляр sequelize
    modelName: 'Post',
});

export default Post;
