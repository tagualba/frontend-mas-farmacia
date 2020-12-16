import { GetHtmlFilters } from './FiltersCatalogComponent.js';
import { GetHtmlProducts, getHtmlPaginadores, quantityPaginador } from './ProductsCatalogComponent.js';
import { RenderComponent, clearComponent } from '../utils/renderUtil.js';
import { loadLs, setLs, loadLsNotEncrypted } from '../utils/storage.js';
import { CarritoEntity } from '../../Entitys/CarritoEntity.js';
import { loadCatalogDataAll, loadCatalogDataSearchBar, loadFilters } from '../services/CatalogComponentService.js';
let productsCatalog = [];
var actualPage = 1;
async function RenderCatalog() {
    debugger;
    var CatalogoHtmlBase =
        `
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 ">                
                    <img src="/resources/CarritoHeader.jpg" class="img-fluid" alt="Responsive image">
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <br>
                    <p class="catalogoTitulo"><a href="/">Home</a> / Carrito</p>
                    <hr class="separator1">
                    <br>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-3 filtros">    
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="d-flex" >                          
                                <div id="accordion" class="color-white d-flex flex-column botonDesplegableFiltro">            
                                    <div class="card filtroCatalogo ">                                  
                                        <div class="card-header bg-white" id="filtrado">
                                            <button id="botonFiltro1"
                                                    class="btn  text-sm-center text-md-left text-lg-left botonFiltro" type="button"
                                                    data-toggle="collapse" data-target="#filtros" 
                                                    aria-controls="filtros" aria-expanded="true" >
                                                <h5 class="titulosFiltros">                                                           
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-funnel" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                                    </svg>
                                                    Filtrar   
                                                </h5>
                                            </button>  
                                        </div>                                                
                                        <div id="filtros" class="collapse">
                                            <form id ="checksFiltros">
                                                @FILTROS
                                            </form>
                                            <div id="precioSection">
                                                <div class="card-header bg-white" id="priceBoton">
                                                    <button id="botonPrecio" type="button"
                                                            class="btn  text-sm-center text-md-left text-lg-left botonFiltro collapsed "
                                                            data-toggle="collapse" data-target="#collapsePrec1" 
                                                            aria-controls="collapsePrec1"  >
                                                        <h5 class="titulosFiltros">
                                                            Precio
                                                        </h5>
                                                    </button>  
                                                </div>    
                                                <div id="PriceContainer">  
                                                    <div id="collapsePrec1" class="collapse" aria-labelledby="filtrado" data-parent="#priceBoton">
                                                        <div class="card-body p-0 small">              
                                                            <div id="CategoriaIDCATEGORIA">                                                
                                                                <div class="card border-0">
                                                                    <div class="card-header bg-white border-0 p-1" id="HeaderPriceIDCATEGORIA">
                                                                        <div class="mb-0 precio">                                                         
                                                                            <label for="desdeInput">Desde:</label>
                                                                            <div class="input-group mb-3">                                                  
                                                                                <div class="input-group-prepend">
                                                                                    <span class="input-group-text">$</span>                                                    
                                                                                </div>
                                                                                <input type="number" id="desdeInput" class="form-control" placeholder="0">   
                                                                            </div>
                                                                            <label for="hastaInput">Hasta:</label>
                                                                            <div class="input-group mb-3">                                                
                                                                                <div class="input-group-prepend">
                                                                                    <span class="input-group-text">$</span>                                                  
                                                                                </div>
                                                                                <input type="number" id="hastaInput" class="form-control" placeholder="10.000">
                                                                            </div>                                                                                                                       
                                                                        </div>                                                     
                                                                    </div>
                                                                </div>                                                                                    
                                                            </div>                                              
                                                        </div>                                                                                                                  
                                                    </div>  
                                                </div>
                                            </div>                                            
                                            <div>                           
                                                <button class="btn m-1 p-1  botonAplicar" onclick = "aplicaFiltros()">
                                                    Aplicar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                   
                            </div>                                                                   
                        </div>                                                           
                    </div>
                </div>                                           
                <div class="col-xs-12 col-md-9 productosGrilla">            
                    <div class="row">
                        <div class="col-lg-12 ordenarPor">
                            <div class="dropdown col-sm-auto">
                                <label class="p-2 text-sm-center" for="#">Ordenar por</label>
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Seleccione uno...
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" onclick="comboChange(1)" >Menor Precio</a>
                                    <a class="dropdown-item" onclick="comboChange(2)" >Mayor Precio</a>                                
                                </div>
                            </div>                            
                        </div>                      
                    </div>                
                    <br>
                    <br>                        
                    <div class ="row" id="producto">         
                        @PRODUCTOS               
                    </div>
                    <div class="row paginasR" id = "paginador">
                       @PAGINADORES
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;


    let res;
    let filterSearchBar = new Object();
    debugger;
    if (loadLsNotEncrypted("search") != null) {
        var req = new Object();

        //MEJORAR DISEÑO, VER CON IAN.
        debugger;
        let filters =  await loadCatalogDataAll()/* await loadFilters();*/
       
        req.SearchBarText = loadLsNotEncrypted("search");
        debugger;
        res = await loadCatalogDataSearchBar(req);
        
        //bandera para guardarme las categorias que fueron traidas por el filtro para después chequear
        filterSearchBar.categorys = res.categorys;
        filterSearchBar.marcas = res.marcas;

        //valorizo los objetos categorias y marcas para que me renderize todas los filtros que haya
        res.categorys = filters.categorys
        res.marcas = filters.marcas ;    
    } else {
        res = await loadCatalogDataAll();
    }
    var htmlFilters = await GetHtmlFilters(res.categorys, res.marcas,filterSearchBar.categorys,filterSearchBar.marcas);
    productsCatalog = res.products;
    res.products = paginate(9, 1);
    var htmlProducts = await GetHtmlProducts(res.products);
    var htmlPaginadores = getHtmlPaginadores(productsCatalog);
    CatalogoHtmlBase = CatalogoHtmlBase.replace(/@FILTROS/g, htmlFilters);
    CatalogoHtmlBase = CatalogoHtmlBase.replace(/@PRODUCTOS/g, htmlProducts);
    CatalogoHtmlBase = CatalogoHtmlBase.replace(/@PAGINADORES/g, htmlPaginadores);
    RenderComponent("#Catalog", CatalogoHtmlBase);
    
}
window.agregarAlCarrito = agregarAlCarrito;
function agregarAlCarrito(idProduct) {
    var productoActual = [];
    productoActual.push(JSON.parse(document.getElementById("valor@" + idProduct).value))
    var estaAgregado;
    debugger;
    var carrito = loadLs("carrito");
    if (carrito == null) {
        carrito = [];
    }
    if (carrito.length == 0) {
        for (let carritos of productoActual) {
            carrito.push(new CarritoEntity(carritos.idProduct, carritos.name, carritos.marca, carritos.price, carritos.path, 1));
        }
    } else {
        for (let car of carrito) {
            if (Number(car.idProduct) === Number(idProduct)) {
                car.quantity = Number(car.quantity) + 1;
                estaAgregado = true;
                break;
            }
        }
        if (!estaAgregado) {
            for (let carritos of productoActual) {
                carrito.push(new CarritoEntity(carritos.idProduct, carritos.name, carritos.marca, carritos.price, carritos.path, 1));
            }
        }

    }
    setLs("carrito", (carrito))
}
window.comboChange = comboChange;
function comboChange(opcion) {
    if (opcion == 1) {
        //menor a mayor
        productsCatalog = productsCatalog.sort(((a, b) => a.price - b.price));
    } else if (opcion == 2) {
        //mayor a menor
        productsCatalog = productsCatalog.sort(((a, b) => b.price - a.price));
    }
    var htmlPaginadores = getHtmlPaginadores(productsCatalog);
    let products = paginate(9, 1);
    var htmlProducts = GetHtmlProducts(products);
    clearComponent("#producto");
    clearComponent("#paginador");
    RenderComponent("#producto", htmlProducts);
    RenderComponent("#paginador", htmlPaginadores)
}
window.aplicaFiltros = aplicaFiltros;
function aplicaFiltros() {
    debugger;
    var request = getFiltersChecked();
    var jsonObject = JSON.stringify(request);
    const url = 'https://localhost:5001/api/product/getcatalogbyfilter?request=' + jsonObject.toString();
    fetch(url)
        .then(catalogData => catalogData.json())
        .then(catalogData => {
            productsCatalog = catalogData.products;
            productsCatalog = catalogData.products;
            renderFiltered(catalogData.products);

        })
        .catch(error => {
            console.log(error);
        })
}
function renderFiltered(products) {
    productsCatalog = products;
    products = paginate(9, 1);
    var productsRender = GetHtmlProducts(products);
    var htmlPaginadores = getHtmlPaginadores(productsCatalog);
    // vacio el componente
    clearComponent("#producto");
    //renderizo el componentente 
    RenderComponent("#producto", productsRender)

    clearComponent("#paginador");
    RenderComponent("#paginador", htmlPaginadores)
}
window.goToPage = goToPage;
function goToPage(pageNumber) {
    actualPage = pageNumber;
    let products = paginate(9, pageNumber);
    var htmlPaginadores = GetHtmlProducts(products);
    clearComponent("#producto");
    RenderComponent("#producto", htmlPaginadores)
}

function getFiltersChecked() {
    var req = new Object();
    req.IdFilteredCategories = []
    req.IdFilteredSubCategories = [],
        req.IdFilteredMarcas = [],
        req.PriceMin = 0,
        req.PriceMax = 250000.000;
    var f1 = document.getElementById("checksFiltros");
    for (var i = 0; i < f1.elements.length; i++) {
        if (f1.elements[i].type == "checkbox") {
            if (f1.elements[i].checked == 1) {
                if (f1.elements[i].name == "categoria") {
                    req.IdFilteredCategories.push(Number(f1.elements[i].value));
                }
                if (f1.elements[i].name == "subCategoria") {
                    req.IdFilteredSubCategories.push(Number(f1.elements[i].value));
                }
                if (f1.elements[i].name == "marcas") {
                    req.IdFilteredMarcas.push(Number(f1.elements[i].value));
                }
            }
        }
    }
    return req;
}

function paginate(page_size, page_number) {
    return productsCatalog.slice((page_number - 1) * page_size, page_number * page_size);
}
window.nextPage = nextPage;
function nextPage() {
    //caso de que si la cantida de paginadores da 0
    //le sumo uno, para validar de q no siga yendo hacía delante y no rompa.
    if (quantityPaginador(productsCatalog) + 1 == actualPage) {
        return false;
    }
    //si la cantidad de la actual page y la cantidad de paginadores es igual, retorno falso para evitar de que siga paginando.
    if (actualPage == quantityPaginador(productsCatalog)) {
        return false;
    }
    actualPage++;
    goToPage(actualPage);
}
window.previusPage = previusPage;
function previusPage() {
    actualPage--;
    if (actualPage == 0) {
        actualPage++
        return false;
    }
    goToPage(actualPage);
}



export { RenderCatalog };
