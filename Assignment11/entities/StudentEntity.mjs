export class StudentEntity {
    constructor(student_id, user_id, total_points, redeemed_points, grade_average) {
        this.student_id = student_id; 
        this.user_id = user_id; 
        this.total_points = total_points; 
        this.redeemed_points = redeemed_points; 
        this.grade_average = grade_average; 
    }
}