import { loadLs,setLs } from '../utils/storage.js';
import { bindeo } from '../utils/binding.js';
import { CarritoEntity } from '../../Entitys/CarritoEntity.js';
async function createRenderProducts() {
    var carritoHtmlBase = `
    <tbody id ="productos"><!--ACA TENES QUE INSERTAR CON DOOM LOS TR-->

    <tr><!--esto-->
    <td>
            <img src="@PATH" alt="..." class="img-thumbnail">   
        </td>
        <td>
            <div class="row">
                <div class="col-lg-12">
                    <h4>@MARCA</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <h9>@NOMBRE</h4>
                </div>
            </div>
        </td>
        <td>
            <h4>$@PRECIO </h4>
        </td>
        <td>
            <div class="input-group">
                <div class="input-group-prepend" >
                    <button class="botonCustomCarrito botonCarritoMM"  type="button" onclick="calculo(@PRODUCTOID,false)">-</button>
                    <h4 id="cantidades@@PRODUCTOID"> @CANTIDAD </h4>
                    <button class="botonCustomCarrito botonCarritoMM"  type="button" onclick="calculo(@PRODUCTOID,true)">+</button>
                </div>
            </div>
        </td>
        <td>
            <h4 id="totales@@PRODUCTOID">$@TOTAL </h4>
        </td>
        <td>
            <a  onClick="eliminarProducto(@PRODUCTOID)">X</a>
        </td>
    </tr><!--esto-->
    </tbody>
    `
    debugger;
    var products = getProducts();
    console.log(products)
    var auxProducts = '';
    var renderProducts = '';
    var totalProductos;
    if(products != null){
        for (let pr of products) {
            totalProductos = pr.quantity * pr.price
            auxProducts = carritoHtmlBase.replace(/@MARCA/g, pr.marca)
                .replace(/@PATH/g, pr.path)
                .replace(/@NOMBRE/g, pr.name)
                .replace(/@PRECIO/g, pr.price)
                .replace(/@CANTIDAD/g, pr.quantity)
                .replace(/@PRODUCTOID/g, pr.idProduct)
                .replace(/@product/g, pr)
                .replace(/@TOTAL/g, totalProductos);
            renderProducts += auxProducts;
        }
    }
    return renderProducts;
}

function getProducts(){
    return loadLs("carrito");
}


export {createRenderProducts, getProducts,setLs};