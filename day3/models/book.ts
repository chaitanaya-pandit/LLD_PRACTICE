import {ibook} from "../types"
export class book implements ibook{
    constructor(
        public isbn:string,
        public title: string,
        public author:string,
        public publisher:string,
        public year:number,
        public totalcopies:number,
    ){}

    getavailablecopies(issuedcopies:number):number{
        return this.totalcopies -issuedcopies;

    }

    isavailable(issuedcopies:number):boolean{
        return this.getavailablecopies(issuedcopies) > 0 ? true : false;

    }
}