import { UserEntity } from '../../entities/UserEntity.mjs';
import { UserRepository } from '../interfaces/UserRepository.mjs';

export class InMemoryUserRepository extends UserRepository {
    constructor() {
        super('user');
        this.users = new Map(); 
    }

    // Save (Create/Update)
    save(user) {
        if (!(user instanceof UserEntity)) {
            throw new Error('Only UserEntity instances can be saved.');
        }
        this.users.set(user.user_id, user);
    }

    // Find by ID
    findById(user_id) {
        return this.users.get(user_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.users.values());
    }

    // Delete by ID
    delete(user_id) {
        if (!this.users.has(user_id)) {
            throw new Error(`User with ID ${user_id} not found.`);
        }
        this.users.delete(user_id);
    }
}

export default InMemoryUserRepository;
