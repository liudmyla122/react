export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      private _name: string
      private _email: string
      private _isSuperAdmin: boolean

      constructor(name: string, email: string, isSuperAdmin: boolean = false) {
        this._name = name
        this._email = email
        this._isSuperAdmin = isSuperAdmin
      }

      get name(): string {
        return this._name
      }

      get email(): string {
        return this._email
      }

      get isSuperAdmin(): boolean {
        return this._isSuperAdmin
      }

      setSuperAdmin(value: boolean): void {
        this._isSuperAdmin = value
      }

      changeName(newName: string): void {
        this._name = newName
      }

      changeEmail(newEmail: string): void {
        this._email = newEmail
      }

      getInfo(): string {
        return `Администратор: ${this._name} (${this._email}), Супер-админ: ${
          this._isSuperAdmin ? 'Да' : 'Нет'
        }`
      }
    }
  }
}
