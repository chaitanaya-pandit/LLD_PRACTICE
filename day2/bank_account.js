class todo {
    constructor(id, tittle, description){
        this.id=id,
        this.tittle=tittle,
        this.description=description
        this.status=false
    }
    mark_complete(){
        this.status=true
        return this
    }
    mark_notcomplete(){
        this.status=false
        return this
    }
    
    update_tittle(new_tittle){
        this.tittle=new_tittle
        return this
    }
     update_description(new_description){
        this.description=new_description
        return this
     }
     getinfo(){
        return{tittle:this.tittle,
            description:this.description
        }
     }
}

class todo_list{
    constructor(list_name){
        this.list_name=list_name
        this.list=[]
    }
    add_todo(td_id,td_tittle,td_description){
        const added_todo=new todo(td_id,td_tittle,td_description)
         this.list.push(added_todo)
    }
    remove_todo(td_id){
        this.list=this.list.filter((todo)=>todo.id !== td_id)
        return this
    }

    find_todo(td_id){
     return this.list.find((todo)=> todo.id ===td_id)   
    }
    get_all_todos(){
        return this.list
    }

    clear_todo(){
        this.list=[]
        return this
    }
    

}