const { formattedJsonRecorder } = require("./Services/directoryService")
const { fixName, fixPrice, fixQuantity } = require("./Services/dataFixService")
const dados = require('./Objects/brokenDatabase.json')

const init = async function () {    
    let newDatabase = [];
    for (var i = 0; i < dados.length; i++) {
        let temporaryObject = {}
        let Name = await fixName(dados[i].name)
        let Price = await fixPrice(dados[i].price)
        let Quantity = await fixQuantity(dados[i].quantity)
        temporaryObject = {
            id: dados[i].id,
            name: Name,
            quantity: Quantity,
            price: Price,
            category: dados[i].category,
        }
        newDatabase.push(temporaryObject);
    }
    formattedJsonRecorder(newDatabase)
    console.log('Sucesso !!!');
}
init()