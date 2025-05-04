import express from 'express';
import { AdminEntity } from '../../Assignment11/entities/AdminEntity.mjs'
import { InMemoryAdminRepository } from '../../Assignment11/repositories/inMemory/InMemoryAdminRepository.mjs';
import { AdminService } from '../services/AdminService.mjs';

const router = express.Router();
const adminRepository = new InMemoryAdminRepository();
const adminService = new AdminService(adminRepository);

// GET /api/admins - Fetch all admins
router.get('/admins', (req, res) => {
    const admins = adminRepository.findAll();
    res.json(admins);
});

// POST /api/admins - Create a new admin
router.post('/admins', (req, res) => {
    const { admin_id, user_id, permissions, created_at } = req.body;
    const admin = new AdminEntity(admin_id, user_id, permissions, new Date(created_at));
    adminService.createAdmin(admin);
    res.status(201).json({ message: 'Admin created', admin });
});

// PUT /api/admins/:id - Update an admin
router.put('/admins/:id', (req, res) => {
    const admin = adminRepository.findById(req.params.id);
    if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
    }
    const updated = { ...admin, ...req.body };
    adminRepository.save(updated);
    res.json({ message: 'Admin updated', admin: updated });
});

// POST /api/admins/:id/promote - Example business workflow
router.post('/admins/:id/promote', (req, res) => {
    const admin = adminRepository.findById(req.params.id);
    if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
    }
    admin.permissions.push('super-admin');
    adminRepository.save(admin);
    res.json({ message: 'Admin promoted', admin });
});

export default router;
