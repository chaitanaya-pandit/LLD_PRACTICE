class orderprocessor {
    private orders: string[] = [];
    private inven: inventorymanager;
    private notify: notificationservice;

    constructor(inven: inventorymanager, notify: notificationservice) {
        this.inven = inven;
        this.notify = notify;
    }

    placeorder(productid: string, quantity: number, email: string) {

        if (!this.inven.checkStock(productid, quantity)) {
            return "Insufficient stock";
        }

        const price = 100;
        const totalprice = price * quantity;

        const orderid = `order-id-${this.orders.length + 1}`;
        this.orders.push(orderid);

        this.inven.reduceStock(productid, quantity);

        const message = this.notify.send_notification(productid, "Delhi");

        return `Order placed: ${orderid}, Total: ${totalprice}, ${message}`;
    }
}

  class inventorymanager {

    private inventory: Map<string, number> = new Map([
        ["laptop", 10],
        ["phone", 20],
        ["tablet", 15]
    ]);

    checkStock(productid: string, quantity: number): boolean {
        const stock = this.inventory.get(productid) || 0;
        return stock >= quantity;
    }

    reduceStock(productid: string, quantity: number): void {
        const stock = this.inventory.get(productid) || 0;
        this.inventory.set(productid, stock - quantity);
    }
}

class notificationservice{
     
    send_notification(productid:string,dispatch:string){
        return `your product ${productid} is shipped form warehose${dispatch}`
    }

}
