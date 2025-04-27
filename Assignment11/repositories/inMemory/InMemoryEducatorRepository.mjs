import { EducatorEntity } from '../../entities/EducatorEntity.mjs';
import { EducatorRepository } from '../interfaces/EducatorRepository.mjs';

export class InMemoryEducatorRepository extends EducatorRepository {
    constructor() {
        super('educator');
        this.educators = new Map(); 
    }

    // Save (Create/Update)
    save(educator) {
        if (!(educator instanceof EducatorEntity)) {
            throw new Error('Only EducatorEntity instances can be saved.');
        }
        this.educators.set(educator.educator_id, educator);
    }

    // Find by ID
    findById(educator_id) {
        return this.educators.get(educator_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.educators.values());
    }

    // Delete by ID
    delete(educator_id) {
        if (!this.educators.has(educator_id)) {
            throw new Error(`Educator with ID ${educator_id} not found.`);
        }
        this.educators.delete(educator_id);
    }
}

export default InMemoryEducatorRepository;
