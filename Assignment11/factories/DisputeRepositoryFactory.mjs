import { InMemoryDisputeRepository } from '../repositories/inMemory/InMemoryDisputeRepository.mjs';

export class DisputeRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryDisputeRepository();
            default:
                throw new Error('Invalid storage type for DisputeRepository');
        }
    }
}
