const task_id=process.argv[2]
const task_content=process.argv.slice(3)
const controller=require('../html/MVC2/controller/controller')

switch(task_id){
    case 'help':
    controller.help()
    break;
    case 'list':
    controller.lihatAktivitas()
    break;
    case 'add':
    controller.tambahAktivitas(task_content[0])
    break;
    case 'find':
    controller.findAktivitas(task_content[0])
    break;
    case 'delete':
    controller.deleteAktivitas(task_content[0])
    break;
    case 'complete':
    controller.complete(task_content[0])
    break;
    case 'uncomplete':
    controller.uncomplete(task_content[0])
    break;
}