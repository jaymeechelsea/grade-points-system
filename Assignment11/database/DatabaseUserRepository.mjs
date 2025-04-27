import { UserRepository } from '../interfaces/UserRepository.mjs';

export class DatabaseUserRepository extends UserRepository {
    constructor(databaseConnection) {
        super('user');
        this.databaseConnection = databaseConnection;
    }

    async save(user) {
        console.log(`Saving User ${user.user_id} to database.`);
    }

    async findById(user_id) {
        console.log(`Finding User with ID ${user_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Users from database.');
        return [];
    }

    async delete(user_id) {
        console.log(`Deleting User with ID ${user_id} from database.`);
    }
}

export default DatabaseUserRepository;
