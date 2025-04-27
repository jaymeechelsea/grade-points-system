import { NotificationEntity } from '../../entities/NotificationEntity.mjs';
import { NotificationRepository } from '../interfaces/NotificationRepository.mjs';

export class InMemoryNotificationRepository extends NotificationRepository {
    constructor() {
        super('notification');
        this.notifications = new Map(); 
    }

    // Save (Create/Update)
    save(notification) {
        if (!(notification instanceof NotificationEntity)) {
            throw new Error('Only NotificationEntity instances can be saved.');
        }
        this.notifications.set(notification.notification_id, notification);
    }

    // Find by ID
    findById(notification_id) {
        return this.notifications.get(notification_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.notifications.values());
    }

    // Delete by ID
    delete(notification_id) {
        if (!this.notifications.has(notification_id)) {
            throw new Error(`Notification with ID ${notification_id} not found.`);
        }
        this.notifications.delete(notification_id);
    }
}

export default InMemoryNotificationRepository;
