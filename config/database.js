import { Sequelize } from 'sequelize';

// Initialize Sequelize with database connection parameters
const sequelize = new Sequelize('database_development', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port:3306
});

export default sequelize;
