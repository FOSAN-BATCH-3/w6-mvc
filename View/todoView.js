class todoView{

    static lihatPesan (data){
    console.log(data)
    }

    static lihatPesan1(data){
        for (let i=0;i <data.length; i++){
            console.log(`${data[i].task_id}. ${data[i].task_content}`,'[',data[i].status,']')
        }
    }

    static lihatPesan2(data){
            console.log(`${data.task_id}. ${data.task_content}`,'[',data.status,']')
        
    }

    static lihatHelp(){
        console.log(` help \n list \n add \n find \n delete \n complete \n uncomplete \n completeList` )
    }
}

module.exports = todoView;