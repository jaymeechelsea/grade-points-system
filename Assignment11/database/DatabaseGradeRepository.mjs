import { GradeRepository } from '../interfaces/GradeRepository.mjs';

export class DatabaseGradeRepository extends GradeRepository {
    constructor(databaseConnection) {
        super('grade');
        this.databaseConnection = databaseConnection;
    }

    async save(grade) {
        console.log(`Saving Grade ${grade.grade_id} to database.`);
    }

    async findById(grade_id) {
        console.log(`Finding Grade with ID ${grade_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Grades from database.');
        return [];
    }

    async delete(grade_id) {
        console.log(`Deleting Grade with ID ${grade_id} from database.`);
    }
}

export default DatabaseGradeRepository;
