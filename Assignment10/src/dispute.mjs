export default class Dispute {
    constructor(dispute_id, student_id, grade_id, reason, status = 'pending', submitted_at = new Date()) {
      this._dispute_id = dispute_id;
      this._student_id = student_id;
      this._grade_id = grade_id;
      this._reason = reason;
      this._status = status;
      this._submitted_at = submitted_at;
    }
  
    submitDispute() {
      console.log(`Dispute submitted by Student ${this._student_id} for Grade ${this._grade_id}.`);
    }
  
    resolveDispute() {
      this._status = 'resolved';
      console.log(`Dispute ${this._dispute_id} resolved.`);
    }
  }