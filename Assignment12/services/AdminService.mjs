export class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }

    createAdmin(adminEntity) {
        if (!adminEntity.admin_id || !adminEntity.user_id) {
            throw new Error('Missing required fields');
        }
        this.adminRepository.save(adminEntity);
    }

    getAdminById(admin_id) {
        return this.adminRepository.findById(admin_id);
    }

    getAllAdmins() {
        return this.adminRepository.findAll();
    }

    updateAdmin(admin_id, updatedFields) {
        const admin = this.adminRepository.findById(admin_id);
        if (!admin) throw new Error('Admin not found');

        const updated = { ...admin, ...updatedFields };
        this.adminRepository.save(updated);
    }

    deleteAdmin(admin_id) {
        this.adminRepository.delete(admin_id);
    }
}
