import { RedemptionEntity } from '../../entities/RedemptionEntity.mjs';
import { RedemptionRepository } from '../interfaces/RedemptionRepository.mjs';

export class InMemoryRedemptionRepository extends RedemptionRepository {
    constructor() {
        super('redemption');
        this.redemptions = new Map(); 
    }

    // Save (Create/Update)
    save(redemption) {
        if (!(redemption instanceof RedemptionEntity)) {
            throw new Error('Only RedemptionEntity instances can be saved.');
        }
        this.redemptions.set(redemption.redemption_id, redemption);
    }

    // Find by ID
    findById(redemption_id) {
        return this.redemptions.get(redemption_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.redemptions.values());
    }

    // Delete by ID
    delete(redemption_id) {
        if (!this.redemptions.has(redemption_id)) {
            throw new Error(`Redemption with ID ${redemption_id} not found.`);
        }
        this.redemptions.delete(redemption_id);
    }
}

export default InMemoryRedemptionRepository;
