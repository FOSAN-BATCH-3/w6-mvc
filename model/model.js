const fs = require('fs');
class Todo  {
    static listTodo(cb){
        fs.readFile('./todo.json', 'utf8', function(err, data){
           if(err){
               console.log(err)
           }else{
            cb(JSON.parse(data));
           }        
        })
    }

    static saveData(data){
        fs.writeFile('./todo.json', JSON.stringify(data, null, 2), function(){
        })
    }

    static penampung(cb) {
        fs.readFile('./penampung.json', 'utf8', (err, data)=> {
            if (err) {
                console.log(err)
            } else {
                cb(JSON.parse(data))
            }
        })
    }

    static savePenampung(data) {
        fs.writeFile('./penampung.json', JSON.stringify(data, null, 2), ()=> {
        })
    }
}

module.exports = Todo;