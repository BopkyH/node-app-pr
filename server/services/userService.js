import User from '../models/user.js';
import Post from '../models/post.js';
import { Op } from 'sequelize';

// Fetch all users
export const getAllUsers = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
};

export const getUsersWithPosts = async () => {
    return await User.findAll({
        include: [{
            model: Post,
            as: 'posts'
        }]
    });
};

// Fetch a user by ID
export const getUserById = async (id) => {
    try {
        return await User.findByPk(id);
    } catch (error) {
        console.error(`Error fetching user by ID ${id}:`, error);
        throw error;
    }
};

// Create a new user
export const createUser = async (user) => {
    try {
        // Проверка на существование пользователя с таким же именем или email
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    { name: user.name },
                    { email: user.email }
                ]
            }
        });

        if (existingUser) {
            throw new Error('User with this name or email already exists');
        }

        return await User.create(user);
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Update an existing user
export const updateUser = async (id, updatedUser) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            return await user.update(updatedUser);
        }
        return null;
    } catch (error) {
        console.error(`Error updating user with ID ${id}:`, error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
        throw error;
    }
};
