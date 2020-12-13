const fs = require ('fs');

class todoModel {
    static lookData (cb){
    fs.readFile('./todo.json','utf8',function(err, data){
        if (err){
            console.log(err)
        }
        else{
            if (data == ""){
                cb(data)
            }else{
            cb(JSON.parse(data));
            }
        }
    })
    }
    static saveData (data, cb){
        fs.writeFile('./todo.json', JSON.stringify(data, null, 2), function(){
            cb('berhasil')
        })
    }
    }

module.exports = todoModel;
