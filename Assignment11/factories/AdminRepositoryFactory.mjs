import { InMemoryAdminRepository } from '../repositories/inMemory/InMemoryAdminRepository.mjs';

export class AdminRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryAdminRepository();
            default:
                throw new Error('Invalid storage type for AdminRepository');
        }
    }
}
