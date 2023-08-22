const userService = require('../services/userService');
const validation = require('../utils/validation');

exports.getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
};

exports.getUserById = (req, res) => {
    const user = userService.getUserById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
};

exports.createUser = (req, res) => {
    const { error } = validation.validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = userService.createUser(req.body);
    res.status(201).json(user);
};

exports.updateUser = (req, res) => {
    const user = userService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
};

exports.deleteUser = (req, res) => {
    const user = userService.deleteUser(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
};

exports.uploadImage = (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');
    res.status(200).send('File uploaded');
};
