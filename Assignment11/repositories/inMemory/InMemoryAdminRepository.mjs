import { AdminEntity } from '../../entities/AdminEntity.mjs';
import { AdminRepository } from '../interfaces/AdminRepository.mjs';

export class InMemoryAdminRepository extends AdminRepository {
    constructor() {
        super('admin');
        this.admins = new Map(); 
    }

    // Save (Create/Update)
    save(admin) {
        if (!(admin instanceof AdminEntity)) {
            throw new Error('Only AdminEntity instances can be saved.');
        }
        this.admins.set(admin.admin_id, admin);
    }

    // Find by ID
    findById(admin_id) {
        return this.admins.get(admin_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.admins.values());
    }

    // Delete by ID
    delete(admin_id) {
        if (!this.admins.has(admin_id)) {
            throw new Error(`Admin with ID ${admin_id} not found.`);
        }
        this.admins.delete(admin_id);
    }
}

export default InMemoryAdminRepository;
