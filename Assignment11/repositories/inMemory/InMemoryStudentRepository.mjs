import { StudentEntity } from '../../entities/StudentEntity.mjs';
import { StudentRepository } from '../interfaces/StudentRepository.mjs';

export class InMemoryStudentRepository extends StudentRepository {
    constructor() {
        super('student');
        this.students = new Map(); 
    }

    // Save (Create/Update)
    save(student) {
        if (!(student instanceof StudentEntity)) {
            throw new Error('Only StudentEntity instances can be saved.');
        }
        this.students.set(student.student_id, student);
    }

    // Find by ID
    findById(student_id) {
        return this.students.get(student_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.students.values());
    }

    // Delete by ID
    delete(student_id) {
        if (!this.students.has(student_id)) {
            throw new Error(`Student with ID ${student_id} not found.`);
        }
        this.students.delete(student_id);
    }
}

export default InMemoryStudentRepository;
