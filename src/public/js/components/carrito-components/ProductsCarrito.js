import { getProducts, createRenderProducts, setLs } from './ProductsCarritoComponent.js';
import { RenderComponent } from '../utils/renderUtil.js';
import {bindeo} from '../utils/binding.js';
import {redirect} from '../utils/utils.js';
import { CarritoEntity } from '../../Entitys/CarritoEntity.js';
async function RenderCarrito() {
    var carritoHtmlBase = `
    <section>
            <!--#region Imagen Header-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 ">                
                    <img src="/resources/CarritoHeader.jpg" class="img-fluid" alt="Responsive image">
                </div>
            </div>
        </div>
            <!--#endregion-->
            <!--#region CarritoComponentes-->
        <div class="container">
            <!--Titulo-->
            <div class="row">
                <div class="col-lg-12">
                    <br>
                    <p class="carritoTitulo"><a href="/">Home</a> / Carrito</p>
                    <hr class="separator1">
                </div>
            </div>
            
            <!--Tabla Carrito-->
            <!--Titulo-->
            <div class="row">
                <h3 class="TitleCarrito">01. Resumen del carrito</h2>
            </div>
            <br>
            <!--Tabla-->
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <table class="table  tablaCarrito">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Precio Unitario</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio Total</th>
                                    <th scope="col"></th>
                                    </tr>
                            </thead>
                                @Productos
                        </table>
                    </div>
                    <hr class="separator1">
                    <!--DownBar Carrito-->
                    <br><br>
                    <div class="row downBarCar">
                        <div class="col-xs-12 col-md-6  ">
                            <h4>Catalogo</h4>
                            <button type="button" class=" btn botonCustomCarrito " onclick="redirect('/views/CatalogoView.html')">Agregar mas productos</button>
                            <br><br> 
                        </div>
                                                                
                        <div class="col-xs-12 col-md-6  " id="totalCarrito1">
                            @Totals
                        </div>                          
                    </div>
                    <br>
                    <hr class="separator1">
                </div> 
            </div>
        </div>    
            <!--#endregion-->
    </section>
    `

    var render = await createRenderProducts()
    var products = getProducts();
    if (products != null) {
        var totals = getTotals(products);
        var totalCarrito =
            `<h4 id="totalCarrito">Total $${Number(totals)}</h4>
        <button type="button id="siguientePaso"  onclick="redirect('/views/CarritoFormPeopleView.html')" class=" btn botonCustomCarrito ">Siguiente Paso</button> `
        carritoHtmlBase = carritoHtmlBase.replace(/@Totals/g, totalCarrito);
    } else if (products == null) {
        carritoHtmlBase = carritoHtmlBase.replace(/@Totals/g, "");
    }
    carritoHtmlBase = carritoHtmlBase.replace("@Productos", render);
    RenderComponent("#Carrito", carritoHtmlBase);
}
//GLOBALIZAR METODO PARA OBTENER ALCANCE Y VERLO EN TODOS LADOS
// SUPER DEUDA TECNICA. SORRY NOT SORRY
window.calculo = calculo;
function calculo(idProduct, suma) {
    var product = getProducts();
    var filter = product.filter(data => data.idProduct == idProduct);
    var objeto;
    var products = product 
    for (let f of filter) {
        objeto = new CarritoEntity(f.idProduct, f.name, f.marca, f.price, f.path, f.quantity);
    }
    if (objeto.quantity > 0) {
        objeto.quantity = (suma) ? Number(objeto.quantity) + 1 : Number(objeto.quantity) - 1;
        var total = totalPorProductos(objeto.quantity, objeto.price);
    }
    if (objeto.quantity == 0) {
        product = product.filter(data => data.idProduct != objeto.idProduct);
        setLs("carrito", product);
        RenderCarrito();
    } else {
        product.filter(data => data.idProduct == idProduct ? data.quantity = objeto.quantity : data.quantity = data.quantity);
        var cantidades = document.getElementById("cantidades@" + idProduct);
        var totalProducto = document.getElementById("totales@" + idProduct);
        var totalCarrito = document.getElementById("totalCarrito");
        debugger;
        console.log(cantidades);
        //ACTUALIZA CANTIDADES DENTRO DEL - Y +
        bindeo(cantidades, objeto.quantity);
        //ACTUALIZA VALORES TOTALES DEL PRODUCTO, AGREGANDO O QUITANDO PRODUCTOS
        bindeo(totalProducto, total, true,true);
        //ACTUALIZA VALOR TOTAL DEL CARRITO ACTUAL.
        bindeo(totalCarrito, getTotals(products),true,false);
        setLs("carrito", product);

        //cargarTotalesCarrito(product);
    }
}
function getTotals(products) {
    var total = 0;
    for (let product of products) {
        total = total + product.quantity * product.price
    }
    return total;
}
//GLOBALIZAR METODO PARA OBTENER ALCANCE Y VERLO EN TODOS LADOS
// SUPER DEUDA TECNICA. SORRY NOT SORRY
window.eliminarProducto = eliminarProducto;
function eliminarProducto(idProduct) {
    var product = getProducts();
    product = product.filter(data => data.idProduct != idProduct);
    setLs("carrito", product);
    RenderCarrito();
}

function totalPorProductos(cantidad, precio) {

    return Number(cantidad) * Number(precio);
}

export { RenderCarrito, getProducts, setLs };