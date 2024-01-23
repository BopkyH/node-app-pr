// Importing Sequelize library
import { Sequelize } from 'sequelize';

// Initialize Sequelize with database connection parameters
const sequelize = new Sequelize('database_development', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port:3308
});

// Exporting the sequelize object
export default sequelize;
