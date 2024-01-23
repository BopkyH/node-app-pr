// Exporting configuration
export const port = 3000;

export const swaggerOptions = {
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
    apis: ["./server/routes/*.js"]
};
