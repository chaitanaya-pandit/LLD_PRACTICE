import { bookstatus }  from "../types"

export class bookitem {
    private status: bookstatus = bookstatus.AVAILABLE;
    constructor(
        public barcode:string,
        public isbn:string,
        public racknumber:string

    ){}
    getstatus():bookstatus{
        return this.status
    }
    changestatus(newstatus:bookstatus):void{
        this.status =newstatus
    }
    isavailable():boolean{
        return this.status === bookstatus.AVAILABLE
    }
    issuebook():void{
        if (!this.isavailable()){
            throw new Error("book is not available for issue")
        }
        this.status =bookstatus.ISSUED
    }
    returnbook():void{
        if(this.status !== bookstatus.ISSUED){
            throw new Error("book is not issued")
        }
        this.status =bookstatus.AVAILABLE
    }
}