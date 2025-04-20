export default class Redemption {
    constructor(redemption_id, student_id, points_redeemed, monetary_value, redeemed_at = new Date()) {
        this._redemption_id = redemption_id;
        this._student_id = student_id;
        this._points_redeemed = points_redeemed;
        this._monetary_value = monetary_value;
        this._redeemed_at = redeemed_at;
    }

    processRedemption() {
        console.log(`Processed redemption of ${this._points_redeemed} points worth $${this._monetary_value}.`);
    }

    generateReceipt() {
        return `Receipt - ID: ${this._redemption_id}, Student: ${this._student_id}, Points: ${this._points_redeemed}, Value: $${this._monetary_value}, Date: ${this._redeemed_at}`;
    }
}