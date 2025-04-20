import User from '../src/user.mjs';

// SimpleFactory
export class SimpleUserFactory {
    static createUser(user_id, name, email, password_hash, role = 'user') {
        return new User(user_id, name, email, password_hash, role);
    }
}

// FactoryMethod
class UserFactory {
    createUser(user_id, name, email, password_hash) {
        throw new Error("This method should be overridden.");
    }
}

export class StudentUserFactory extends UserFactory {
    createUser(user_id, name, email, password_hash) {
        return new User(user_id, name, email, password_hash, 'student');
    }
}

export class EducatorUserFactory extends UserFactory {
    createUser(user_id, name, email, password_hash) {
        return new User(user_id, name, email, password_hash, 'educator');
    }
}

export class AdminUserFactory extends UserFactory {
    createUser(user_id, name, email, password_hash) {
        return new User(user_id, name, email, password_hash, 'admin');
    }
}

// AbstractFactory
class AbstractUserFactory {
    createUser() {
        throw new Error("createUser method must be implemented");
    }
}

export class VerifiedUserFactory extends AbstractUserFactory {
    createUser(user_id, name, email, password_hash) {
        const user = new User(user_id, name, email, password_hash);
        user.verifyEmail();
        return user;
    }
}

export class GuestUserFactory extends AbstractUserFactory {
    createUser(user_id, name, email, password_hash) {
        return new User(user_id, name, email, password_hash, 'guest');
    }
}

// Builder
export class UserBuilder {
    constructor() {
        this._user = {};
    }

    setId(id) {
        this._user.user_id = id;
        return this;
    }

    setName(name) {
        this._user.name = name;
        return this;
    }

    setEmail(email) {
        this._user.email = email;
        return this;
    }

    setPasswordHash(hash) {
        this._user.password_hash = hash;
        return this;
    }

    setRole(role) {
        this._user.role = role;
        return this;
    }

    build() {
        return new User(
            this._user.user_id,
            this._user.name,
            this._user.email,
            this._user.password_hash,
            this._user.role || 'user'
        );
    }
}

// Prototype
export class UserPrototype {
    constructor(user) {
        this.user = user;
    }

    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this.user)),
            this.user
        );
    }
}

// Singleton
export default class UserSingleton {
    constructor() {
        if (UserSingleton.instance) {
            return UserSingleton.instance;
        }
        this.users = [];
        UserSingleton.instance = this;
    }

    addUser(user) {
        this.users.push(user);
    }

    getUsers() {
        return this.users;
    }
}

// Usage examples
// const singleton = new UserSingleton();
// const user1 = SimpleUserFactory.createUser("1", "Abdul", "abdul@email.com", "hashed_pw1");
// singleton.addUser(user1);

// const builder = new UserBuilder();
// const user2 = builder.setId("2").setName("Ruth").setEmail("ruth@email.com").setPasswordHash("hashed_pw2").build();
// singleton.addUser(user2);

// const adminFactory = new AdminUserFactory();
// const admin = adminFactory.createUser("3", "AdminUser", "admin@email.com", "admin_pw");
// singleton.addUser(admin);

// const prototype = new UserPrototype(user1);
// const userClone = prototype.clone();
// userClone._name = "ClonedAbdul";
// singleton.addUser(userClone);

// console.log(singleton.getUsers());