import Grade from '../src/grade.mjs';

// SimpleFactory
export default class SimpleGradeFactory {
    static createGrade(grade_id, student_id, course_name, score, uploaded_by) {
        return new Grade(grade_id, student_id, course_name, score, uploaded_by);
    }
}

// FactoryMethod
class GradeFactory {
    createGrade(grade_id, student_id, course_name, score, uploaded_by) {
        throw new Error('This method should be overridden.');
    }
}

export class VerifiedGradeFactory extends GradeFactory {
    createGrade(grade_id, student_id, course_name, score, uploaded_by) {
        return new Grade(grade_id, student_id, course_name, score, uploaded_by);
    }
}

// AbstractFactory
export class GradeAbstractFactory {
    static createFactory(type) {
        switch (type) {
            case 'verified':
                return new VerifiedGradeFactory();
            default:
                throw new Error('No factory found for this type.');
        }
    }
}

// Builder
export class GradeBuilder {
    constructor() {
        this._grade = {};
    }

    setGradeId(id) {
        this._grade.grade_id = id;
        return this;
    }

    setStudentId(studentId) {
        this._grade.student_id = studentId;
        return this;
    }

    setCourseName(courseName) {
        this._grade.course_name = courseName;
        return this;
    }

    setScore(score) {
        this._grade.score = score;
        return this;
    }

    setUploadedBy(uploadedBy) {
        this._grade.uploaded_by = uploadedBy;
        return this;
    }

    build() {
        return new Grade(
            this._grade.grade_id,
            this._grade.student_id,
            this._grade.course_name,
            this._grade.score,
            this._grade.uploaded_by
        );
    }
}

// Prototype
export class GradePrototype {
    constructor(grade) {
        this.grade = grade;
    }

    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this.grade)),
            this.grade
        );
    }
}

// Singleton
export class GradeManager {
    constructor() {
        if (GradeManager.instance) {
            return GradeManager.instance;
        }
        this.grades = [];
        GradeManager.instance = this;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGrades() {
        return this.grades;
    }
}