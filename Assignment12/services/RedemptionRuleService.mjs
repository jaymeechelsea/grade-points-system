export class RedemptionRuleService {
    constructor(redemptionRuleRepository) {
        this.redemptionRuleRepository = redemptionRuleRepository;
    }

    createRedemptionRule(redemptionRuleEntity) {
        if (!redemptionRuleEntity.rule_id || !redemptionRuleEntity.description || redemptionRuleEntity.points_required === undefined || !redemptionRuleEntity.reward) {
            throw new Error('Missing required fields');
        }
        this.redemptionRuleRepository.save(redemptionRuleEntity);
    }

    getRedemptionRuleById(rule_id) {
        return this.redemptionRuleRepository.findById(rule_id);
    }

    getAllRedemptionRules() {
        return this.redemptionRuleRepository.findAll();
    }

    updateRedemptionRule(rule_id, updatedFields) {
        const redemptionRule = this.redemptionRuleRepository.findById(rule_id);
        if (!redemptionRule) throw new Error('Redemption rule not found');

        const updated = { ...redemptionRule, ...updatedFields };
        this.redemptionRuleRepository.save(updated);
    }

    deleteRedemptionRule(rule_id) {
        this.redemptionRuleRepository.delete(rule_id);
    }
}