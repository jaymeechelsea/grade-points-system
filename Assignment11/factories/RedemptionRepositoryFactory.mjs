import { InMemoryRedemptionRepository } from '../repositories/inMemory/InMemoryRedemptionRepository.mjs';

export class RedemptionRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryRedemptionRepository();
            default:
                throw new Error('Invalid storage type for RedemptionRepository');
        }
    }
}
