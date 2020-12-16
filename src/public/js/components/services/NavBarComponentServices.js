async function getInfoNavBar() {
    return fetch('../data/categorias.json')
        .then(data => data.json())
        .then(data => {
            var contenidoJson = [];
            for (var dat of data) {
                contenidoJson.push(dat);
            }
            debugger;
            return contenidoJson;
        })
        .catch(error => {
            console.log(error);
        })
}
export {getInfoNavBar}