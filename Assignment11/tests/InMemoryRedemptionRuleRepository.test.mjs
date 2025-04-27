import { describe, test, expect } from '@jest/globals';
import InMemoryRedemptionRuleRepository from '../repositories/inMemory/InMemoryRedemptionRuleRepository.mjs';

describe('InMemoryRedemptionRuleRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryRedemptionRuleRepository();
    });

    test('should save a new redemption rule', () => {
        const rule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        repository.save(rule);
        const savedRule = repository.findById('rule_1');
        expect(savedRule).toEqual(rule);
    });

    test('should update an existing redemption rule', () => {
        const rule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        repository.save(rule);

        const updatedRule = { rule_id: 'rule_1', description: 'Redeem 150 points for a $15 voucher', points_required: 150, reward: 'Voucher', created_at: new Date() };
        repository.save(updatedRule);

        const foundUpdatedRule = repository.findById('rule_1');
        expect(foundUpdatedRule.points_required).toBe(150);
        expect(foundUpdatedRule.description).toBe('Redeem 150 points for a $15 voucher');
    });

    test('should find a redemption rule by ID', () => {
        const rule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        repository.save(rule);

        const foundRule = repository.findById('rule_1');
        expect(foundRule).toEqual(rule);
    });

    test('should return null for a non-existent redemption rule', () => {
        const foundRule = repository.findById('non_existent_id');
        expect(foundRule).toBeNull();
    });

    test('should find all redemption rules', () => {
        const rule1 = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        const rule2 = { rule_id: 'rule_2', description: 'Redeem 200 points for a $20 voucher', points_required: 200, reward: 'Voucher', created_at: new Date() };
        repository.save(rule1);
        repository.save(rule2);

        const allRules = repository.findAll();
        expect(allRules).toHaveLength(2);
        expect(allRules).toEqual(expect.arrayContaining([rule1, rule2]));
    });

    test('should delete a redemption rule by ID', () => {
        const rule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        repository.save(rule);

        repository.delete('rule_1');
        const deletedRule = repository.findById('rule_1');
        expect(deletedRule).toBeNull();
    });

    test('should throw an error when deleting a non-existent redemption rule', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Redemption rule with ID non_existent_id not found.');
    });
});