import { NotificationRepository } from '../interfaces/NotificationRepository.mjs';

export class DatabaseNotificationRepository extends NotificationRepository {
    constructor(databaseConnection) {
        super('notification');
        this.databaseConnection = databaseConnection;
    }

    async save(notification) {
        console.log(`Saving Notification ${notification.notification_id} to database.`);
    }

    async findById(notification_id) {
        console.log(`Finding Notification with ID ${notification_id} from database.`);
        return null;
    }

    async findAll() {
        console.log('Finding all Notifications from database.');
        return [];
    }

    async delete(notification_id) {
        console.log(`Deleting Notification with ID ${notification_id} from database.`);
    }
}

export default DatabaseNotificationRepository;
