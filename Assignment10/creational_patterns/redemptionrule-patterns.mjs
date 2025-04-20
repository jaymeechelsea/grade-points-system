import RedemptionRule from '../src/redemptionrule.mjs';

export default class SimpleRedemptionRuleFactory {
  static createRule(rule_id, conversion_rate, updated_by, effective_from = new Date(), created_at = new Date()) {
    return new RedemptionRule(rule_id, conversion_rate, updated_by, effective_from, created_at);
  }
}