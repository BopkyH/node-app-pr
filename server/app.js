import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import sequelize from '../config/database.js';
import { port } from '../config/appConfig.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import applyMiddlewares from './middleware/middlewares.js';
import setupSwagger from '../swagger/swagger.js';
import path from 'path';

const app = express();

// Определение __dirname для ES модуля
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
testConnection();

app.use(express.static(path.join(__dirname, 'public')));

// Use middleware
applyMiddlewares(app);

// Configure Swagger
setupSwagger(app);

// Handler for the root route
app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

// Routes
app.use('/users', userRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Error Handler
app.use(errorHandler);

// Server startup
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
