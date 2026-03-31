class todos {
    constructor(public id: number, public title: string, public description: string, public status: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status="pending"
    }

    mark_complete():void{
        this.status="completed"
    }
    mark_not_complete():void{
        this.status="pending"
    }
    update_title(new_title:string):void{
        this.title= new_title
    }
    update_description(new_desc:string):void{
        this.description= new_desc
    }
    get_todo_details(){
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            status: this.status
        }
    }
}
class todolists {
    constructor(public name: string, public todos:todos[]){
        this.name=name;
        this.todos=todos;
    }

    add_todo(todo:todos):void{
        const added_todo = new todos(todo.id, todo.title, todo.description, todo.status)
        this.todos.push(added_todo)
    }

    remove_todo(id:number):void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    find_todo_by_id(id:number):todos|undefined{
        return this.todos.find(todo => todo.id === id);
    }

    get_all_todos():todos[]{
        return this.todos
    }
}