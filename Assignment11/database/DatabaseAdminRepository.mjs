import { AdminRepository } from '../interfaces/AdminRepository.mjs';

export class DatabaseAdminRepository extends AdminRepository {
    constructor(databaseConnection) {
        super('admin');
        this.databaseConnection = databaseConnection;
    }

    async save(admin) {
        console.log(`Saving Admin ${admin.admin_id} to database.`);
    }

    async findById(admin_id) {
        console.log(`Finding Admin with ID ${admin_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Admins from database.');
        return [];
    }

    async delete(admin_id) {
        console.log(`Deleting Admin with ID ${admin_id} from database.`);
    }
}

export default DatabaseAdminRepository;
