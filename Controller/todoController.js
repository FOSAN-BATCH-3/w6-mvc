const todoModel = require('../Model/todoModel.js');
const todoView = require('../View/todoView.js');


class todoController{
    static help(){
        todoView.lihatHelp()
    }

    static list(){
        todoModel.lookData(function(data){
            // console.log (data)
            if (data = []){
                todoView.lihatPesan0()
            }else{
            todoView.lihatPesan1(data)}
        })
    }
    static find(p){
        todoModel.lookData(function(data){
            for (let i = 0; i < data.length; i++){
                if (data[i].task_id == p){
                    todoView.lihatPesan2(data[i])
                }
            }
        })
    }
    static add (p){
        todoModel.lookData(function(data){
            if (data == ""){
                console.log(data,'<<<')
                data =[{task_id: 1, task_content: p, status: 'x'}]
                todoModel.saveData(data, function(pesan){
                    todoView.lihatPesan(pesan);
            })
            }else if (data !== []){
            let y = data.length -1
            let yy = data[y].task_id
                data.push({task_id:yy += 1, task_content: p, status: 'x'})
                todoModel.saveData(data, function(pesan){
                todoView.lihatPesan(pesan);
            })
            }
        })
    }

    static delete (p){
        todoModel.lookData(function(data){
            for (let i = 0; i < data.length; i++){
                if (data[i].task_id == p){
                data.splice(i,1)
                todoModel.saveData(data, function(pesan){
                    todoView.lihatPesan(pesan);
                })
                }
                
        }
    })
    }
    static completed(p){
        todoModel.lookData(function(data){
            for (let i = 0; i < data.length; i++){
                if (data[i].task_id == p){
                data[i].status = "v"
                todoModel.saveData(data, function(pesan){
                    todoView.lihatPesan(pesan);
                })
                }
                
        }
    })
    }
    static uncompleted(p){
        todoModel.lookData(function(data){
            for (let i = 0; i < data.length; i++){
                if (data[i].task_id == p){
                data[i].status = "x"
                todoModel.saveData(data, function(pesan){
                    todoView.lihatPesan(pesan);
                })
                }
                
        }
    })
    }
    static completeList(){
        todoModel.lookData(function(data){
            let cl = []
            for (let i = 0; i < data.length; i++){
                if (data[i].status == 'v'){
                cl.push(data[i])
                    todoView.lihatPesan1(cl);
                } 
                }
                
        })
    }
    
}

module.exports = todoController;