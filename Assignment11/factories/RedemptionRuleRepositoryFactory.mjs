import { InMemoryRedemptionRuleRepository } from '../repositories/inMemory/InMemoryRedemptionRuleRepository.mjs';

export class RedemptionRuleRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryRedemptionRuleRepository();
            default:
                throw new Error('Invalid storage type for RedemptionRuleRepository');
        }
    }
}
