import Admin from '../src/admin.js';

// SimpleFactory
export default class SimpleAdminFactory {
    static createAdmin(admin_id, user_id, permissions = []) {
        return new Admin(admin_id, user_id, permissions);
    }
}

// FactoryMethod
export class FactoryAdmin {
    constructor(admin_id, user_id, permissions = []) {
        this.admin_id = admin_id;
        this.user_id = user_id;
        this.permissions = permissions;
    }

    createAdmin() {
        return new Admin(this.admin_id, this.user_id, this.permissions);
    }
}

// AbstractFactory
class AdminFactory {
    createAdmin(admin_id, user_id, permissions = []) {
        throw new Error('This method should be overridden.');
    }
}

export class SuperAdminFactory extends AdminFactory {
    createAdmin(admin_id, user_id, permissions = []) {
        return new Admin(admin_id, user_id, permissions);
    }
}

// Builder
export class AdminBuilder {
    constructor() {
        this.admin = new Admin();
    }

    setAdminId(admin_id) {
        this.admin.admin_id = admin_id;
        return this;
    }

    setUserId(user_id) {
        this.admin.user_id = user_id;
        return this;
    }

    setPermissions(permissions) {
        this.admin.permissions = permissions;
        return this;
    }

    build() {
        return this.admin;
    }
}

// Prototype
export class AdminPrototype {
    constructor(admin) {
        this.admin = admin;
    }

    clone() {
        return new AdminPrototype({ ...this.admin });
    }
}

// Singleton
export class AdminSingleton {
    constructor() {
        if (!AdminSingleton.instance) {
            this.admins = [];
            AdminSingleton.instance = this;
        }
        return AdminSingleton.instance;
    }

    addAdmin(admin) {
        this.admins.push(admin);
    }

    getAdmins() {
        return this.admins;
    }
}