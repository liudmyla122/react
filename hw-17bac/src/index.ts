// Задание 1: Типизация функции с несколькими параметрами
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  const total = price * quantity;
  const discountAmount = total * (discount / 100);
  return total - discountAmount;
}

// Задание 2: Использование Union типов
let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === 'string') {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id * 10}`);
  }
}

// Задание 3: Объявление и типизация массивов объектов
type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { orderId: 'ORD001', amount: 100, status: 'pending' },
  { orderId: 'ORD002', amount: 200, status: 'shipped' },
  { orderId: 'ORD003', amount: 150, status: 'delivered' },
  { orderId: 'ORD004', amount: 300, status: 'pending' },
  { orderId: 'ORD005', amount: 250, status: 'shipped' }
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter(order => order.status === status);
}

// Задание 4: Работа с кортежами и объектами
type ProductInfo = [string, number, number]; // [название, цена, количество]

interface Inventory {
  [productName: string]: number;
}

function updateStock(inventory: Inventory, productInfo: ProductInfo): Inventory {
  const [productName, , quantityChange] = productInfo;
  const updatedInventory = { ...inventory };
  
  if (updatedInventory[productName] !== undefined) {
    updatedInventory[productName] += quantityChange;
  } else {
    updatedInventory[productName] = quantityChange;
  }
  
  return updatedInventory;
}

// Примеры использования
console.log('=== Задание 1 ===');
console.log('Общая стоимость (100 * 5, скидка 10%):', calculateTotal(100, 5, 10));
console.log('Общая стоимость (100 * 5, без скидки):', calculateTotal(100, 5));

console.log('\n=== Задание 2 ===');
id = 'abc123';
displayId(id);
id = 42;
displayId(id);

console.log('\n=== Задание 3 ===');
console.log('Заказы со статусом "pending":', filterOrdersByStatus(orders, 'pending'));
console.log('Заказы со статусом "shipped":', filterOrdersByStatus(orders, 'shipped'));
console.log('Заказы со статусом "delivered":', filterOrdersByStatus(orders, 'delivered'));

console.log('\n=== Задание 4 ===');
const inventory: Inventory = {
  'Товар A': 50,
  'Товар B': 30
};
const productInfo: ProductInfo = ['Товар A', 100, 20]; // добавить 20 к Товару A
const newProductInfo: ProductInfo = ['Товар C', 200, 15]; // новый товар
console.log('Исходный inventory:', inventory);
console.log('Обновленный inventory (добавлено 20 к Товару A):', updateStock(inventory, productInfo));
console.log('Обновленный inventory (добавлен новый товар C):', updateStock(inventory, newProductInfo));

