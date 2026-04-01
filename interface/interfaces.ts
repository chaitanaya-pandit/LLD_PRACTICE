interface animal{
    voice(speak:string):void;
}

class dog implements animal{
    voice(speak:string):void{
        console.log(`dog says ${speak}`);
    }

}

class horse implements animal{
    voice(speak:string):void{
        console.log(`horse says ${speak}`);
    }
}

class cat implements animal{
    voice(speak:string):void{
        console.log(`cat says ${speak}`);
    }
}

class body{

    constructor(private animal:animal){
        this.animal = animal;
    }

    voices(speak:string):void{
        this.animal.voice(speak)
    }
    
}

const _body=new body(new dog());
_body.voices("woof woof");

const _body2=new body(new horse());
_body2.voices("neigh neigh");

const _body3=new body(new cat());
_body3.voices("meow meow");
