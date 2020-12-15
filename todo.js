const request = process.argv[2]
const parameter = process.argv.slice(3)
const listController = require ('./controller/controller.js')

switch (request)    {
    case 'help':
        listController.lihatCommand ()
    break;
    case 'list':
        listController.lihatList ()
    break;
    case 'add':
        listController.addContent(parameter[0])
    break;
    case 'find':
        listController.findContent(parameter[0])
    break;
    case 'delete':
        listController.deleteContent(parameter[0], parameter[1])
    break;
    case 'completed':
        listController.completContent(parameter[0], parameter[1])
    break;
    case 'uncompleted':
        listController.uncompletContent(parameter[0], parameter[1])
    break;
    case 'viewcompleted':
        listController.viewCompleted()
    break;
    case 'viewuncompleted':
        listController.viewUncompleted()
    default:
        console.log('goblok')
}