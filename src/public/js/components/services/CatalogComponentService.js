import { loadLs,removeLs } from '../utils/storage.js';
async function loadCatalogDataAll() {
    const url = 'https://localhost:5001/api/product/getcatalogall';
    return fetch(url)
        .then(catalogData => catalogData.json())
        .then(catalogData => {
            return catalogData;
        })
        .catch(error => {
            console.log(error);
        })
}

async function loadCatalogDataSearchBar(object) {
    //var local = loadLs("search");
    var jsonObject = JSON.stringify(object);
    debugger;
    const url = 'https://localhost:5001/api/product/getcatalogsearchbar?request=' + jsonObject.toString();
    return fetch(url)
        .then(catalogDataSearchBar => catalogDataSearchBar.json())
        .then(catalogDataSearchBar => {
            removeLs("search")

            console.log(catalogDataSearchBar);
            return catalogDataSearchBar;

        })
        .catch(error => {
            console.log(error);
        })
}

async function loadFilters() {
    //var local = loadLs("search");
    const url = 'https://localhost:5001/api/product/getfilters';
    return fetch(url)
        .then(filtersData => filtersData.json())
        .then(filtersData => {
            return filtersData;
        })
        .catch(error => {
            console.log(error);
        })
}

export{loadCatalogDataAll,loadCatalogDataSearchBar,loadFilters }