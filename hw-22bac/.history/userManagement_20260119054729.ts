/**
 * Пространство имен для управления пользователями
 */
export namespace UserManagement {
  /**
   * Вложенное пространство имен для администраторов
   */
  export namespace Admin {
    /**
     * Класс для работы с административными пользователями
     */
    export class AdminUser {
      private _name: string;
      private _email: string;
      private _isSuperAdmin: boolean;

      constructor(name: string, email: string, isSuperAdmin: boolean = false) {
        this._name = name;
        this._email = email;
        this._isSuperAdmin = isSuperAdmin;
      }

      /**
       * Получить имя администратора
       */
      get name(): string {
        return this._name;
      }

      /**
       * Получить email администратора
       */
      get email(): string {
        return this._email;
      }

      /**
       * Проверить, является ли администратор супер-администратором
       */
      get isSuperAdmin(): boolean {
        return this._isSuperAdmin;
      }

      /**
       * Установить права супер-администратора
       * @param value - новое значение прав
       */
      setSuperAdmin(value: boolean): void {
        this._isSuperAdmin = value;
      }

      /**
       * Изменить имя администратора
       * @param newName - новое имя
       */
      changeName(newName: string): void {
        this._name = newName;
      }

      /**
       * Изменить email администратора
       * @param newEmail - новый email
       */
      changeEmail(newEmail: string): void {
        this._email = newEmail;
      }

      /**
       * Получить информацию об администраторе
       */
      getInfo(): string {
        return `Администратор: ${this._name} (${this._email}), Супер-админ: ${this._isSuperAdmin ? 'Да' : 'Нет'}`;
      }
    }
  }
}
