"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            constructor(name, email, isSuperAdmin = false) {
                this._name = name;
                this._email = email;
                this._isSuperAdmin = isSuperAdmin;
            }
            get name() {
                return this._name;
            }
            get email() {
                return this._email;
            }
            get isSuperAdmin() {
                return this._isSuperAdmin;
            }
            setSuperAdmin(value) {
                this._isSuperAdmin = value;
            }
            changeName(newName) {
                this._name = newName;
            }
            changeEmail(newEmail) {
                this._email = newEmail;
            }
            getInfo() {
                return `Администратор: ${this._name} (${this._email}), Супер-админ: ${this._isSuperAdmin ? 'Да' : 'Нет'}`;
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (exports.UserManagement = UserManagement = {}));
