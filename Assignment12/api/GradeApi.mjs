import express from 'express';
import { GradeService } from '../services/GradeService.mjs';

const router = express.Router();
const gradeService = new GradeService(); 

// Create a new grade
router.post('/grades', (req, res) => {
    try {
        const grade = req.body;
        gradeService.createGrade(grade);
        res.status(201).json({ message: 'Grade created successfully', grade });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a grade by ID
router.get('/grades/:id', (req, res) => {
    try {
        const grade = gradeService.getGradeById(req.params.id);
        if (!grade) {
            return res.status(404).json({ error: 'Grade not found' });
        }
        res.status(200).json(grade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all grades
router.get('/grades', (req, res) => {
    try {
        const grades = gradeService.getAllGrades();
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a grade
router.put('/grades/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        gradeService.updateGrade(req.params.id, updatedFields);
        res.status(200).json({ message: 'Grade updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a grade
router.delete('/grades/:id', (req, res) => {
    try {
        gradeService.deleteGrade(req.params.id);
        res.status(200).json({ message: 'Grade deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;