import express from 'express';
import { StudentService } from '../services/StudentService.mjs';

const router = express.Router();
const studentService = new StudentService();

// Create a new student
router.post('/students', (req, res) => {
    try {
        const student = req.body;
        studentService.createStudent(student);
        res.status(201).json({ message: 'Student created successfully', student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a student by ID
router.get('/students/:id', (req, res) => {
    try {
        const student = studentService.getStudentById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all students
router.get('/students', (req, res) => {
    try {
        const students = studentService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a student
router.put('/students/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        studentService.updateStudent(req.params.id, updatedFields);
        res.status(200).json({ message: 'Student updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a student
router.delete('/students/:id', (req, res) => {
    try {
        studentService.deleteStudent(req.params.id);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;