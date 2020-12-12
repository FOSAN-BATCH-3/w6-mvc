class todoView{
 
    static lihatPesan(data){
        for (let i=0;i <data.length; i++){
            console.log(`${data[i].task_id}. ${data[i].task_content}`,'[',data[i].status,']')
        }
    }

    static lihatHelp(){
        console.log(` help \n list \n add \n find \n delete \n complete \n uncomplete` )
    }
}

module.exports = todoView;