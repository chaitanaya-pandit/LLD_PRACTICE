import {imember} from "../types"
export class member implements imember {
    private borrowdbook:string[]=[]
    private fine:number = 0

    constructor(
        public id:number,
        public name:string,
        public email:string,
        public phone:string
    ){}

    canborrow(maxlimit:number=5):boolean{
        return this.borrowdbook.length < maxlimit
    }
    returnbook(barcode:string){
        const index = this.borrowdbook.indexOf(barcode)
        if (index === -1){
            throw new Error ("This book is not borrowed by the member")
        }
        this.borrowdbook.splice(index, 1)
    }
    borrowbook(barcode:string){
        if (!this.canborrow()){
            throw new Error ("Member has reached the maximum borrow limit")
        }
        this.borrowdbook.push(barcode)
    }
    getborrowbook(){
        return this.borrowdbook
    }
    getborrowcount(){
        return this.borrowdbook.length
    }
    addfine(amount:number){
        this.fine +=amount
    }
    payfine(amount:number){
          if (amount >this.fine){
            throw new Error("Amount exceeds the total fine")
          }
        this.fine -= amount
    }
    gettotalfine(){
        return this.fine
    }

}