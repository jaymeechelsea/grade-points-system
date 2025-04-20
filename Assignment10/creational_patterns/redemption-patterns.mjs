import Redemption from '../src/redemption.js';

// SimpleFactory
export default class SimpleRedemptionFactory {
    static createRedemption(redemption_id, student_id, points_redeemed, monetary_value, redeemed_at = new Date()) {
        return new Redemption(redemption_id, student_id, points_redeemed, monetary_value, redeemed_at);
    }
}

// FactoryMethod
export class RedemptionFactory {
    static createRedemption(redemption_id, student_id, points_redeemed, monetary_value, redeemed_at = new Date()) {
        return new Redemption(redemption_id, student_id, points_redeemed, monetary_value, redeemed_at);
    }
}

// AbstractFactory
export class RedemptionAbstractFactory {
    static createFactory(type) {
        switch (type) {
            case 'giftcard':
                return new GiftCardRedemptionFactory();
            default:
                throw new Error('No factory found for this type.');
        }
    }
}

// Builder
export class RedemptionBuilder {
    constructor() {
        this._redemption = {};
    }

    setRedemptionId(redemption_id) {
        this._redemption.redemption_id = redemption_id;
        return this;
    }

    setStudentId(student_id) {
        this._redemption.student_id = student_id;
        return this;
    }

    setPointsRedeemed(points_redeemed) {
        this._redemption.points_redeemed = points_redeemed;
        return this;
    }

    setMonetaryValue(monetary_value) {
        this._redemption.monetary_value = monetary_value;
        return this;
    }

    setRedeemedAt(redeemed_at) {
        this._redemption.redeemed_at = redeemed_at;
        return this;
    }

    build() {
        return new Redemption(
            this._redemption.redemption_id,
            this._redemption.student_id,
            this._redemption.points_redeemed,
            this._redemption.monetary_value,
            this._redemption.redeemed_at
        );
    }
}

// Prototype
export class RedemptionPrototype {
    constructor(redemption) {
        this.redemption = redemption;
    }

    clone() {
        return new RedemptionPrototype(Object.assign({}, this.redemption));
    }
}

// Singleton
export class RedemptionSingleton {
    static getInstance() {
        if (!RedemptionSingleton.instance) {
            RedemptionSingleton.instance = new Redemption();
        }
        return RedemptionSingleton.instance;
    }
}