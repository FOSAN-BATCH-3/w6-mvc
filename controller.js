const model=require('../model/model.js')
const view=require('../view/view.js')

class controller{
    static help(){
        console.log(
            `$ node todo.js help # menampilkan command apa saja yang tersedia
            $ node todo.js list # Melihat daftar TODO
            $ node todo.js add <task_content> # Menambahkan TODO ke dalam list
            $ node todo.js find <task_id> # Melihat detail TODO sesuai 'task_id' nya
            $ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya
            $ node todo.js completed <task_id> # Menandai status TODO selesai
            $ node todo.js uncompleted <task_id> # Menandai status TODO belum selesai`)
    }
    static lihatAktivitas(){
        model.list(function(data){
            view.lihatData(data)
        })
    }
    static tambahAktivitas(p,c){
        model.list(function(data){
            data.push({kegiatan:p,status:c})
            model.saveData(data,function(data){
                view.lihatData(data);
            })
        })
}
    static tambahAktivitas(status){
        model.list(function(data){
            data.push(new model(data[data.length-1].id+1,status,'x'))
            model.saveData(data,function(data){
                view.lihatData(data);
        })
    })
    }
    static findAktivitas(){
        model.list(function(data){
            for(i=0;i<data.length;i++){
            if(data[i].id==id){
                data.push(data[i],1)
            }
        }
        model.saveData(data,function(data){
            view.lihatData(data);
    })
        })
    }
    static deleteAktivitas(id){
        model.list(function(data){
            for(let i=0;i<data.length;i++){
                if(data[i].id==id){
                    data.splice(i,1)
        }
    }
    model.saveData(data,function(data){
        view.lihatData(data);
})
    })
}
static complete(id){
    model.list(function(data){
        for(let i=0;i<data.length;i++){
            if(data[i].id==id){
                data[i].status='v'
            }
        }
        model.saveData(data,function(data){
            view.lihatData(data);
    })    
    })
}
static uncomplete(id){
    model.list(function(data){
        for(let i=0;i<data.length;i++){
            if(data[i].id==id){
                data[i].status='x'
            }
        }
        model.saveData(data,function(data){
            view.lihatData(data);
    })
    })
}
}
module.exports=controller;