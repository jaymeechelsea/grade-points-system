import { InMemoryRepositoryRepository } from '../repositories/inMemory/InMemoryRepositoryRepository.mjs';

export class RepositoryRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryRepositoryRepository();
            default:
                throw new Error('Invalid storage type for RepositoryRepository');
        }
    }
}
