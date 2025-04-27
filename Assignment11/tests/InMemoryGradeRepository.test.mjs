import { describe, test, expect } from '@jest/globals';
import InMemoryGradeRepository from '../repositories/inMemory/InMemoryGradeRepository.mjs';

describe('InMemoryGradeRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryGradeRepository();
    });

    test('should save a new grade', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        repository.save(grade);
        const savedGrade = repository.findById('grade_1');
        expect(savedGrade).toEqual(grade);
    });

    test('should update an existing grade', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        repository.save(grade);

        const updatedGrade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'B', created_at: new Date() };
        repository.save(updatedGrade);

        const foundUpdatedGrade = repository.findById('grade_1');
        expect(foundUpdatedGrade.grade_value).toBe('B');
    });

    test('should find a grade by ID', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        repository.save(grade);

        const foundGrade = repository.findById('grade_1');
        expect(foundGrade).toEqual(grade);
    });

    test('should return null for a non-existent grade', () => {
        const foundGrade = repository.findById('non_existent_id');
        expect(foundGrade).toBeNull();
    });

    test('should find all grades', () => {
        const grade1 = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        const grade2 = { grade_id: 'grade_2', student_id: 'student_2', course_id: 'course_2', grade_value: 'B', created_at: new Date() };
        repository.save(grade1);
        repository.save(grade2);

        const allGrades = repository.findAll();
        expect(allGrades).toHaveLength(2);
        expect(allGrades).toEqual(expect.arrayContaining([grade1, grade2]));
    });

    test('should delete a grade by ID', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        repository.save(grade);

        repository.delete('grade_1');
        const deletedGrade = repository.findById('grade_1');
        expect(deletedGrade).toBeNull();
    });

    test('should throw an error when deleting a non-existent grade', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Grade with ID non_existent_id not found.');
    });
});