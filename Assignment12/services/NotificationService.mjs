export class NotificationService {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    createNotification(notificationEntity) {
        if (!notificationEntity.notification_id || !notificationEntity.user_id || !notificationEntity.message) {
            throw new Error('Missing required fields');
        }
        this.notificationRepository.save(notificationEntity);
    }

    getNotificationById(notification_id) {
        return this.notificationRepository.findById(notification_id);
    }

    getAllNotifications() {
        return this.notificationRepository.findAll();
    }

    updateNotification(notification_id, updatedFields) {
        const notification = this.notificationRepository.findById(notification_id);
        if (!notification) throw new Error('Notification not found');

        const updated = { ...notification, ...updatedFields };
        this.notificationRepository.save(updated);
    }

    deleteNotification(notification_id) {
        this.notificationRepository.delete(notification_id);
    }
}