const express = require('express');
const xmlparser = require('express-xml-bodyparser');

const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = 3000;

// Добавление middleware
app.use(express.json());
app.use(xmlparser()); // Использование xmlparser

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "User Management API",
            description: "User Management API Information",
            contact: {
                name: "Developer"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["./src/routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

// Добавленный обработчик для корневого маршрута
app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

app.use('/users', userRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
