/**
 * Пространство имен для финансовых операций
 */
export namespace Finance {
  /**
   * Класс для расчета ежемесячных платежей по кредиту (аннуитет)
   */
  export class LoanCalculator {
    /**
     * Рассчитывает ежемесячный платеж по кредиту по формуле аннуитета
     * @param principal - основная сумма кредита
     * @param annualRate - годовая процентная ставка (в процентах, например 12 для 12%)
     * @param months - количество месяцев
     * @returns ежемесячный платеж
     */
    static calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
      if (months === 0) return principal;
      if (annualRate === 0) return principal / months;
      
      const monthlyRate = annualRate / 100 / 12;
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);
      
      return Math.round(payment * 100) / 100; // округление до 2 знаков после запятой
    }
  }

  /**
   * Класс для расчета налога на доход
   */
  export class TaxCalculator {
    /**
     * Рассчитывает налог на доход
     * @param income - доход
     * @param taxRate - ставка налога (в процентах, например 13 для 13%)
     * @returns сумма налога
     */
    static calculateTax(income: number, taxRate: number): number {
      if (income < 0) return 0;
      const tax = income * (taxRate / 100);
      return Math.round(tax * 100) / 100; // округление до 2 знаков после запятой
    }
  }
}
