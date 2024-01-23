// Importing the Joi validation library
import Joi from 'joi';

// Function to validate a user object
export const validateUser = (user) => {
    // Defining the validation schema
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required()
    });

    // Validating the user against the schema
    return schema.validate(user);
};
