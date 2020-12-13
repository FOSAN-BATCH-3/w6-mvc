const request = process.argv[2];
const parameter = process.argv.slice(3);

const todoController = require ('./Controller/todoController')

switch (request){
    case 'help':
        todoController.help();
    break;
    case 'list':
        todoController.list();
    break;
    case 'find':
        todoController.find(parameter[0]);
    break;
    case 'add':
        todoController.add(parameter[0]);
    break;
    case 'delete':
        todoController.delete(parameter[0])
    break;
    case 'completed':
        todoController.completed(parameter[0])
    break;
    case 'uncompleted':
        todoController.uncompleted(parameter[0])
    break;
    case 'completeList':
        todoController.completeList()
    break;
    default :
    console.log ('error bosq')
}
