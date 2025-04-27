import { describe, test, expect } from '@jest/globals';
import InMemoryUserRepository from '../repositories/inMemory/InMemoryUserRepository.mjs';

describe('InMemoryUserRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryUserRepository();
    });

    test('should save a new user', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        repository.save(user);
        const savedUser = repository.findById('user_1');
        expect(savedUser).toEqual(user);
    });

    test('should update an existing user', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        repository.save(user);

        const updatedUser = { user_id: 'user_1', name: 'John Smith', email: 'johnsmith@example.com', password_hash: 'new_hashed_password', role: 'user', is_verified: false, created_at: new Date() };
        repository.save(updatedUser);

        const foundUpdatedUser = repository.findById('user_1');
        expect(foundUpdatedUser.name).toBe('John Smith');
        expect(foundUpdatedUser.email).toBe('johnsmith@example.com');
    });

    test('should find a user by ID', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        repository.save(user);

        const foundUser = repository.findById('user_1');
        expect(foundUser).toEqual(user);
    });

    test('should return null for a non-existent user', () => {
        const foundUser = repository.findById('non_existent_id');
        expect(foundUser).toBeNull();
    });

    test('should find all users', () => {
        const user1 = { user_id: 'user_1', name: 'John Doe', email: 'john@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        const user2 = { user_id: 'user_2', name: 'Jane Doe', email: 'jane@example.com', password_hash: 'hashed_password', role: 'user', is_verified: false, created_at: new Date() };
        repository.save(user1);
        repository.save(user2);

        const allUsers = repository.findAll();
        expect(allUsers).toHaveLength(2);
        expect(allUsers).toEqual(expect.arrayContaining([user1, user2]));
    });

    test('should delete a user by ID', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        repository.save(user);

        repository.delete('user_1');
        const deletedUser = repository.findById('user_1');
        expect(deletedUser).toBeNull();
    });

    test('should throw an error when deleting a non-existent user', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('User with ID non_existent_id not found.');
    });
});