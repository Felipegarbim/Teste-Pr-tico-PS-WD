const ordenate = async (data) => {
    return new Promise((resolve, reject) => {
        resolve(data.replace(/æ/g,'a').replace(/¢/g,'c').replace(/ø/g,'o').replace(/ß/g,'b'))
    })
}