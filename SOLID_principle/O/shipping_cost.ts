interface shippingstrategy{
    calculator(weight:number):number;
}
class standardshipping implements shippingstrategy{
    calculator(weight:number):number{
        const cost= 1000* weight
        return cost;

    }
}
class expressshipping implements shippingstrategy{
    calculator(weight:number):number{
         const cost= 1100* weight
        return cost;
        
    }
}
class overnightshipping implements shippingstrategy{
    calculator(weight:number):number{
        const cost= 1200* weight
        return cost;
        
    }
}
class internationalshipping implements shippingstrategy{
    calculator(weight:number):number{
        const cost= 2000* weight
        return cost;
    }
}
class shippingcostcalculator{
    private shipping:shippingstrategy;

    constructor(shippingstrategy:shippingstrategy){
        this.shipping=shippingstrategy
    }

    calculate(weight:number):number{
       return this.shipping.calculator(weight);
    }
}

const standard= new standardshipping();
const express= new expressshipping()

const calculator =new shippingcostcalculator(standard)
console.log(calculator.calculate(2))
