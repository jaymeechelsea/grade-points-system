export class AdminEntity {
    constructor(admin_id, user_id, permissions, created_at) {
        this.admin_id = admin_id;
        this.user_id = user_id;
        this.permissions = permissions;
        this.created_at = created_at;
    }
}