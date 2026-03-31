 export interface ibook{
    isbn: string;
    title: string;
    author:string;
    publisher:string;
    year:number;
    totalcopies:number;
}

export interface imember {
    id:number;
    name:string;
    email:string;
    phone:string;
}

export enum bookstatus {
  AVAILABLE = 'available',
  ISSUED = 'issued',
  RESERVED = 'reserved',
  LOST = 'lost'
}

