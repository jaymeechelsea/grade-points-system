describe('NotificationPattern', () => {
    class Notification {
      constructor(id, message, type = 'info') {
        this.id = id;
        this.message = message;
        this.type = type;
        this.status = 'unread';
      }
  
      markAsRead() {
        this.status = 'read';
      }
    }
  
    class NotificationFactory {
      static createNotification(id, message, type) {
        if (!id || !message) {
          throw new Error('Missing required properties');
        }
        return new Notification(id, message, type);
      }
    }
  
    test('should create a notification with valid properties', () => {
      const notification = NotificationFactory.createNotification('1', 'You have a new message', 'info');
      expect(notification).toBeDefined();
      expect(notification.id).toBe('1');
      expect(notification.message).toBe('You have a new message');
      expect(notification.type).toBe('info');
      expect(notification.status).toBe('unread');
    });
  
    test('should throw an error for missing properties', () => {
      expect(() => {
        NotificationFactory.createNotification('2');
      }).toThrow('Missing required properties');
    });
  
    test('should mark a notification as read', () => {
      const notification = NotificationFactory.createNotification('3', 'Your assignment has been graded', 'success');
      notification.markAsRead();
      expect(notification.status).toBe('read');
    });
  });