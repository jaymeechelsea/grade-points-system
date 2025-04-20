export default class RedemptionRule {
    constructor(rule_id, conversion_rate, updated_by, effective_from = new Date(), created_at = new Date()) {
        this._rule_id = rule_id;
        this._conversion_rate = conversion_rate;
        this._updated_by = updated_by;
        this._effective_from = effective_from;
        this._created_at = created_at;
    }

    setRate(newRate) {
        this._conversion_rate = newRate;
        console.log(`Conversion rate updated to ${newRate} by ${this._updated_by}`);
    }

    getCurrentRate() {
        return this._conversion_rate;
    }
}