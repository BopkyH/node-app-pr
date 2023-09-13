// Importing required modules
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from '../config/appConfig.js';

// Function to set up Swagger documentation
export default (app) => {
    // Generating Swagger documentation based on options
    const swaggerDocs = swaggerJsDoc(swaggerOptions);

    // Setting up Swagger UI middleware
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
