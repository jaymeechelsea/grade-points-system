export default class Point {
    constructor(point_id, student_id, grade_id, value, awarded_at = new Date()) {
      this._point_id = point_id;
      this._student_id = student_id;
      this._grade_id = grade_id;
      this._value = value;
      this._awarded_at = awarded_at;
    }
  
    calculateValue(multiplier = 1) {
      const calculated = this._value * multiplier;
      console.log(`Calculated value: ${calculated}`);
      return calculated;
    }
  
    expirePoint() {
      this._value = 0;
      console.log(`Point ${this._point_id} has expired.`);
    }
  }