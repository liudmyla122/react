// Задание 1: Объединение и пересечение типов

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

// Тип AdminUser объединяет свойства обоих типов
type AdminUser = Admin & User;

// Создаем объект типа AdminUser
const adminUser: AdminUser = {
  name: "Иван Иванов",
  permissions: ["read", "write", "delete"],
  email: "ivan@example.com"
};

console.log("=== Задание 1 ===");
console.log("AdminUser:", adminUser);
