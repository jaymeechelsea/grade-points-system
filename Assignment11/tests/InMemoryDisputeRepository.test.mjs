import { describe, test, expect } from '@jest/globals';
import InMemoryDisputeRepository from '../repositories/inMemory/InMemoryDisputeRepository.mjs';

describe('InMemoryDisputeRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryDisputeRepository();
    });

    test('should save a new dispute', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        repository.save(dispute);
        const savedDispute = repository.findById('dispute_1');
        expect(savedDispute).toEqual(dispute);
    });

    test('should update an existing dispute', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        repository.save(dispute);

        const updatedDispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Grade corrected', status: 'resolved', created_at: new Date(), resolved_at: new Date() };
        repository.save(updatedDispute);

        const foundUpdatedDispute = repository.findById('dispute_1');
        expect(foundUpdatedDispute.status).toBe('resolved');
        expect(foundUpdatedDispute.description).toBe('Grade corrected');
    });

    test('should find a dispute by ID', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        repository.save(dispute);

        const foundDispute = repository.findById('dispute_1');
        expect(foundDispute).toEqual(dispute);
    });

    test('should return null for a non-existent dispute', () => {
        const foundDispute = repository.findById('non_existent_id');
        expect(foundDispute).toBeNull();
    });

    test('should find all disputes', () => {
        const dispute1 = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        const dispute2 = { dispute_id: 'dispute_2', student_id: 'student_2', description: 'Points not updated', status: 'pending', created_at: new Date(), resolved_at: null };
        repository.save(dispute1);
        repository.save(dispute2);

        const allDisputes = repository.findAll();
        expect(allDisputes).toHaveLength(2);
        expect(allDisputes).toEqual(expect.arrayContaining([dispute1, dispute2]));
    });

    test('should delete a dispute by ID', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        repository.save(dispute);

        repository.delete('dispute_1');
        const deletedDispute = repository.findById('dispute_1');
        expect(deletedDispute).toBeNull();
    });

    test('should throw an error when deleting a non-existent dispute', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Dispute with ID non_existent_id not found.');
    });
});