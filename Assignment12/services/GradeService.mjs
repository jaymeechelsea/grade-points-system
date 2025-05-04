export class GradeService {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    createGrade(gradeEntity) {
        if (!gradeEntity.grade_id || !gradeEntity.student_id || !gradeEntity.course_id || !gradeEntity.grade_value) {
            throw new Error('Missing required fields');
        }
        this.gradeRepository.save(gradeEntity);
    }

    getGradeById(grade_id) {
        return this.gradeRepository.findById(grade_id);
    }

    getAllGrades() {
        return this.gradeRepository.findAll();
    }

    updateGrade(grade_id, updatedFields) {
        const grade = this.gradeRepository.findById(grade_id);
        if (!grade) throw new Error('Grade not found');

        const updated = { ...grade, ...updatedFields };
        this.gradeRepository.save(updated);
    }

    deleteGrade(grade_id) {
        this.gradeRepository.delete(grade_id);
    }
}