const view = require('../view/todoView')
const model = require('../model/todoModel')

class todoController{
    static wrongData(){
        view.fail()
    }
    static help(){
        view.listHelp();
    }
    static todoList(){
        model.listTodo(function (data) {
            view.lihatList(data)
        })
    }
    static todoAdd(task){
        model.listTodo(function (data) {
            data.push(new model(data[data.length-1].id+1,task,'x'))
            model.saveData(data,function (status) {
                view.lihatData(status);
            })
        })
    }
    static todoFind(id){
        model.listTodo(function (data) {
            if (id<1 || id>data.length||!id) {
                console.log('\nMaaf \'id\' tidak ditemukan');
                view.fail();
            }
            else{
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    console.log('id       : '+data[i].id+'\nkegiatan : '+data[i].task+'\nstatus   : '+data[i].status)
                }
            }
        }
        })
    }
    static todoDelete(id){
        model.listTodo(function (data) {
            if (id<1 || id>data.length||!id) {
                console.log('\nMaaf \'id\' tidak ditemukan');
                view.fail();
            }
            else{    
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    data.splice(i,1);
                }
            }
            model.saveData(data,function (status) {
                view.lihatData(status);
            })
            }
        })
    }

    static todoCompleted(id){
        model.listTodo(function (data) {
            if (id<1 || id>data.length||!id) {
                console.log('\nMaaf \'id\' tidak ditemukan');
                view.fail();
            }
            else{    
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    if (data[i].status == 'v') {
                        console.log('Tadi kan sudah dikerjakan :v');
                    }
                    else{
                        data[i].status = 'v'
                        model.saveData(data,function (status) {
                            view.lihatData(status);
                        })
                    }
                }
            }
        }
        })
    }

    static todoUncompleted(id){
        model.listTodo(function (data) {
            if (id<1 || id>data.length||!id) {
                console.log('\nMaaf \'id\' tidak ditemukan');
                view.fail();
            }
            else{    
            for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        if (data[i].status == 'x') {
                            console.log('Tadi kan sudah dikerjakan :v');
                        }
                        else{
                            data[i].status = 'x'
                            model.saveData(data,function (status) {
                                view.lihatData(status);
                            })
                        }
                    }
                }
            }
        })
    }
}

module.exports = todoController;