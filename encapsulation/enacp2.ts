class chopiingcart{
    private items:Map<number,string>= new Map()
    private discount:boolean=false;
    private ischeckout:boolean=false;


    
    additem( name:string, price:number):void{
        if (this.ischeckout){
            this.items.set(price,name)
        }
        console.log("you have already checkout")

    }
    applydiscount(code:string){
        if(code === "DISCOUNT10" && this.discount && !this.ischeckout){
          console.log("discount applied")
          return true;
        }

        return false

    }
    gettotal(){
        this.items.forEach((value,key)=>{
            const total=0;
            total+= value.price;
        })


    }
    checkout(){

    }

}