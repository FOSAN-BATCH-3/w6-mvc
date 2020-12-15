const request = process.argv[2];
const parameter = process.argv.slice(3);
const controller = require('./controller/todoController')
switch (request) {
    case 'help':
        controller.help();
        break;
    case 'list':
        controller.todoList();
        break;
    case 'add':
        controller.todoAdd(parameter[0]);
        break; 
    case 'find':
        controller.todoFind(parameter[0]);
        break; 
    case 'delete':
        controller.todoDelete(parameter[0]);
        break; 
    case 'completed':
        controller.todoCompleted(parameter[0]);
        break;
    case 'uncompleted':
        controller.todoUncompleted(parameter[0]);
        break;
    default:
        controller.wrongData();
        break;
}