const request = process.argv[2];
const parameter = process.argv.slice(3);

const todoController = require('./controler/todoControler');
switch(request){
    case 'help':
        todoController
    break
    case 'list':
        todoController.list()
    break
    case 'add':
        todoController
    break
    case 'find':
        todoController
    break
    case 'delete':
        todoController
    break
    case 'completed':
        todoController
    break
    case 'uncompleted':
        todoController
    break
    default:
        console.log('masukan perintah!');

}