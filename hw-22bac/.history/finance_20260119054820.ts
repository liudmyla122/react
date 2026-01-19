
export namespace Finance {
 
  export class LoanCalculator {
   
    static calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
      if (months === 0) return principal;
      if (annualRate === 0) return principal / months;
      
      const monthlyRate = annualRate / 100 / 12;
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);
      
      return Math.round(payment * 100) / 100; 
    }
  }

 
  export class TaxCalculator {
   
    static calculateTax(income: number, taxRate: number): number {
      if (income < 0) return 0;
      const tax = income * (taxRate / 100);
      return Math.round(tax * 100) / 100; 
    }
  }
}
