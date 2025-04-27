import { InMemoryUserRepository } from '../repositories/inMemory/InMemoryUserRepository.mjs';

export class UserRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryUserRepository();
            default:
                throw new Error('Invalid storage type for UserRepository');
        }
    }
}
