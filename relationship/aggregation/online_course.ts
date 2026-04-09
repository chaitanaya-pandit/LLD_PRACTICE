class instructor {
    private name: string;
    private courses:course []=[];

    addcourse(course:course):void{
        this.courses.push(course)
    }
}

class course {
    private title:string;
    private instructor:instructor;
    private students: student []=[];

    enrollstudent(std:student):void{
      this.students.push(std)

    }
    gettitle():string{ return this.title}
    

}

class student {
   private name: string;
   private enrolledcourse?: course;
   constructor(name:string){
    this.name=name;
   }
   getinstructorname(cour:course):string{
     

return ""
   }

}