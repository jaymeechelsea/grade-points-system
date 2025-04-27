export class RedemptionEntity {
    constructor(redemption_id, student_id, points_redeemed, reward, created_at) {
        this.redemption_id = redemption_id; 
        this.student_id = student_id; 
        this.points_redeemed = points_redeemed; 
        this.reward = reward; 
        this.created_at = created_at; 
    }
}