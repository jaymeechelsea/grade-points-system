import express from 'express';
import { EducatorService } from '../services/EducatorService.mjs';

const router = express.Router();
const educatorService = new EducatorService(); 

// Create a new educator
router.post('/educators', (req, res) => {
    try {
        const educator = req.body;
        educatorService.createEducator(educator);
        res.status(201).json({ message: 'Educator created successfully', educator });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get an educator by ID
router.get('/educators/:id', (req, res) => {
    try {
        const educator = educatorService.getEducatorById(req.params.id);
        if (!educator) {
            return res.status(404).json({ error: 'Educator not found' });
        }
        res.status(200).json(educator);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all educators
router.get('/educators', (req, res) => {
    try {
        const educators = educatorService.getAllEducators();
        res.status(200).json(educators);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an educator
router.put('/educators/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        educatorService.updateEducator(req.params.id, updatedFields);
        res.status(200).json({ message: 'Educator updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete an educator
router.delete('/educators/:id', (req, res) => {
    try {
        educatorService.deleteEducator(req.params.id);
        res.status(200).json({ message: 'Educator deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;