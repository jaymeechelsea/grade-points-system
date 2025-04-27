import { describe, test, expect } from '@jest/globals';
import InMemoryPointRepository from '../repositories/inMemory/InMemoryPointRepository.mjs';

describe('InMemoryPointRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryPointRepository();
    });

    test('should save a new point record', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        repository.save(point);
        const savedPoint = repository.findById('point_1');
        expect(savedPoint).toEqual(point);
    });

    test('should update an existing point record', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        repository.save(point);

        const updatedPoint = { point_id: 'point_1', student_id: 'student_1', points_earned: 70, points_redeemed: 30, created_at: new Date() };
        repository.save(updatedPoint);

        const foundUpdatedPoint = repository.findById('point_1');
        expect(foundUpdatedPoint.points_earned).toBe(70);
        expect(foundUpdatedPoint.points_redeemed).toBe(30);
    });

    test('should find a point record by ID', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        repository.save(point);

        const foundPoint = repository.findById('point_1');
        expect(foundPoint).toEqual(point);
    });

    test('should return null for a non-existent point record', () => {
        const foundPoint = repository.findById('non_existent_id');
        expect(foundPoint).toBeNull();
    });

    test('should find all point records', () => {
        const point1 = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        const point2 = { point_id: 'point_2', student_id: 'student_2', points_earned: 100, points_redeemed: 50, created_at: new Date() };
        repository.save(point1);
        repository.save(point2);

        const allPoints = repository.findAll();
        expect(allPoints).toHaveLength(2);
        expect(allPoints).toEqual(expect.arrayContaining([point1, point2]));
    });

    test('should delete a point record by ID', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        repository.save(point);

        repository.delete('point_1');
        const deletedPoint = repository.findById('point_1');
        expect(deletedPoint).toBeNull();
    });

    test('should throw an error when deleting a non-existent point record', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Point with ID non_existent_id not found.');
    });
});