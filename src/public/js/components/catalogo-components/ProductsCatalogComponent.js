
async function GetProducts() {
    var cardProuctosRes = ''
    await LoadProducts().then(a => {
        cardProuctosRes = GetHtmlProducts(a)
    });
    console.log("render cardproducts", cardProuctosRes)
    return cardProuctosRes;
    //return LoadProducts();
}

async function LoadProducts() {
    var productsData = [];
    const url = 'https://localhost:5001/api/product/getcatalogall';
    return fetch(url)
        .then(productos => productos.json())
        .then(productos => {
            for (var producto of productos.productsCards) {
                productsData.push(producto);
            }
            return productsData
        })
        .catch(error => {
            console.log(error);
        })
}

function GetHtmlProducts(productos) {
var cardProductoHtmlBase =
        `
    <div class="col-xs-12 col-md-4  d-flex justify-content-center" >
        <div class="card cardCatalogo">
            <img class="card-img-top img-fluid"
                src=@IMG
                alt="Card image cap">
            <div class="card-block" >
                <!-- INPUT PARA USAR EN EL CARRITO Y AGREGAR AL LOCAL STORAGE -->
                <input id="valor@@IDPRODUCTO"  type="hidden" value='@object'>
                <h3 class="card-title cardProductoT">@NOMBRE</h3>
                <h4 class="card-subtitle cardProductoST">@DESCRIPCION</h4>
                <h3>$@PRECIO</h3>
                <button class="btnprimary cardProductoBTN" onclick="agregarAlCarrito(@IDPRODUCTO)">Agregar al carrito</button>
            </div>
        </div>     
    </div>    
    `;
    var cardProuctosRes = "";
    for (let item of productos) {
        cardProuctosRes += cardProductoHtmlBase.replace(/@IMG/g, item.path)
            .replace(/@NOMBRE/g, item.marca)
            .replace(/@DESCRIPCION/g, item.name)
            .replace(/@PRECIO/g, item.price)
            .replace(/@object/g, JSON.stringify(item))
            .replace(/@IDPRODUCTO/g, item.idProduct);
    }
    debugger;
    return cardProuctosRes;
}

function getHtmlPaginadores (products){
    var htmlPaginador = 
        `<div class="col-md-12  paginas d-flex justify-content-center">
            <ul class="pagination ">
                <li class="page-item"><a class="page-link" onclick = "previusPage()">Anterior</a></li>
                @Numbers
                <li class="page-item"><a class="page-link" onclick = "nextPage()">Siguiente</a></li>
            </ul>                          
        </div>`
    var pagNumber =`<li class="page-item"><a class="page-link" onclick = "goToPage(@pagina)">@pagina</a></li> `
    var aux = '';
    var pages = quantityPaginador(products);
    console.log(pages);
    for (var i = 1; i <= pages; i++) {
        aux += pagNumber.replace(/@pagina/g, i);
    }
    //validación, de por si algún motivo la cantidad de paginas da 0, seteo al menos una
    if (pages == 0){
        aux = pagNumber.replace(/@pagina/g, i)
    }
    htmlPaginador = htmlPaginador.replace(/@Numbers/g,aux);
    return htmlPaginador;
}
function quantityPaginador(products){
    return Math.round(products.length / 9);
}
export { GetHtmlProducts,getHtmlPaginadores,quantityPaginador };