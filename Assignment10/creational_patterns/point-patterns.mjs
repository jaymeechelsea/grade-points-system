import Point from '../src/point.js';

// SimpleFactory
export default class SimplePointFactory {
    static createPoint(point_id, student_id, grade_id, value, awarded_at = new Date()) {
        return new Point(point_id, student_id, grade_id, value, awarded_at);
    }
}

// FactoryMethod
export class PointFactory {
    createPoint(point_id, student_id, grade_id, value, awarded_at = new Date()) {
        throw new Error('This method should be overridden.');
    }
}
export class VerifiedPointFactory extends PointFactory {
    createPoint(point_id, student_id, grade_id, value, awarded_at = new Date()) {
        return new Point(point_id, student_id, grade_id, value, awarded_at);
    }
}

// AbstractFactory
export class PointAbstractFactory {
    static createFactory(type) {
        switch (type) {
            case 'verified':
                return new VerifiedPointFactory();
            default:
                throw new Error('No factory found for this type.');
        }
    }
}

// Builder
export class PointBuilder {
    constructor() {
        this._point = {};
    }

    setPointId(id) {
        this._point.point_id = id;
        return this;
    }

    setStudentId(studentId) {
        this._point.student_id = studentId;
        return this;
    }

    setGradeId(gradeId) {
        this._point.grade_id = gradeId;
        return this;
    }

    setValue(value) {
        this._point.value = value;
        return this;
    }

    setAwardedAt(date) {
        this._point.awarded_at = date;
        return this;
    }

    build() {
        return new Point(
            this._point.point_id,
            this._point.student_id,
            this._point.grade_id,
            this._point.value,
            this._point.awarded_at
        );
    }
}

// Prototype
export class PointPrototype {
    constructor(point) {
        this._point = point;
    }

    clone() {
        return new PointPrototype(Object.assign({}, this._point));
    }
}

// Singleton
export class PointSingleton {
    constructor() {
        if (!PointSingleton.instance) {
            this._point = new Point();
            PointSingleton.instance = this;
        }
        return PointSingleton.instance;
    }

    getPoint() {
        return this._point;
    }

    setPoint(point) {
        this._point = point;
    }
}
