const fixName = async (data) => {
    return new Promise((resolve, reject) => {
        resolve(data.replace(/æ/g,'a').replace(/¢/g,'c').replace(/ø/g,'o').replace(/ß/g,'b'))
    })
}

const fixPrice = async (data) => {
    return new Promise((resolve, reject) => {
        resolve(Number(data))
    })
}

const fixQuantity = async (data) => {
    return new Promise((resolve, reject) => {
            if(data == null){
                resolve(data = 0)
            } else{
                resolve (data)
            }
    })
}

module.exports = { fixName, fixPrice, fixQuantity }

