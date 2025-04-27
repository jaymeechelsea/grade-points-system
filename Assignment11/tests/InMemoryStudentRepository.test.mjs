import { describe, test, expect } from '@jest/globals';
import InMemoryStudentRepository from '../repositories/inMemory/InMemoryStudentRepository.mjs';

describe('InMemoryStudentRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryStudentRepository();
    });

    test('should save a new student', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5 };
        repository.save(student);
        const savedStudent = repository.findById('student_1');
        expect(savedStudent).toEqual(student);
    });

    test('should update an existing student', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5 };
        repository.save(student);

        const updatedStudent = { student_id: 'student_1', user_id: 'user_1', total_points: 120, redeemed_points: 30, grade_average: 90.0 };
        repository.save(updatedStudent);

        const foundUpdatedStudent = repository.findById('student_1');
        expect(foundUpdatedStudent.total_points).toBe(120);
        expect(foundUpdatedStudent.grade_average).toBe(90.0);
    });

    test('should find a student by ID', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5 };
        repository.save(student);

        const foundStudent = repository.findById('student_1');
        expect(foundStudent).toEqual(student);
    });

    test('should return null for a non-existent student', () => {
        const foundStudent = repository.findById('non_existent_id');
        expect(foundStudent).toBeNull();
    });

    test('should find all students', () => {
        const student1 = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5 };
        const student2 = { student_id: 'student_2', user_id: 'user_2', total_points: 200, redeemed_points: 50, grade_average: 90.0 };
        repository.save(student1);
        repository.save(student2);

        const allStudents = repository.findAll();
        expect(allStudents).toHaveLength(2);
        expect(allStudents).toEqual(expect.arrayContaining([student1, student2]));
    });

    test('should delete a student by ID', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5 };
        repository.save(student);

        repository.delete('student_1');
        const deletedStudent = repository.findById('student_1');
        expect(deletedStudent).toBeNull();
    });

    test('should throw an error when deleting a non-existent student', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Student with ID non_existent_id not found.');
    });
});