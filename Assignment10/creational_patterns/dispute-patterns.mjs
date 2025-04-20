import Dispute from '../src/dispute.js';

// SimpleFactory
export default class SimpleDisputeFactory {
    static createDispute(dispute_id, student_id, grade_id, reason, status = 'pending', submitted_at = new Date()) {
        return new Dispute(dispute_id, student_id, grade_id, reason, status, submitted_at);
    }
}

// FactoryMethod
class DisputeFactory {
    createDispute(dispute_id, student_id, grade_id, reason, status = 'pending', submitted_at = new Date()) {
        throw new Error('This method should be overridden.');
    }
}

export class AcademicDisputeFactory extends DisputeFactory {
    createDispute(dispute_id, student_id, grade_id, reason, status = 'pending', submitted_at = new Date()) {
        return new Dispute(dispute_id, student_id, grade_id, `[ACADEMIC] ${reason}`, status, submitted_at);
    }
}

// AbstractFactory
export class DisputeAbstractFactory {
    static createFactory(type) {
        switch (type) {
            case 'academic':
                return new AcademicDisputeFactory();
            default:
                throw new Error('No factory found for this type.');
        }
    }
}

// Builder
export class DisputeBuilder {
    constructor() {
        this._dispute = {};
    }

    setDisputeId(id) {
        this._dispute.dispute_id = id;
        return this;
    }

    setStudentId(studentId) {
        this._dispute.student_id = studentId;
        return this;
    }

    setGradeId(gradeId) {
        this._dispute.grade_id = gradeId;
        return this;
    }

    setReason(reason) {
        this._dispute.reason = reason;
        return this;
    }

    setStatus(status) {
        this._dispute.status = status;
        return this;
    }

    setSubmittedAt(date) {
        this._dispute.submitted_at = date;
        return this;
    }

    build() {
        return new Dispute(
            this._dispute.dispute_id,
            this._dispute.student_id,
            this._dispute.grade_id,
            this._dispute.reason,
            this._dispute.status,
            this._dispute.submitted_at
        );
    }
}

// Prototype
export class DisputePrototype {
    constructor(dispute) {
        this.dispute = dispute;
    }

    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this.proto)),
            this.proto
        );
    }
}

// Singleton
export class DisputeSingleton {
    constructor() {
        if (DisputeSingleton.instance) {
            return DisputeSingleton.instance;
        }
        this.disputes = [];
        DisputeSingleton.instance = this;
    }

    addDispute(dispute) {
        this.disputes.push(dispute);
    }

    getDisputes() {
        return this.disputes;
    }
}