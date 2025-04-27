import { describe, test, expect } from '@jest/globals';
import InMemoryEducatorRepository from '../repositories/inMemory/InMemoryEducatorRepository.mjs';

describe('InMemoryEducatorRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryEducatorRepository();
    });

    test('should save a new educator', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Math', courses: ['Math101'], created_at: new Date() };
        repository.save(educator);
        const savedEducator = repository.findById('educator_1');
        expect(savedEducator).toEqual(educator);
    });

    test('should update an existing educator', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Math', courses: ['Math101'], created_at: new Date() };
        repository.save(educator);

        const updatedEducator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Science', courses: ['Sci101'], created_at: new Date() };
        repository.save(updatedEducator);

        const foundUpdatedEducator = repository.findById('educator_1');
        expect(foundUpdatedEducator.department).toBe('Science');
        expect(foundUpdatedEducator.courses).toContain('Sci101');
    });

    test('should find an educator by ID', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Math', courses: ['Math101'], created_at: new Date() };
        repository.save(educator);

        const foundEducator = repository.findById('educator_1');
        expect(foundEducator).toEqual(educator);
    });

    test('should return null for a non-existent educator', () => {
        const foundEducator = repository.findById('non_existent_id');
        expect(foundEducator).toBeNull();
    });

    test('should find all educators', () => {
        const educator1 = { educator_id: 'educator_1', user_id: 'user_1', department: 'Math', courses: ['Math101'], created_at: new Date() };
        const educator2 = { educator_id: 'educator_2', user_id: 'user_2', department: 'Science', courses: ['Sci101'], created_at: new Date() };
        repository.save(educator1);
        repository.save(educator2);

        const allEducators = repository.findAll();
        expect(allEducators).toHaveLength(2);
        expect(allEducators).toEqual(expect.arrayContaining([educator1, educator2]));
    });

    test('should delete an educator by ID', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Math', courses: ['Math101'], created_at: new Date() };
        repository.save(educator);

        repository.delete('educator_1');
        const deletedEducator = repository.findById('educator_1');
        expect(deletedEducator).toBeNull();
    });

    test('should throw an error when deleting a non-existent educator', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Educator with ID non_existent_id not found.');
    });
});