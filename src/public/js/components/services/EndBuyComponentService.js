async function postBuy(entity) {
    debugger;
    var jsonObject = JSON.stringify(entity);
    const url = 'https://localhost:5001/api/buy/postbuy?request=' + jsonObject.toString();
    return fetch(url, {
        method: "POST",

    })
        .then(catalogDataSearchBar => {
            return catalogDataSearchBar;
        })
        .catch(error => {
            console.log(error);
        })
}
export { postBuy }