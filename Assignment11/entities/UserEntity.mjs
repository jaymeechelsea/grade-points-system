export class UserEntity {
    constructor(user_id, name, email, password_hash, role, is_verified, created_at) {
        this.user_id = user_id;
        this.name = name;
        this.email = email; 
        this.password_hash = password_hash;
        this.role = role; 
        this.is_verified = is_verified;
        this.created_at = created_at;
    }
}