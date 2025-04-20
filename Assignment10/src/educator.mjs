export default class Educator {
    constructor(educator_id, user_id, department, assigned_courses = []) {
      this._educator_id = educator_id;
      this._user_id = user_id;
      this._department = department;
      this._assigned_courses = assigned_courses;
    }
  
    uploadGrades(courseId, grades) {
      console.log(`Grades uploaded for course ${courseId}.`);
    }
  
    resolveDispute(disputeId) {
      console.log(`Dispute ${disputeId} resolved by Educator ${this._educator_id}.`);
    }
  
    viewStudentProgress(studentId) {
      console.log(`Viewing progress for Student ${studentId}.`);
    }
  }