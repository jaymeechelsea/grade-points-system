import { RedemptionRuleEntity } from '../../entities/RedemptionRuleEntity.mjs';
import { RedemptionRuleRepository } from '../interfaces/RedemptionRuleRepository.mjs';

export class InMemoryRedemptionRuleRepository extends RedemptionRuleRepository {
    constructor() {
        super('redemptionrule');
        this.redemptionrules = new Map(); 
    }

    // Save (Create/Update)
    save(redemptionrule) {
        if (!(redemptionrule instanceof RedemptionRuleEntity)) {
            throw new Error('Only RedemptionRuleEntity instances can be saved.');
        }
        this.redemptionrules.set(redemptionrule.redemptionrule_id, redemptionrule);
    }

    // Find by ID
    findById(redemptionrule_id) {
        return this.redemptionrules.get(redemptionrule_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.redemptionrules.values());
    }

    // Delete by ID
    delete(redemptionrule_id) {
        if (!this.redemptionrules.has(redemptionrule_id)) {
            throw new Error(`RedemptionRule with ID ${redemptionrule_id} not found.`);
        }
        this.redemptionrules.delete(redemptionrule_id);
    }
}

export default InMemoryRedemptionRuleRepository;
