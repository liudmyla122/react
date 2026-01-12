// Задание 3: Интерфейс для функции с объектом

interface Product {
  name: string;
  price: number;
}

interface CalculateDiscountFunction {
  (product: Product, discount: number): number;
}

// Реализация функции calculateDiscount
const calculateDiscount: CalculateDiscountFunction = (product, discount) => {
  const discountAmount = product.price * (discount / 100);
  return product.price - discountAmount;
};

console.log("\n=== Задание 3 ===");
const product: Product = {
  name: "Ноутбук",
  price: 50000
};

const discountPercent = 15;
const newPrice = calculateDiscount(product, discountPercent);
console.log(`Продукт: ${product.name}`);
console.log(`Исходная цена: ${product.price} руб.`);
console.log(`Скидка: ${discountPercent}%`);
console.log(`Новая цена: ${newPrice} руб.`);
