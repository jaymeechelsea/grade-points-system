export class NotificationEntity {
    constructor(notification_id, user_id, message, type, is_read, created_at) {
        this.notification_id = notification_id; 
        this.user_id = user_id; 
        this.message = message; 
        this.type = type; 
        this.is_read = is_read; 
        this.created_at = created_at; 
    }
}