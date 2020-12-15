const fs = require('fs');

class todoModel{
    constructor(id,task,status){
        this.id = id;
        this.task = task;
        this.status = status;
    }
    static listTodo(cb){
        fs.readFile('./todoList.json','utf8',function (err, data) {
            if (err) {
                console.log(err);
            }
            else{
                cb(JSON.parse(data))
            }
        })
    }
    static saveData(dataBaru,cb){
        fs.writeFile('./todoList.json',JSON.stringify(dataBaru,null,5),function () {
            cb('Program sukses')
        })
    }
}

module.exports = todoModel;