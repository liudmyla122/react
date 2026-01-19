"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    class LoanCalculator {
        static calculateMonthlyPayment(principal, annualRate, months) {
            if (months === 0)
                return principal;
            if (annualRate === 0)
                return principal / months;
            const monthlyRate = annualRate / 100 / 12;
            const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
            return Math.round(payment * 100) / 100;
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        static calculateTax(income, taxRate) {
            if (income < 0)
                return 0;
            const tax = income * (taxRate / 100);
            return Math.round(tax * 100) / 100;
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
