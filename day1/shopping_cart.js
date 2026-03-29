
class Product {
  constructor(id, name, price, stock) {
    this.id = id;           
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  applyDiscount(percent) {
    if (percent < 0 || percent > 100) throw new Error("Invalid percent");
    this.price = this.price - (this.price * percent / 100);
    return this;  
  }

  reduceStock(quantity) {
    if (quantity > this.stock) throw new Error("Insufficient stock");
    this.stock -= quantity;
    return this;
  }
}

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }

  
  updateQuantity(newQty) {
    if (newQty <= 0) throw new Error("Quantity must be positive");
    this.quantity = newQty;
    return this;
  }
}


class ShoppingCart {
  constructor() {
    this.items = [];      
    this.couponCode = null;
    this.discountPercent = 0;
  }

  addItem(product, quantity) {
    
    if (quantity > product.stock) {
      throw new Error(`Only ${product.stock} items available`);
    }

    
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.updateQuantity(existing.quantity + quantity);
    } else {
      const cartItem = new CartItem(product, quantity);
      this.items.push(cartItem);
    }
    return this;  
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    return this;
  }

  getTotal() {
    let total = this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
    
    if (this.discountPercent > 0) {
      total = total - (total * this.discountPercent / 100);
    }
    return total;
  }

  applyCoupon(code) {
    
    if (code === "SAVE10") {
      this.discountPercent = 10;
    } else if (code === "SAVE20") {
      this.discountPercent = 20;
    } else {
      throw new Error("Invalid coupon");
    }
    return this;
  }

  checkout() {
    if (this.items.length === 0) throw new Error("Cart is empty");
    

    for (let item of this.items) {
      item.product.reduceStock(item.quantity);
    }
    
    const total = this.getTotal();
    
    this.items = [];
    this.discountPercent = 0;
    
    return { message: "Checkout successful", total };
  }
}


const apple = new Product(1, "Apple", 50, 100);
const mango = new Product(2, "Mango", 80, 30);

const cart = new ShoppingCart();
cart.addItem(apple, 3)
    .addItem(mango, 2)
    .applyCoupon("SAVE10");

console.log("Total:", cart.getTotal());      
console.log(cart.checkout());                
console.log(apple.stock);                    