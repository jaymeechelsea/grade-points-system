import Educator from '../src/educator.mjs';

// SimpleFactory
export class SimpleEducatorFactory {
    static createEducator(educator_id, user_id, department, assigned_courses = []) {
        return new Educator(educator_id, user_id, department, assigned_courses);
    }
}

// FactoryMethod
class EducatorFactory {
    createEducator(educator_id, user_id, department, assigned_courses = []) {
        throw new Error('This method should be overridden.');
    }
}

export class SeniorEducatorFactory extends EducatorFactory {
    createEducator(educator_id, user_id, department, assigned_courses = []) {
        return new Educator(educator_id, user_id, department, assigned_courses);
    }
}

// AbstractFactory
export class EducatorAbstractFactory {
    static createFactory(role) {
        switch (role) {
            case 'senior':
                return new SeniorEducatorFactory();
            default:
                throw new Error('No factory found for this role.');
        }
    }
}

// Builder
export class EducatorBuilder {
    constructor() {
        this._educator = {};
    }

    setEducatorId(id) {
        this._educator.educator_id = id;
        return this;
    }

    setUserId(userId) {
        this._educator.user_id = userId;
        return this;
    }

    setDepartment(dept) {
        this._educator.department = dept;
        return this;
    }

    setAssignedCourses(courses) {
        this._educator.assigned_courses = courses;
        return this;
    }

    build() {
        return new Educator(
            this._educator.educator_id,
            this._educator.user_id,
            this._educator.department,
            this._educator.assigned_courses
        );
    }
}

// Prototype
export class EducatorPrototype {
    constructor(educator) {
        this.educator = educator;
    }

    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this.educator)),
            this.educator
        );
    }
}

// Singleton
export class EducatorSingleton {
    constructor() {
        if (EducatorSingleton.instance) {
            return EducatorSingleton.instance;
        }
        this.educators = [];
        EducatorSingleton.instance = this;
    }

    addEducator(educator) {
        this.educators.push(educator);
    }

    getEducators() {
        return this.educators;
    }
}