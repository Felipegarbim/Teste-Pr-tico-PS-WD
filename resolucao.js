const { formattedJsonRecorder } = require("./Services/directoryService")
const { sortByMultipleKey } = require("./Services/sortService")
const { normalizeDatabase } = require("./Services/dataFixService")
const dados = require('./Objects/brokenDatabase.json')
const groupBy = require('group-by-with-sum');

const init = function () {
    const response = normalizeDatabase(dados)
    response.newDatabase.sort(sortByMultipleKey(['category', 'id']))
    const sumByCategory = groupBy(response.newDatabase, 'category', 'quantity')
    const finalFormatSave = [response.newDatabase, sumByCategory]
    console.log(response.validationErrors)
    console.log(finalFormatSave)
    formattedJsonRecorder(finalFormatSave)
    console.log('Sucesso !!!');
}
init()


