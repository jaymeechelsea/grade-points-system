import { StudentRepository } from '../interfaces/StudentRepository.mjs';

export class DatabaseStudentRepository extends StudentRepository {
    constructor(databaseConnection) {
        super('student');
        this.databaseConnection = databaseConnection;
    }

    async save(student) {
        console.log(`Saving Student ${student.student_id} to database.`);
    }

    async findById(student_id) {
        console.log(`Finding Student with ID ${student_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Students from database.');
        return [];
    }

    async delete(student_id) {
        console.log(`Deleting Student with ID ${student_id} from database.`);
    }
}

export default DatabaseStudentRepository;
