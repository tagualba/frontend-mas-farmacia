
import { getProductsForm, getForm, getDelivery, getMethodPay, getCheck, getButtonMp } from './GetDetailsEndSale.js';
import { GetHtmlProducts, getHtmlPaginadores, quantityPaginador } from '../catalogo-components/ProductsCatalogComponent.js';
import { loadLs } from '../utils/storage.js';
import { RenderComponent,clearComponent } from '../utils/renderUtil.js';
import { connectToMp } from '../services/PayComponentServices.js';
import { redirect } from '../utils/utils.js';
function renderDetails() {
    var form = getForm();
    var formProducts = getProductsForm();
    var products = loadLs("carrito");
    var auxProducts = '';
    var renderProducts = '';
    var totalProductos = 0;
    var totalPorProductos = 0;
    var delivery = getDelivery();
    var pay = getMethodPay();
    var checks = getCheck()
    pay = pay.replace(/@CHECKS/g, checks)
    for (let pr of products) {
        totalProductos = pr.quantity * pr.price
        auxProducts = formProducts.replace(/@MARCA/g, pr.marca)
            .replace(/@PATH/g, pr.path)
            .replace(/@NOMBRE/g, pr.name)
            .replace(/@PRECIO/g, pr.price)
            .replace(/@CANTIDAD/g, pr.quantity)
            .replace(/@PRODUCTOID/g, pr.idProduct)
            .replace(/@product/g, pr)
            .replace(/@TOTAL/g, totalProductos);
        renderProducts += auxProducts;
        totalPorProductos += totalProductos;
    }
    delivery = delivery.replace(/@TOTALPRODUCTOS/g, totalPorProductos)
    form = form.replace(/@Productos/g, renderProducts)
        .replace(/@DELIVERY/g, delivery)
        .replace(/@PAGO/g, pay);

    RenderComponent("#detalleFinCompra", form);
}
window.createButtonPay = createButtonPay;
async function createButtonPay() {
    var isChecked = methodPayIschecked();
    //si deschequean mercado pago, oculta el boton
    if (!isChecked){
        clearComponent("#prueba")
    }
    var products = loadLs("carrito");
    let people = loadLs("people");
    let objectToPay = {
        products : getReqProducts(products),
        people : getReqPeople(people)
    }
    var jsonObject = JSON.stringify(objectToPay);
    let url = await connectToMp(jsonObject);
    let renderButton = getButtonMp(url.urlID);
    debugger;
    if(isChecked && url != undefined){
        //si está chequeado y 
        RenderComponent("#prueba", renderButton);
    }
}
function getReqProducts(products) {
    //responsable de estructurar el objeto de pago con los detalles de productos 
    var priceTotal = 0;
    var quantitys = 0; 
    for (let pr of products) {
            priceTotal = priceTotal + pr.quantity * pr.price,
            quantitys = quantitys + pr.quantity;
    }

    let product = new Object()
        product.totals = priceTotal;
        product.quantity = quantitys;
    
    return product;
}

function getReqPeople(people) {
    let objectPeople = new Object();
    objectPeople.name = people.nombre;
    objectPeople.surname = people.apellido;
    objectPeople.email = people.email;
    return objectPeople;
}
function methodPayIschecked() {
    var checked = false;
    var f1 = document.getElementById("f1");
    for (var i = 0; i < f1.elements.length; i++) {
        if (f1.elements[i].type == "checkbox") {
            if (f1.elements[i].checked == 1) {
                checked = true;
                break;
            }
        }
    }
    return checked;
}

export { renderDetails }