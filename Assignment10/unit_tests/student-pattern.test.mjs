describe('Student Pattern', () => {
    class Student {
      constructor(id, name, email, role = 'student') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
      }
    }
  
    class StudentFactory {
      static createStudent(id, name, email) {
        if (!id || !name || !email) {
          throw new Error('Missing required properties');
        }
        return new Student(id, name, email);
      }
    }
  
    test('should create a student with valid properties', () => {
      const student = StudentFactory.createStudent('1', 'John Doe', 'john.doe@test.com');
      expect(student).toBeDefined();
      expect(student.id).toBe('1');
      expect(student.name).toBe('John Doe');
      expect(student.email).toBe('john.doe@test.com');
      expect(student.role).toBe('student');
    });
  
    test('should throw an error for missing required properties', () => {
      expect(() => {
        StudentFactory.createStudent('2', 'Jane Doe');
      }).toThrow('Missing required properties');
    });
  
    test('should allow customization of the role', () => {
      const student = new Student('3', 'Alice', 'alice@test.com', 'custom-role');
      expect(student.role).toBe('custom-role');
    });
  });