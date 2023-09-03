
describe("Monthly Payment Calculator", () => {
  it('should calculate the monthly rate correctly', function () {
    // ...
      const values1 = {
        amount: 12000,
        years: 4,
        rate: 3
      }
      const values2 = {
        amount: 1000,
        years: 2,
        rate: 6.5
      }
      
      calculateMonthlyPayment(values1);
      expect(calculateMonthlyPayment(values1)).toEqual(3000.07);
      expect(calculateMonthlyPayment(values2)).toEqual(541.68);
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
    const values1 = {
      amount: 100,
      years: 1,
      rate: 4
    }
    const values2 = {
      amount: 900,
      years: 2,
      rate: 12
    }
    
    calculateMonthlyPayment(values1);
    expect(calculateMonthlyPayment(values1)).toEqual(34.42);
    expect(calculateMonthlyPayment(values2)).toEqual(900.00);
  });
  
  /// etc
  it('should handle small principle amounts', function () {
    // ...
      const values1 = {
        amount: 100,
        years: 4,
        rate: 1.5
      }      
      calculateMonthlyPayment(values1);
      expect(calculateMonthlyPayment(values1)).toEqual(12.54);
  });

  it('should calculate large principle amounts and rates greater than 12 correctly', function () {
    // ...
      const values1 = {
        amount: 120000,
        years: 4,
        rate: 16
      }

      calculateMonthlyPayment(values1);
      expect(calculateMonthlyPayment(values1)).toEqual(160000);
  });
})

