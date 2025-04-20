export default class Notification {
  constructor(notification_id, user_id, message, type, is_read = false, created_at = new Date()) {
    this._notification_id = notification_id;
    this._user_id = user_id;
    this._message = message;
    this._type = type;
    this._is_read = is_read;
    this._created_at = created_at;
  }

  sendNotification() {
    console.log(`Notification sent to user ${this._user_id}: ${this._message}`);
  }

  markAsRead() {
    this._is_read = true;
    console.log(`Notification ${this._notification_id} marked as read.`);
  }

  unsubscribe() {
    console.log(`User ${this._user_id} unsubscribed from ${this._type} notifications.`);
  }
}