const fs = require("fs");

const formattedJsonRecorder = async (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./saida.json', JSON.stringify(data, null, 2),
            err => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(true)
                    console.log("BrokenDatabase adjusted and recorded as formattedDatabase.json at Objects folder.")
                }
            }
        );
    })
}

module.exports = { formattedJsonRecorder }
