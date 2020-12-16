async function connectToMp(objectPay) {
    const url = 'http://localhost:3000/toMercadoPago?body='+ objectPay ;
    return fetch(url)
        .then(catalogData => catalogData.json())
        .then(catalogData => {
            return catalogData;
        })
        .catch(error => {
            console.log(error);
        })
}
function setValues(object) {
    var value = object;
    return value;
}

export { connectToMp };