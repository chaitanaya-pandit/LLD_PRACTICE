interface connection{
    connected(host:string,port:number):void;
}

class mongo implements connection{
    connected(host:string,port:number):void{
        console.log(`connected to mongo at ${host}:${port}`);
    }

}
class redis implements connection{
    connected(host:string,port:number):void{
        console.log(`connected to redis at ${host}:${port}`);
    }
}
class mysql implements connection{
    connected(host:string,port:number):void{
        console.log(`connected to mysql at ${host}:${port}`);
    }
}


class database{
    constructor(private connection:connection){
        this.connection = connection;
    }

    connect(host:string,port:number):void{
        this.connection.connected(host,port);
    }
}

const _database=new database(new mongo());
_database.connect("localhost",27017);

const _database2=new database(new redis());
_database2.connect("localhost",6379);

const _database3=new database(new mysql());
_database3.connect("localhost",3306);