// Importing required modules
import express from 'express';
import xmlparser from 'express-xml-bodyparser';

// Exporting the middleware setup function
export default (app) => {
    // Using JSON middleware
    app.use(express.json());
    // Using XML parser middleware
    app.use(xmlparser());
};
