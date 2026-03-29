class chintu{

    constructor(name,age,education,gender,residence){
        this.name=name,
        this.education=education,
        this.gender=gender,
        this.residence=residence,
        this.age=age

    }

    chintu_info(){
        return  `my name is ${this.name}`
    }
    chintu_age(){
        return `myage is ${this.age}`
    }

    chintu_education(){
        return `my education is ${this.education}`
    }

    chintu_gender(){
        return `my gender is ${this.gender}`
    }
    
    chintu_residence(){
        return `my residence is ${this.residence}`
    }

    chintu_basic_info(){
        const basicinfo={name:this.name,age:this.age,education:this.education}
        return basicinfo;
    }
}

class cricketer extends chintu {
    constructor(name,age,academy_name,matches_played){
        super(name,age)
        this.academy_name=academy_name
        this.matches_played=matches_played
    }
    cricketer_info(){
        const chintu_cricket_info={
            name:this.name,
            age:this.age,
            academy_name:this.academy_name,
            matches_played:this.matches_played
        }
        return chintu_cricket_info;
        }
    }



const person=new chintu("chaitanya",20,"btech","male","kanpur")
console.log(person.chintu_info())
console.log(person.chintu_age())
console.log(person.chintu_education())
console.log(person.chintu_residence())
console.log(person.chintu_basic_info())

const cricketers=new cricketer("chaitanya",20,"kkr_academy",48)

console.log(cricketers.cricketer_info())