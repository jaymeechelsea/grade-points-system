import Student from '../src/student.mjs';

// SimpleFactory
export class SimpleStudentFactory {
    static createStudent(student_id, user_id, total_points = 0, redeemed_points = 0, grade_average = 0.0) {
        return new Student(student_id, user_id, total_points, redeemed_points, grade_average);
    }
}

// FactoryMethod
export class FactoryStudent {
    constructor(student_id, user_id, total_points = 0, redeemed_points = 0, grade_average = 0.0) {
        this._student = new Student(student_id, user_id, total_points, redeemed_points, grade_average);
    }

    get student() {
        return this._student;
    }
}

// AbstractFactory
export class AbstractFactory {
  createStudentFactory() {
    throw new Error("Method not implemented.");
  }
}

export class ConcreteFactory extends AbstractFactory {
  createStudentFactory() {
    return new RegularStudentFactory();
  }
}

// Builder
export class StudentBuilder {
    constructor() {
        this._student = {};
    }

    setStudentId(id) {
        this._student.student_id = id;
        return this;
    }

    setUserId(userId) {
        this._student.user_id = userId;
        return this;
    }

    setTotalPoints(points) {
        this._student.total_points = points;
        return this;
    }

    setRedeemedPoints(points) {
        this._student.redeemed_points = points;
        return this;
    }

    setGradeAverage(avg) {
        this._student.grade_average = avg;
        return this;
    }

    build() {
        return new Student(
            this._student.student_id,
            this._student.user_id,
            this._student.total_points,
            this._student.redeemed_points,
            this._student.grade_average
        );
    }
}

// Prototype
export class StudentPrototype {
    constructor(student) {
        this.student = student;
    }

    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this.student)),
            this.student
        );
    }
}

// Singleton
export class StudentSingleton {
    constructor() {
        if (StudentSingleton.instance) {
            return StudentSingleton.instance;
        }
        this.students = [];
        StudentSingleton.instance = this;
    }

    addStudent(student) {
        this.students.push(student);
    }

    getStudents() {
        return this.students;
    }
}

// // Usage examples
// const studentSingleton = new StudentSingleton();
// const student1 = SimpleStudentFactory.createStudent("stu1", "1", 100, 20, 75.5);
// studentSingleton.addStudent(student1);

// const studentBuilder = new StudentBuilder();
// const student2 = studentBuilder.setStudentId("stu2").setUserId("2").setTotalPoints(80).setRedeemedPoints(10).setGradeAverage(82.3).build();
// studentSingleton.addStudent(student2);

// const studentPrototype = new StudentPrototype(student1);
// const studentClone = studentPrototype.clone();
// studentClone._student_id = "stuClone";
// studentSingleton.addStudent(studentClone);

// const studentFactoryMethod = new RegularStudentFactory();
// const student3 = studentFactoryMethod.createStudent("stu3", "3", 90, 15, 88.0);
// studentSingleton.addStudent(student3);

// const abstractFactory = new ConcreteFactory();
// const userFactoryFromAbstract = abstractFactory.createUserFactory();
// const studentFactoryFromAbstract = abstractFactory.createStudentFactory();

// const admin2 = userFactoryFromAbstract.createUser("4", "FactoryAdmin", "facadmin@email.com", "pw4");
// const student4 = studentFactoryFromAbstract.createStudent("stu4", "4", 95, 5, 91.2);

// singleton.addUser(admin2);
// studentSingleton.addStudent(student4);

// console.log(studentSingleton.getStudents());
