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
        modelList.penampung((data)=> {
            let penanda = 0
            let penampung3 = 0
            let penampung1 = []
            for (let j=0; j<data.length; j++) {
                penampung3 = Math.max(data[j].id)  
                if (data[j].task==task) {
                    penanda = 1
                    penampung1 = data[j]
                    modelList.listTodo((data)=> {
                        let flag = false
                        for (let k=0; k<data.length; k++) {
                            if (data[k].task!=task || data[k].length==0) {
                                flag = true
                            }
                        }
                        if (flag==true) {
                            data.push({id: penampung1.id, task: penampung1.task, status: "x"})
                            modelList.saveData (data)
                            viewList.addTask (task)
                        }
                    })
                }
            }
            if (penanda==0) {
                data.push({id: penampung3 + 1, task: task, status: "x"})
                modelList.savePenampung (data)
                modelList.listTodo (function(data)   {

                    let flag = false
                    for(let i=0; i<data.length; i++)    {  
                       if (data[i].task==task)  {
                           flag = true
                       }    
                    }
                    if (flag===false)   {
                        data.push({id: penampung3 + 1, task: task, status: "x"})
                        modelList.saveData (data)
                        viewList.addTask (task)
                    } else  {
                        viewList.doubleAdd()
                    }
                })    
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