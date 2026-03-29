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

class daily_expenses extends chintu {
        #balance;
    constructor(name,age,balance,fd_amount){
        super(name,age)
        this.#balance=balance
        this.fd_amount=fd_amount
    }
   show_balance(){
     return  `my current balance is ${this.#balance}`
   } 

   today_expense(amount){
    if (amount > this.#balance) {
        return `Insufficient balance. You cannot spend more than your current balance of ${this.#balance}.`;
    }
    this.#balance -= amount;
    return `You have spent ${amount}. Your remaining balance is ${this.#balance}.`;
   }
    
   expense_list(name,amount){
    const expense_info=[]
    expense_info.push({name:name,amount:amount})

    const total_expense = expense_info.reduce((total, expense) => total + expense.amount, 0);
    expense_info.push({total_expense: total_expense})
    return expense_info;
   }
    
   fixed_Deposit(num){
   const  total_amount=this.fd_amount
   console.log(`my fixed deposit amount is ${total_amount}`)
   const each_fd_amount=total_amount/num
   console.log(`each fd amount is ${each_fd_amount}`)
    return `total amount is ${total_amount} and each fd amount is ${each_fd_amount}`
   }

}


const person=new chintu("chaitanya",20,"btech","male","kanpur")
 
console.log(person.chintu_basic_info())
const cricketer1=new cricketer("chintu",20,"kkr academy",10)
console.log(cricketer1.cricketer_info())

const expenses=new daily_expenses("chintu",20,10000,50000)
console.log(expenses.show_balance())
console.log(expenses.today_expense(2000))
console.log(expenses.expense_list("food",2000))
console.log(expenses.expense_list("travel",3000))
console.log(expenses.expense_list("shopping",5000))
console.log(expenses.fixed_Deposit(5))