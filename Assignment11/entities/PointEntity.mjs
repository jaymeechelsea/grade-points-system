export class PointEntity {
    constructor(point_id, student_id, points_earned, points_redeemed, created_at) {
        this.point_id = point_id; 
        this.student_id = student_id; 
        this.points_earned = points_earned; 
        this.points_redeemed = points_redeemed; 
        this.created_at = created_at; 
    }
}