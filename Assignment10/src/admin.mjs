export default class Admin {
    constructor(admin_id, user_id, permissions = []) {
        this._admin_id = admin_id;
        this._user_id = user_id;
        this._permissions = permissions;
    }

    assignRoles(userId, role) {
        console.log(`Assigned role '${role}' to user ${userId}`);
    }

    setRedemptionRate(rate) {
        console.log(`Redemption rate set to ${rate} points per unit.`);
    }

    manageUsers() {
        console.log(`Managing users...`);
    }

    generateReports() {
        console.log(`Generating reports for admin ${this._admin_id}...`);
    }
}