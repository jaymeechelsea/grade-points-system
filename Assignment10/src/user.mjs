export default class User {
  constructor(user_id, name, email, password_hash, role = 'user') {
    this._user_id = user_id;
    this._name = name;
    this._email = email;
    this._password_hash = password_hash;
    this._role = role;
    this._is_verified = false;
    this._created_at = new Date();
  }

  register() {
    console.log(`${this._name} registered successfully.`);
  }

  login() {
    console.log(`${this._name} logged in.`);
  }

  verifyEmail() {
    this._is_verified = true;
    console.log(`${this._email} is verified.`);
  }

  updateProfile(name, email) {
    this._name = name;
    this._email = email;
    console.log(`Profile updated for ${this._user_id}`);
  }

  changePassword(newHash) {
    this._password_hash = newHash;
    console.log(`Password updated for ${this._user_id}`);
  }
}