import express from 'express';
import { NotificationService } from '../services/NotificationService.mjs';

const router = express.Router();
const notificationService = new NotificationService(); 

// Create a new notification
router.post('/notifications', (req, res) => {
    try {
        const notification = req.body;
        notificationService.createNotification(notification);
        res.status(201).json({ message: 'Notification created successfully', notification });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a notification by ID
router.get('/notifications/:id', (req, res) => {
    try {
        const notification = notificationService.getNotificationById(req.params.id);
        if (!notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all notifications
router.get('/notifications', (req, res) => {
    try {
        const notifications = notificationService.getAllNotifications();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a notification
router.put('/notifications/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        notificationService.updateNotification(req.params.id, updatedFields);
        res.status(200).json({ message: 'Notification updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a notification
router.delete('/notifications/:id', (req, res) => {
    try {
        notificationService.deleteNotification(req.params.id);
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;