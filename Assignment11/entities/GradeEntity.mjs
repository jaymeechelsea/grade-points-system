export class GradeEntity {
    constructor(grade_id, student_id, course_id, grade_value, created_at) {
        this.grade_id = grade_id; 
        this.student_id = student_id; 
        this.course_id = course_id; 
        this.grade_value = grade_value; 
        this.created_at = created_at; 
    }
}