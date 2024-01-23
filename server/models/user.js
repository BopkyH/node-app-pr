import { Model, DataTypes, Op } from 'sequelize';
import sequelize from '../../config/database.js'; // Убедитесь, что путь правильный
import Post from './post.js'; // Убедитесь, что путь правильный

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    unique: true  // Уникальное ограничение
  },
  email: {
    type: DataTypes.STRING,
    unique: true  // Уникальное ограничение
  },
}, {
  sequelize,
  modelName: 'User',
});

User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'posts'
});

export default User;
