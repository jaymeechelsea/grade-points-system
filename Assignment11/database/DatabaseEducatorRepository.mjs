import { EducatorRepository } from '../interfaces/EducatorRepository.mjs';

export class DatabaseEducatorRepository extends EducatorRepository {
    constructor(databaseConnection) {
        super('educator');
        this.databaseConnection = databaseConnection;
    }

    async save(educator) {
        console.log(`Saving Educator ${educator.educator_id} to database.`);
    }

    async findById(educator_id) {
        console.log(`Finding Educator with ID ${educator_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Educators from database.');
        return [];
    }

    async delete(educator_id) {
        console.log(`Deleting Educator with ID ${educator_id} from database.`);
    }
}

export default DatabaseEducatorRepository;
