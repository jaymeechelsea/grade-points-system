export class EducatorEntity {
    constructor(educator_id, user_id, department, courses, created_at) {
        this.educator_id = educator_id; 
        this.user_id = user_id; 
        this.department = department; 
        this.courses = courses; 
        this.created_at = created_at;
    }
}