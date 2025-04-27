import { InMemoryEducatorRepository } from '../repositories/inMemory/InMemoryEducatorRepository.mjs';

export class EducatorRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryEducatorRepository();
            default:
                throw new Error('Invalid storage type for EducatorRepository');
        }
    }
}
