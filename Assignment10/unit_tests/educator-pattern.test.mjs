describe('EducatorUserFactory', () => {
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
  
    class EducatorUserFactory {
      static createUser(id, name, email, password) {
        const user = SimpleUserFactory.createUser(id, name, email, password);
        user.role = 'educator';
        return user;
      }
    }
  
    test('should create an educator user', () => {
      const educator = EducatorUserFactory.createUser('1', 'Jane Doe', 'jane.doe@test.com', 'pass1');
      expect(educator).toBeDefined();
      expect(educator.id).toBe('1');
      expect(educator.name).toBe('Jane Doe');
      expect(educator.email).toBe('jane.doe@test.com');
      expect(educator.role).toBe('educator');
    });
  
    test('should throw an error for missing properties', () => {
      expect(() => {
        EducatorUserFactory.createUser('2', 'John Doe');
      }).toThrow('Missing required properties');
    });
  });