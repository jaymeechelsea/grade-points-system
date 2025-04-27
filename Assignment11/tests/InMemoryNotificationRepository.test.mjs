import { describe, test, expect } from '@jest/globals';
import InMemoryNotificationRepository from '../repositories/inMemory/InMemoryNotificationRepository.mjs';

describe('InMemoryNotificationRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryNotificationRepository();
    });

    test('should save a new notification', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Test message', type: 'info', is_read: false, created_at: new Date() };
        repository.save(notification);
        const savedNotification = repository.findById('notif_1');
        expect(savedNotification).toEqual(notification);
    });

    test('should update an existing notification', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Test message', type: 'info', is_read: false, created_at: new Date() };
        repository.save(notification);

        const updatedNotification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Updated message', type: 'warning', is_read: true, created_at: new Date() };
        repository.save(updatedNotification);

        const foundUpdatedNotification = repository.findById('notif_1');
        expect(foundUpdatedNotification.message).toBe('Updated message');
        expect(foundUpdatedNotification.type).toBe('warning');
    });

    test('should find a notification by ID', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Test message', type: 'info', is_read: false, created_at: new Date() };
        repository.save(notification);

        const foundNotification = repository.findById('notif_1');
        expect(foundNotification).toEqual(notification);
    });

    test('should return null for a non-existent notification', () => {
        const foundNotification = repository.findById('non_existent_id');
        expect(foundNotification).toBeNull();
    });

    test('should find all notifications', () => {
        const notif1 = { notification_id: 'notif_1', user_id: 'user_1', message: 'Test message 1', type: 'info', is_read: false, created_at: new Date() };
        const notif2 = { notification_id: 'notif_2', user_id: 'user_2', message: 'Test message 2', type: 'alert', is_read: true, created_at: new Date() };
        repository.save(notif1);
        repository.save(notif2);

        const allNotifications = repository.findAll();
        expect(allNotifications).toHaveLength(2);
        expect(allNotifications).toEqual(expect.arrayContaining([notif1, notif2]));
    });

    test('should delete a notification by ID', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Test message', type: 'info', is_read: false, created_at: new Date() };
        repository.save(notification);

        repository.delete('notif_1');
        const deletedNotification = repository.findById('notif_1');
        expect(deletedNotification).toBeNull();
    });

    test('should throw an error when deleting a non-existent notification', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Notification with ID non_existent_id not found.');
    });
});