import express from 'express';
import { PointService } from '../services/PointService.mjs';

const router = express.Router();
const pointService = new PointService(); 

// Create a new point record
router.post('/points', (req, res) => {
    try {
        const point = req.body;
        pointService.createPoint(point);
        res.status(201).json({ message: 'Point record created successfully', point });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a point record by ID
router.get('/points/:id', (req, res) => {
    try {
        const point = pointService.getPointById(req.params.id);
        if (!point) {
            return res.status(404).json({ error: 'Point record not found' });
        }
        res.status(200).json(point);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all point records
router.get('/points', (req, res) => {
    try {
        const points = pointService.getAllPoints();
        res.status(200).json(points);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a point record
router.put('/points/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        pointService.updatePoint(req.params.id, updatedFields);
        res.status(200).json({ message: 'Point record updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a point record
router.delete('/points/:id', (req, res) => {
    try {
        pointService.deletePoint(req.params.id);
        res.status(200).json({ message: 'Point record deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;