import { PointRepository } from '../interfaces/PointRepository.mjs';

export class DatabasePointRepository extends PointRepository {
    constructor(databaseConnection) {
        super('point');
        this.databaseConnection = databaseConnection;
    }

    async save(point) {
        console.log(`Saving Point ${point.point_id} to database.`);
    }

    async findById(point_id) {
        console.log(`Finding Point with ID ${point_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Points from database.');
        return [];
    }

    async delete(point_id) {
        console.log(`Deleting Point with ID ${point_id} from database.`);
    }
}

export default DatabasePointRepository;
