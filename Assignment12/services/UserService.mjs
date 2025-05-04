export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    createUser(userEntity) {
        if (!userEntity.user_id || !userEntity.name || !userEntity.email || !userEntity.password_hash) {
            throw new Error('Missing required fields');
        }
        this.userRepository.save(userEntity);
    }

    getUserById(user_id) {
        return this.userRepository.findById(user_id);
    }

    getAllUsers() {
        return this.userRepository.findAll();
    }

    updateUser(user_id, updatedFields) {
        const user = this.userRepository.findById(user_id);
        if (!user) throw new Error('User not found');

        const updated = { ...user, ...updatedFields };
        this.userRepository.save(updated);
    }

    deleteUser(user_id) {
        this.userRepository.delete(user_id);
    }
}