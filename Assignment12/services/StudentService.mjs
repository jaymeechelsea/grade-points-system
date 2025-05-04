export class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }

    createStudent(studentEntity) {
        if (!studentEntity.student_id || !studentEntity.user_id || studentEntity.total_points === undefined || studentEntity.redeemed_points === undefined) {
            throw new Error('Missing required fields');
        }
        this.studentRepository.save(studentEntity);
    }

    getStudentById(student_id) {
        return this.studentRepository.findById(student_id);
    }

    getAllStudents() {
        return this.studentRepository.findAll();
    }

    updateStudent(student_id, updatedFields) {
        const student = this.studentRepository.findById(student_id);
        if (!student) throw new Error('Student not found');

        const updated = { ...student, ...updatedFields };
        this.studentRepository.save(updated);
    }

    deleteStudent(student_id) {
        this.studentRepository.delete(student_id);
    }
}