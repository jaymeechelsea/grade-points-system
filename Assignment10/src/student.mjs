export default class Student {
    constructor(student_id, user_id, total_points = 0, redeemed_points = 0, grade_average = 0.0) {
        this._student_id = student_id;
        this._user_id = user_id;
        this._total_points = total_points;
        this._redeemed_points = redeemed_points;
        this._grade_average = grade_average;
    }

    redeemPoints(points) {
        if (points > this._total_points - this._redeemed_points) {
            console.log("Not enough points to redeem.");
            return;
        }
        this._redeemed_points += points;
        console.log(`${points} points redeemed.`);
    }

    viewDashboard() {
        console.log(`Student Dashboard:\nTotal Points: ${this._total_points}\nRedeemed: ${this._redeemed_points}\nGrade Avg: ${this._grade_average}`);
    }

    raiseDispute(reason) {
        console.log(`Dispute raised by Student ${this._student_id}: ${reason}`);
    }
}