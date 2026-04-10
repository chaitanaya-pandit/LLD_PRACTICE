interface TaxCalculator {
    getTaxRate(): number;

    calculateTax(amount: number): number;
}


abstract class BaseTaxCalculator implements TaxCalculator {

    abstract getTaxRate(): number;

    calculateTax(amount: number): number {
        return amount * this.getTaxRate(); 
    }
}

class USOrderProcessor extends BaseTaxCalculator {
    getTaxRate(): number {
        return 0.10;
    }
}

class EUOrderProcessor extends BaseTaxCalculator {
    getTaxRate(): number {
        return 0.20;
    }
}

class UKOrderProcessor extends BaseTaxCalculator {
    getTaxRate(): number {
        return 0.15;
    }
}

function processOrder(amount: number, calculator: TaxCalculator) {
    const tax = calculator.calculateTax(amount);
    const total = amount + tax;

    console.log(`Subtotal: ${amount}`);
    console.log(`Tax: ${tax}`);
    console.log(`Total: ${total}`);
}

