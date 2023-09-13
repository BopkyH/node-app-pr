// src/modelsTrash/user.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.js'; // Убедитесь, что путь правильный

class User extends Model {}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'User',
});

export default User;
