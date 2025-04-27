import { InMemoryPointRepository } from '../repositories/inMemory/InMemoryPointRepository.mjs';

export class PointRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryPointRepository();
            default:
                throw new Error('Invalid storage type for PointRepository');
        }
    }
}
