describe('GradePattern', () => {
    class Grade {
      constructor(studentId, subject, score) {
        this.studentId = studentId;
        this.subject = subject;
        this.score = score;
        this.grade = this.calculateGrade();
      }
  
      calculateGrade() {
        if (this.score >= 90) return 'A';
        if (this.score >= 80) return 'B';
        if (this.score >= 70) return 'C';
        if (this.score >= 60) return 'D';
        return 'F';
      }
    }
  
    class GradeFactory {
      static createGrade(studentId, subject, score) {
        if (!studentId || !subject || score === undefined) {
          throw new Error('Missing required properties');
        }
        return new Grade(studentId, subject, score);
      }
    }
  
    test('should create a grade with valid properties', () => {
      const grade = GradeFactory.createGrade('1', 'Mathematics', 85);
      expect(grade).toBeDefined();
      expect(grade.studentId).toBe('1');
      expect(grade.subject).toBe('Mathematics');
      expect(grade.score).toBe(85);
      expect(grade.grade).toBe('B');
    });
  
    test('should throw an error for missing properties', () => {
      expect(() => {
        GradeFactory.createGrade('2', 'Science');
      }).toThrow('Missing required properties');
    });
  
    test('should calculate the correct grade based on score', () => {
      const gradeA = GradeFactory.createGrade('3', 'English', 95);
      const gradeB = GradeFactory.createGrade('4', 'History', 82);
      const gradeC = GradeFactory.createGrade('5', 'Geography', 75);
      const gradeD = GradeFactory.createGrade('6', 'Biology', 65);
      const gradeF = GradeFactory.createGrade('7', 'Chemistry', 50);
  
      expect(gradeA.grade).toBe('A');
      expect(gradeB.grade).toBe('B');
      expect(gradeC.grade).toBe('C');
      expect(gradeD.grade).toBe('D');
      expect(gradeF.grade).toBe('F');
    });
  });