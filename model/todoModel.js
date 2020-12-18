const fs = require ('fs');
const TodoView = require('../view/todoView');


class TodoModel{
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status || 'x';
    }
    static list(cb){
        fs.readFile('./todo.json', 'utf8', (err, data) =>{
            if(err){
                console.log(err);
            }else{
                cb(JSON.parse(data))
            }
        })
    }
    static saveTodo(data){
        let save = JSON.stringify (data, null, 2)
        fs.writeFileSync('./todo.json', save) 
    }
    static add(q, cb){
        TodoModel.list(data =>{
            data.push(new TodoModel(data[data.length -1].id + 1, q[0]));
            TodoModel.saveTodo(data)
            cb(q[0])
        })
    }
}

module.exports = TodoModel