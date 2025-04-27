import { DisputeRepository } from '../interfaces/DisputeRepository.mjs';

export class DatabaseDisputeRepository extends DisputeRepository {
    constructor(databaseConnection) {
        super('dispute');
        this.databaseConnection = databaseConnection;
    }

    async save(dispute) {
        console.log(`Saving Dispute ${dispute.dispute_id} to database.`);
    }

    async findById(dispute_id) {
        console.log(`Finding Dispute with ID ${dispute_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Disputes from database.');
        return [];
    }

    async delete(dispute_id) {
        console.log(`Deleting Dispute with ID ${dispute_id} from database.`);
    }
}

export default DatabaseDisputeRepository;
