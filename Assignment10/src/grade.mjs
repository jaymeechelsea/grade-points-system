export default class Grade {
    constructor(grade_id, student_id, course_name, score, uploaded_by) {
        this._grade_id = grade_id;
        this._student_id = student_id;
        this._course_name = course_name;
        this._score = score;
        this._uploaded_by = uploaded_by;
        this._uploaded_at = new Date();
    }

    convertToPoints() {
        const points = this._score * 1.5; // Example conversion rate
        console.log(`Converted ${this._score} to ${points} points.`);
        return points;
    }

    flagForDispute(reason) {
        console.log(`Grade ${this._grade_id} flagged for dispute: ${reason}`);
    }
}