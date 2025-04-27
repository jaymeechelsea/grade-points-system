import { DisputeEntity } from '../../entities/DisputeEntity.mjs';
import { DisputeRepository } from '../interfaces/DisputeRepository.mjs';

export class InMemoryDisputeRepository extends DisputeRepository {
    constructor() {
        super('dispute');
        this.disputes = new Map(); 
    }

    // Save (Create/Update)
    save(dispute) {
        if (!(dispute instanceof DisputeEntity)) {
            throw new Error('Only DisputeEntity instances can be saved.');
        }
        this.disputes.set(dispute.dispute_id, dispute);
    }

    // Find by ID
    findById(dispute_id) {
        return this.disputes.get(dispute_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.disputes.values());
    }

    // Delete by ID
    delete(dispute_id) {
        if (!this.disputes.has(dispute_id)) {
            throw new Error(`Dispute with ID ${dispute_id} not found.`);
        }
        this.disputes.delete(dispute_id);
    }
}

export default InMemoryDisputeRepository;
