class Product {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Catalog {
    private products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    findByName(name: string): Product | undefined {
        for (const prod of this.products) {  
            if (prod.name === name) {
                return prod;
            }
        }
        return undefined;
    }
}

class Cart {
    private products: Product[] = [];

    addItem(product: Product): void {
        this.products.push(product);
    }

    clearCart(): void {
        this.products = [];
    }

    getTotal(): number {
        const total = this.products.reduce((sum, item) => {
            return sum + item.price;   
        }, 0);

        return total;
    }
}

class Customer {
    public name: string;
    private cart: Cart;

    constructor(name: string) {
        this.name = name;
        this.cart = new Cart(); //  Composition
    }

    addToCart(product: Product) {
        this.cart.addItem(product);
    }

    checkout() {
        console.log("Total:", this.cart.getTotal());
        this.cart.clearCart();
    }
}