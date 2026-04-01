import {book} from "../models/book"
import { bookitem } from "./bookitem"
import {member} from "./member"


export class library {
    private books:Map<string,book>=new Map();
    private bookitems:Map<string,bookitem> = new Map()
    private members:Map<number,member> = new Map()

    
}