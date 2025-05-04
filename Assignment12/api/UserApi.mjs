import express from 'express';
import { UserService } from '../services/UserService.mjs';

const router = express.Router();
const userService = new UserService(); 

// Create a new user
router.post('/users', (req, res) => {
    try {
        const user = req.body;
        userService.createUser(user);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a user by ID
router.get('/users/:id', (req, res) => {
    try {
        const user = userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all users
router.get('/users', (req, res) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user
router.put('/users/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        userService.updateUser(req.params.id, updatedFields);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a user
router.delete('/users/:id', (req, res) => {
    try {
        userService.deleteUser(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;