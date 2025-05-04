import express from 'express';
import { DisputeService } from '../services/DisputeService.mjs';

const router = express.Router();
const disputeService = new DisputeService(); 

// Create a new dispute
router.post('/disputes', (req, res) => {
    try {
        const dispute = req.body;
        disputeService.createDispute(dispute);
        res.status(201).json({ message: 'Dispute created successfully', dispute });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a dispute by ID
router.get('/disputes/:id', (req, res) => {
    try {
        const dispute = disputeService.getDisputeById(req.params.id);
        if (!dispute) {
            return res.status(404).json({ error: 'Dispute not found' });
        }
        res.status(200).json(dispute);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all disputes
router.get('/disputes', (req, res) => {
    try {
        const disputes = disputeService.getAllDisputes();
        res.status(200).json(disputes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a dispute
router.put('/disputes/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        disputeService.updateDispute(req.params.id, updatedFields);
        res.status(200).json({ message: 'Dispute updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a dispute
router.delete('/disputes/:id', (req, res) => {
    try {
        disputeService.deleteDispute(req.params.id);
        res.status(200).json({ message: 'Dispute deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;