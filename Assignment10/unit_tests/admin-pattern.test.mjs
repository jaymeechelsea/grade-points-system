describe('AdminUserFactory', () => {
    class User {
      constructor(id, name, email, role = 'user') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
      }
    }
  
    class SimpleUserFactory {
      static createUser(id, name, email, password) {
        if (!id || !name || !email || !password) {
          throw new Error('Missing required properties');
        }
        return new User(id, name, email);
      }
    }
  
    class AdminUserFactory {
      static createUser(id, name, email, password) {
        const user = SimpleUserFactory.createUser(id, name, email, password);
        user.role = 'admin';
        return user;
      }
    }
  
    test('should create an admin user', () => {
      const admin = AdminUserFactory.createUser('1', 'Admin User', 'admin@test.com', 'pass1');
      expect(admin).toBeDefined();
      expect(admin.id).toBe('1');
      expect(admin.name).toBe('Admin User');
      expect(admin.email).toBe('admin@test.com');
      expect(admin.role).toBe('admin');
    });
  
    test('should throw an error for missing properties', () => {
      expect(() => {
        AdminUserFactory.createUser('2', 'Admin User');
      }).toThrow('Missing required properties');
    });
  });