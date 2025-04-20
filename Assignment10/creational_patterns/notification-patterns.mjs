import Notification from '../src/notification.js';

// SimpleFactory
export default class SimpleNotificationFactory {
    static createNotification(notification_id, user_id, message, type, is_read = false, created_at = new Date()) {
        return new Notification(notification_id, user_id, message, type, is_read, created_at);
    }
}

// FactoryMethod
class NotificationFactory {
    createNotification(notification_id, user_id, message, type, is_read = false, created_at = new Date()) {
        throw new Error('This method should be overridden.');
    }
}

export class AlertNotificationFactory extends NotificationFactory {
    createNotification(notification_id, user_id, message, type = 'alert', is_read = false, created_at = new Date()) {
        return new Notification(notification_id, user_id, `[ALERT] ${message}`, type, is_read, created_at);
    }
}

// AbstractFactory
export class NotificationAbstractFactory {
    static createFactory(type) {
        switch (type) {
            case 'alert':
                return new AlertNotificationFactory();
            default:
                throw new Error('No factory found for this type.');
        }
    }
}

// Builder
export class NotificationBuilder {
    constructor() {
        this._notification = {};
    }

    setNotificationId(id) {
        this._notification.notification_id = id;
        return this;
    }

    setUserId(userId) {
        this._notification.user_id = userId;
        return this;
    }

    setMessage(msg) {
        this._notification.message = msg;
        return this;
    }

    setType(type) {
        this._notification.type = type;
        return this;
    }

    setIsRead(status) {
        this._notification.is_read = status;
        return this;
    }

    setCreatedAt(date) {
        this._notification.created_at = date;
        return this;
    }

    build() {
        return new Notification(
            this._notification.notification_id,
            this._notification.user_id,
            this._notification.message,
            this._notification.type,
            this._notification.is_read,
            this._notification.created_at
        );
    }
}

// Prototype
export class NotificationPrototype {
    constructor(notification) {
        this.notification = notification;
    }

    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this.notification)),
            this.notification
        );
    }
}

// Singleton
export class NotificationSingleton {
    constructor() {
        if (NotificationSingleton.instance) {
            return NotificationSingleton.instance;
        }
        this.notifications = [];
        NotificationSingleton.instance = this;
    }

    addNotification(notification) {
        this.notifications.push(notification);
    }

    getNotifications() {
        return this.notifications;
    }
}