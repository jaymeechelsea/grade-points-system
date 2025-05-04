import express from 'express';
import { RedemptionRuleService } from '../services/RedemptionRuleService.mjs';

const router = express.Router();
const redemptionRuleService = new RedemptionRuleService();

// Create a new redemption rule
router.post('/redemption-rules', (req, res) => {
    try {
        const redemptionRule = req.body;
        redemptionRuleService.createRedemptionRule(redemptionRule);
        res.status(201).json({ message: 'Redemption rule created successfully', redemptionRule });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a redemption rule by ID
router.get('/redemption-rules/:id', (req, res) => {
    try {
        const redemptionRule = redemptionRuleService.getRedemptionRuleById(req.params.id);
        if (!redemptionRule) {
            return res.status(404).json({ error: 'Redemption rule not found' });
        }
        res.status(200).json(redemptionRule);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all redemption rules
router.get('/redemption-rules', (req, res) => {
    try {
        const redemptionRules = redemptionRuleService.getAllRedemptionRules();
        res.status(200).json(redemptionRules);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a redemption rule
router.put('/redemption-rules/:id', (req, res) => {
    try {
        const updatedFields = req.body;
        redemptionRuleService.updateRedemptionRule(req.params.id, updatedFields);
        res.status(200).json({ message: 'Redemption rule updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a redemption rule
router.delete('/redemption-rules/:id', (req, res) => {
    try {
        redemptionRuleService.deleteRedemptionRule(req.params.id);
        res.status(200).json({ message: 'Redemption rule deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;