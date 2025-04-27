import { describe, test, expect } from '@jest/globals';
import InMemoryRedemptionRepository from '../repositories/inMemory/InMemoryRedemptionRepository.mjs';

describe('InMemoryRedemptionRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryRedemptionRepository();
    });

    test('should save a new redemption', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 30, reward: 'Gift Card', created_at: new Date() };
        repository.save(redemption);
        const savedRedemption = repository.findById('redemption_1');
        expect(savedRedemption).toEqual(redemption);
    });

    test('should update an existing redemption', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 30, reward: 'Gift Card', created_at: new Date() };
        repository.save(redemption);

        const updatedRedemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 50, reward: 'Voucher', created_at: new Date() };
        repository.save(updatedRedemption);

        const foundUpdatedRedemption = repository.findById('redemption_1');
        expect(foundUpdatedRedemption.points_redeemed).toBe(50);
        expect(foundUpdatedRedemption.reward).toBe('Voucher');
    });

    test('should find a redemption by ID', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 30, reward: 'Gift Card', created_at: new Date() };
        repository.save(redemption);

        const foundRedemption = repository.findById('redemption_1');
        expect(foundRedemption).toEqual(redemption);
    });

    test('should return null for a non-existent redemption', () => {
        const foundRedemption = repository.findById('non_existent_id');
        expect(foundRedemption).toBeNull();
    });

    test('should find all redemptions', () => {
        const redemption1 = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 30, reward: 'Gift Card', created_at: new Date() };
        const redemption2 = { redemption_id: 'redemption_2', student_id: 'student_2', points_redeemed: 50, reward: 'Voucher', created_at: new Date() };
        repository.save(redemption1);
        repository.save(redemption2);

        const allRedemptions = repository.findAll();
        expect(allRedemptions).toHaveLength(2);
        expect(allRedemptions).toEqual(expect.arrayContaining([redemption1, redemption2]));
    });

    test('should delete a redemption by ID', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 30, reward: 'Gift Card', created_at: new Date() };
        repository.save(redemption);

        repository.delete('redemption_1');
        const deletedRedemption = repository.findById('redemption_1');
        expect(deletedRedemption).toBeNull();
    });

    test('should throw an error when deleting a non-existent redemption', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Redemption with ID non_existent_id not found.');
    });
});