class TodoView{
    static cek(data){
        for(let i = 0; i < data.length; i++)
        console.log(`${data[i].id}. ${data[i].task} [${data[i].status}]`);
    }
    static add(data){
        console.log(`${data} ditambahkan kedalam todo list`);
    }
}

module.exports = TodoView