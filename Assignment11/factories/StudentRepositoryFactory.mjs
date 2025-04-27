import { InMemoryStudentRepository } from '../repositories/inMemory/InMemoryStudentRepository.mjs';

export class StudentRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryStudentRepository();
            default:
                throw new Error('Invalid storage type for StudentRepository');
        }
    }
}
