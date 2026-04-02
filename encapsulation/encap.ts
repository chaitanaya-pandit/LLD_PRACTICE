class temperature_sensor{
    private temperature_reading:number[]=[];

    addreading(temp:number){
        if(temp < 150 && temp > -50){
            this.temperature_reading.push(temp)
        }
        return 0;
    }
    getaverage():number{
        const sum = this.temperature_reading.reduce((num,num2)=>{
            return num+=num2},0);
       const  average =sum /this.temperature_reading.length;
       return average
    }
    getreadingcount(){
        return this.temperature_reading.length
    }
    getreadings(){
        return this.temperature_reading
    }
}