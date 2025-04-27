import { RedemptionRuleRepository } from '../interfaces/RedemptionRuleRepository.mjs';

export class DatabaseRedemptionRuleRepository extends RedemptionRuleRepository {
    constructor(databaseConnection) {
        super('redemptionrule');
        this.databaseConnection = databaseConnection;
    }

    async save(redemptionrule) {
        console.log(`Saving RedemptionRule ${redemptionrule.redemptionrule_id} to database.`);
    }

    async findById(redemptionrule_id) {
        console.log(`Finding RedemptionRule with ID ${redemptionrule_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all RedemptionRules from database.');
        return [];
    }

    async delete(redemptionrule_id) {
        console.log(`Deleting RedemptionRule with ID ${redemptionrule_id} from database.`);
    }
}

export default DatabaseRedemptionRuleRepository;
