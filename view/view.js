const modelList = require ('../model/model.js')

class lihatList {
    static seeList (data)   {
        for (let i=0; i<data.length; i++)   {
            console.log(`${data[i].id}. ${data[i].task} ${data[i].status}`)
        }
    }

    static helpList ()  {
       console.log(`1. node todo.js help # menampilkan command apa saja yang tersedia\n2. node todo.js list # Melihat daftar TODO\n3. node todo.js add <task_task> # Menambahkan TODO ke dalam list\n4. node todo.js find <task_id> # Melihat detail TODO sesuai 'task_id' nya\n5. node todo.js delete <task_id>/<task_task> # Menghapus TODO sesuai 'task_id'/'task_task' nya\n6. node todo.js completed <task_id>/<task_task> # Menandai status TODO selesai\n7. node todo.js uncompleted <task_id>/<task_task> # Menandai status TODO belum selesai\n8. node todo.js viewcompleted # menampilan kegiatan yang sudah dilakukan\n9. node todo.js viewuncompleted # menampilan kegiatan yang belum dilakukan`)
    }

    static addTask (task)   {
        console.log(`${task} ditambahkan kedalam todo list`)
    }

    static findTask (nomer) {
        modelList.listTodo (function(data)   {
        console.log(`${data[nomer-1].id}. ${data[nomer-1].task} ${data[nomer-1].status}`)
        })
    }

    static deleteTask (x, y)   {
        modelList.listTodo (function(data)   {
            for(let i=0; i<data.length; i++)    {
                if(data[i].id==x || data[i].task==(`${x} ${y}`) || data[i].task==x)   {
                    console.log(`${data[i].task} dihilangkan di dalam todo list`)
                }
            }
        })
    }

    static viewCompleted () {
        modelList.listTodo ((data)=>    {
            let penampung = []
            for (let i=0; i<data.length; i++)   {
                if (data[i].status==='v')   {
                    penampung.push(data[i].task)
                }
            }
            console.log(penampung)
        })
    }

    static viewUncompleted () {
        modelList.listTodo ((data)=>    {
            let penampung = []
            for (let i=0; i<data.length; i++)   {
                if (data[i].status==='x')   {
                    penampung.push(data[i].task)
                }
            }
            console.log(penampung)
        })
    }

    static doubleAdd (task) {
        console.log(`${task} sudah ada pada list`)
    }
}

module.exports = lihatList