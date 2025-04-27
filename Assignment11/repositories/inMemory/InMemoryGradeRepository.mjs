import { GradeEntity } from '../../entities/GradeEntity.mjs';
import { GradeRepository } from '../interfaces/GradeRepository.mjs';

export class InMemoryGradeRepository extends GradeRepository {
    constructor() {
        super('grade');
        this.grades = new Map(); 
    }

    // Save (Create/Update)
    save(grade) {
        if (!(grade instanceof GradeEntity)) {
            throw new Error('Only GradeEntity instances can be saved.');
        }
        this.grades.set(grade.grade_id, grade);
    }

    // Find by ID
    findById(grade_id) {
        return this.grades.get(grade_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.grades.values());
    }

    // Delete by ID
    delete(grade_id) {
        if (!this.grades.has(grade_id)) {
            throw new Error(`Grade with ID ${grade_id} not found.`);
        }
        this.grades.delete(grade_id);
    }
}

export default InMemoryGradeRepository;
