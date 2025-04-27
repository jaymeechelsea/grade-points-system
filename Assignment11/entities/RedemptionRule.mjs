export class RedemptionRuleEntity {
    constructor(rule_id, description, points_required, reward, created_at) {
        this.rule_id = rule_id; 
        this.description = description; 
        this.points_required = points_required; 
        this.reward = reward; 
        this.created_at = created_at; 
    }
}