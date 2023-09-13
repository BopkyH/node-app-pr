// Importing dependencies
import * as userService from '../services/userService.js';
import * as validation from '../utils/validation.js';

// Fetch all users
export const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    // console.log(users);  // Добавьте эту строку для отладки
    res.json(users);
};

// Fetch a user by ID
export const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
};

// Create a new user
export const createUser = async (req, res) => {
    const { error } = validation.validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.createUser(req.body);
    res.status(201).json(user);
};

// Update an existing user
export const updateUser = async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
};

// Delete a user
export const deleteUser = async (req, res) => {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
};

// Upload an image
export const uploadImage = (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');
    res.status(200).send('File uploaded');
};
