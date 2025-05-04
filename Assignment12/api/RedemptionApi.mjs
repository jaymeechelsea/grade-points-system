import express from 'express';
import { RedemptionService } from '../services/RedemptionService.mjs';

const router = express.Router();
const redemptionService = new RedemptionService();

// Create a new redemption
router.post('/redemptions', (req, res) => {
    try {
        const redemption = req.body;
        redemptionService.createRedemption(redemption);
        res.status(201).json({ message: 'Redemption created successfully', redemption });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a redemption by ID
router.get('/redemptions/:id', (req, res) => {
    try {
        const redemption = redemptionService.getRedemptionById(req.params.id);
        if (!redemption) {
            return res.status(404).json({ error: 'Redemption not found' });
        }
        res.status(200).json(redemption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all redemptions
router.get('/redemptions', (req, res) => {
    try {
        const redemptions = redemptionService.getAllRedemptions();
        res.status(200).json(redemptions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a redemption
router.put('/redemptions/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        redemptionService.updateRedemption(req.params.id, updatedFields);
        res.status(200).json({ message: 'Redemption updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a redemption
router.delete('/redemptions/:id', (req, res) => {
    try {
        redemptionService.deleteRedemption(req.params.id);
        res.status(200).json({ message: 'Redemption deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;