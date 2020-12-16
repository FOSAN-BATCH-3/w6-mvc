const fs = require('fs');
class model{
    constructor(id,task,status){
        this.id=id
        this.task=task
        this.status=status
    }
    static list(cb){
        fs.readFile('./MVC2/TODO.json', 'utf8', function(err, data){
            if(err){
                console.log(err)
            }else{
                cb(JSON.parse(data))
            }
        })
    }
    static saveData(data,cb){
        fs.writeFile('./MVC2/TODO.json', JSON.stringify(data,null,2), function(){
            cb('berhasil')
        })
    }
}
module.exports=model