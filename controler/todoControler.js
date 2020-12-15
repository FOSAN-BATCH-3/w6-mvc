const TodoModel = require("../model/todoModel");
const TodoView = require("../view/todoView");

class TodoControl{
    static list(){
        TodoModel.list(data =>{
            TodoView.cek(data)
        })
    }
    static help(){
        console.log('node todo.js help # menampilkan command apa saja yang tersedia');
        console.log('node todo.js list # Melihat daftar TODO');
        console.log('node todo.js add <task_content> # Menambahkan TODO ke dalam list');
        console.log('node todo.js find <task_id> # Melihat detail TODO sesuai task_id nya');
        console.log('node todo.js delete <task_id> # Menghapus TODO sesuai task_id nya');
        console.log('node todo.js completed <task_id> # Menandai status TODO selesai');
        console.log('node todo.js uncompleted <task_id> # Menandai status TODO belum selesai');
    }
    static add(q){
        TodoModel.add(q, (data) =>{
            TodoView.add(data)
        })
    }
}

module.exports = TodoControl



