import { RedemptionRepository } from '../interfaces/RedemptionRepository.mjs';

export class DatabaseRedemptionRepository extends RedemptionRepository {
    constructor(databaseConnection) {
        super('redemption');
        this.databaseConnection = databaseConnection;
    }

    async save(redemption) {
        console.log(`Saving Redemption ${redemption.redemption_id} to database.`);
    }

    async findById(redemption_id) {
        console.log(`Finding Redemption with ID ${redemption_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Redemptions from database.');
        return [];
    }

    async delete(redemption_id) {
        console.log(`Deleting Redemption with ID ${redemption_id} from database.`);
    }
}

export default DatabaseRedemptionRepository;
