const users = require('../models/userModel');

exports.getAllUsers = () => {
    return users;
};

exports.getUserById = (id) => {
    return users.find(u => u.id === parseInt(id));
};

exports.createUser = (user) => {
    user.id = users.length + 1;
    users.push(user);
    return user;
};

exports.updateUser = (id, updatedUser) => {
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
        user.name = updatedUser.name;
        user.email = updatedUser.email;
    }
    return user;
};

exports.deleteUser = (id) => {
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex !== -1) {
        return users.splice(userIndex, 1)[0];
    }
    return null;
};
