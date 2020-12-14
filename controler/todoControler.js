const TodoModel = require("../model/todoModel");
const TodoView = require("../view/todoView");

class TodoControl{
    static list(){
        TodoModel.list(data =>{
            TodoView.cek(data)
        })
    }
}

module.exports = TodoControl