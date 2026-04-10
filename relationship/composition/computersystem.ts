class cpu{
    public modelname:string;
    public corecount:number;
    constructor(modelname:string,corecount:number){
        this.modelname=modelname;
        this.corecount=corecount;
    }
    describe(){
        return `modelname: ${this.modelname} ,corecount:${this.corecount}` 
       }
}
class Ram {
    public size:string;
    constructor(size:string){
        this.size=size;
    }
    describe(){
        return `size of the ram is ${this.size}`
    }

}
class hardDrive {
    public hddsize:string;
    constructor (size:string){
        this.hddsize=size;
    }
    describe(){
        return `size of the harddisk is${this.hddsize}`
    }
 
}
class computer {
    public cpumodel:cpu;
    public ram:Ram;
    public harddrive: hardDrive;

    constructor(cpumodel:string,ram:string,harddrive:string,corecount:number){
        this.cpumodel=new cpu(cpumodel,corecount);
        this.ram=new Ram(ram)
        this.harddrive=new hardDrive(harddrive)

    }
    describespecs():void{
        console.log(this.cpumodel.describe());
        console.log(this.ram.describe());
        console.log(this.harddrive.describe());
    }

}