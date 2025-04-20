describe('User Pattern', () => {
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
  
    class StudentUserFactory {
      static createUser(id, name, email, password) {
        const user = SimpleUserFactory.createUser(id, name, email, password);
        user.role = 'student';
        return user;
      }
    }
  
    class EducatorUserFactory {
      static createUser(id, name, email, password) {
        const user = SimpleUserFactory.createUser(id, name, email, password);
        user.role = 'educator';
        return user;
      }
    }
  
    test('SimpleUserFactory creates a default user', () => {
      const user = SimpleUserFactory.createUser('1', 'Alice', 'alice@test.com', 'pass1');
      expect(user).toBeDefined();
      expect(user.id).toBe('1');
      expect(user.name).toBe('Alice');
      expect(user.email).toBe('alice@test.com');
      expect(user.role).toBe('user');
    });
  
    test('StudentUserFactory creates a student user', () => {
      const student = StudentUserFactory.createUser('2', 'Bob', 'bob@test.com', 'pass2');
      expect(student).toBeDefined();
      expect(student.role).toBe('student');
    });
  
    test('EducatorUserFactory creates an educator user', () => {
      const educator = EducatorUserFactory.createUser('3', 'Cara', 'cara@test.com', 'pass3');
      expect(educator).toBeDefined();
      expect(educator.role).toBe('educator');
    });
  
    test('SimpleUserFactory throws an error for missing properties', () => {
      expect(() => {
        SimpleUserFactory.createUser('4', 'Dave', 'dave@test.com');
      }).toThrow('Missing required properties');
    });
  });