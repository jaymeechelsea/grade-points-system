import { describe, test, expect } from '@jest/globals';
import InMemoryAdminRepository from '../repositories/inMemory/InMemoryAdminRepository.mjs';

describe('InMemoryAdminRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new InMemoryAdminRepository();
    });

    test('should save a new admin', () => {
        const admin = { admin_id: 'admin_1', name: 'John Doe', permissions: ['manage_users'] };
        repository.save(admin);
        const savedAdmin = repository.findById('admin_1');
        expect(savedAdmin).toEqual(admin);
    });

    test('should update an existing admin', () => {
        const admin = { admin_id: 'admin_1', name: 'John Doe', permissions: ['manage_users'] };
        repository.save(admin);

        const updatedAdmin = { admin_id: 'admin_1', name: 'John Smith', permissions: ['manage_users', 'view_reports'] };
        repository.save(updatedAdmin);

        const foundUpdatedAdmin = repository.findById('admin_1');
        expect(foundUpdatedAdmin.name).toBe('John Smith');
        expect(foundUpdatedAdmin.permissions).toContain('view_reports');
    });

    test('should find an admin by ID', () => {
        const admin = { admin_id: 'admin_1', name: 'John Doe', permissions: ['manage_users'] };
        repository.save(admin);

        const foundAdmin = repository.findById('admin_1');
        expect(foundAdmin).toEqual(admin);
    });

    test('should return null for a non-existent admin', () => {
        const foundAdmin = repository.findById('non_existent_id');
        expect(foundAdmin).toBeNull();
    });

    test('should find all admins', () => {
        const admin1 = { admin_id: 'admin_1', name: 'John Doe', permissions: ['manage_users'] };
        const admin2 = { admin_id: 'admin_2', name: 'Jane Doe', permissions: ['view_reports'] };
        repository.save(admin1);
        repository.save(admin2);

        const allAdmins = repository.findAll();
        expect(allAdmins).toHaveLength(2);
        expect(allAdmins).toEqual(expect.arrayContaining([admin1, admin2]));
    });

    test('should delete an admin by ID', () => {
        const admin = { admin_id: 'admin_1', name: 'John Doe', permissions: ['manage_users'] };
        repository.save(admin);

        repository.delete('admin_1');
        const deletedAdmin = repository.findById('admin_1');
        expect(deletedAdmin).toBeNull();
    });

    test('should throw an error when deleting a non-existent admin', () => {
        expect(() => repository.delete('non_existent_id')).toThrow('Admin with ID non_existent_id not found.');
    });
});