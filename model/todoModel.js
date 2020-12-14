const fs = require ('fs');


class TodoModel{
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status;
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
    static saveTodo(data, cb){
        fs.writeFile('./todo.json', JSON.stringify (data, null, 2), (err, data) =>{
            if(err){
                console.log(err);
            }else{
                cb('Sukses!')
            }
        })
    }
    static add(q, w, e){
        this.list(function(data){
            data.push({id : q, task: w, status: e});
            this.saveTodo(data, function(pesan){
                viewTodo.cek(pesan)
            })
        })
    }
}

module.exports = TodoModel