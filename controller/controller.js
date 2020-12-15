const viewList = require ('../view/view.js')
const modelList = require ('../model/model.js')

class Controller    {
    static lihatList () {
        modelList.listTodo (function(data)   {
            viewList.seeList (data)
        })
    }
    static lihatCommand ()  {
        viewList.helpList ()
    }
    static addContent (task)    {
        modelList.listTodo (function(data)   {
            let penampung = 0
            let flag = false
            for(let i=0; i<data.length; i++)    {
               penampung = Math.max(data[i].id)  
               if (data[i].task==task)  {
                   flag = true
               }    
            }
            if (flag===false)   {
                data.push({id: penampung + 1, task: task, status: "v"})
                modelList.saveData (data)
                viewList.addTask (task)
            } else  {
                console.log(`${task} sudah ada pada list`)
            }
        })    
    }

    static findContent (nomer)  {
        viewList.findTask (nomer)
    }

    static deleteContent (x, y)    {
    viewList.deleteTask (x, y)
    modelList.listTodo (function(data)   {
       for (let i=0; i<data.length; i++)    {
           if (data[i].id==x || data[i].task==x || data[i].task==(`${x} ${y}`))  {
               data.splice(i, 1)
           }
        }
            modelList.saveData (data)
        }) 
    }

    static completContent (x, y)   {
        modelList.listTodo ((data)=>    {
            for(let i=0; i<data.length; i++)    {
                if(data[i].id==x || data[i].task==(`${x} ${y}`) || data[i].task==x)   {
                    data[i].status = 'v'
                }
            }
            modelList.saveData (data)
            viewList.seeList (data)
        })
    }

    static uncompletContent (x, y)   {
        modelList.listTodo ((data)=>    {
            for(let i=0; i<data.length; i++)    {
                if(data[i].id==x || data[i].task==(`${x} ${y}`) || data[i].task==x)   {
                    data[i].status = 'x'
                }
            }
            modelList.saveData (data)
            viewList.seeList (data)
        })
    }

    static viewCompleted () {
        viewList.viewCompleted ()
    }

    static viewUncompleted ()   {
        viewList.viewUncompleted ()
    }
}

module.exports = Controller