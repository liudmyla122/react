// Задание 4: Абстрактный класс Account

abstract class Account {
    protected balance: number = 0;

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(interestRate: number = 0.05) {
        super();
        this.interestRate = interestRate; // 5% по умолчанию
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Внесено на сберегательный счет: ${amount}. Баланс: ${this.balance}`);
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Снято со сберегательного счета: ${amount}. Баланс: ${this.balance}`);
        } else {
            console.log("Недостаточно средств на сберегательном счете");
        }
    }

    // Метод для начисления процентов
    addInterest(): void {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Начислены проценты: ${interest.toFixed(2)}. Новый баланс: ${this.balance.toFixed(2)}`);
    }
}

class CheckingAccount extends Account {
    private commissionRate: number;

    constructor(commissionRate: number = 0.01) {
        super();
        this.commissionRate = commissionRate; // 1% по умолчанию
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Внесено на текущий счет: ${amount}. Баланс: ${this.balance}`);
        }
    }

    withdraw(amount: number): void {
        if (amount > 0) {
            const commission = amount * this.commissionRate;
            const totalAmount = amount + commission;
            
            if (totalAmount <= this.balance) {
                this.balance -= totalAmount;
                console.log(`Снято с текущего счета: ${amount}, комиссия: ${commission.toFixed(2)}. Баланс: ${this.balance.toFixed(2)}`);
            } else {
                console.log("Недостаточно средств на текущем счете (с учетом комиссии)");
            }
        }
    }
}

// Проверка работы методов
console.log("\n=== Задание 4 ===");

const savingsAccount = new SavingsAccount(0.05); // 5% процентная ставка
console.log("\n--- Сберегательный счет ---");
savingsAccount.deposit(1000);
savingsAccount.withdraw(200);
savingsAccount.addInterest();

const checkingAccount = new CheckingAccount(0.01); // 1% комиссия
console.log("\n--- Текущий счет ---");
checkingAccount.deposit(1000);
checkingAccount.withdraw(200);
checkingAccount.withdraw(100);

export { Account, SavingsAccount, CheckingAccount };
