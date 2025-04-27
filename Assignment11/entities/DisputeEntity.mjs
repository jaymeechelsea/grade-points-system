export class DisputeEntity {
    constructor(dispute_id, student_id, description, status, created_at, resolved_at = null) {
        this.dispute_id = dispute_id; 
        this.student_id = student_id; 
        this.description = description;
        this.status = status; 
        this.created_at = created_at; 
        this.resolved_at = resolved_at; 
    }
}