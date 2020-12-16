import { RenderComponent} from '../utils/renderUtil.js';
import { PostBuyEntity } from '../../Entitys/PostBuyEntity.js';
import { BuyRequest } from '../../Entitys/BuyRequest.js';
import { getParameterByName } from '../utils/utils.js';
import { removeLs, loadLs } from '../utils/storage.js';
import { postBuy } from '../services/EndBuyComponentService.js';
import { renderApproved,renderDelivery,getForm } from './EndBuyComponentForm.js';

async function renderForm() {
    var x = getForm();
    let values = createDataPostSale();
    var htmlApproved;
    var delivery;
    let status = returnToStatusMp();
    debugger;
    if (status.status == statusValue.APPROVED) {
        let statusPost = await postBuy(values);
        cleanLocal(statusPost);
        htmlApproved = renderApproved()
        delivery = renderDelivery();
        htmlApproved = htmlApproved.replace(/@COLLECTIONID/g, status.collection_id)
        x = x.replace(/@PAGO/g, htmlApproved);
        x = x.replace(/@DELIVERY/g, delivery);
    }
    RenderComponent("#detalleFinCompra", x)
}
function cleanLocal(statusPost){
    if(statusPost.status === 200){
        // si el post, devolvió 200. Es que impacto bien contra la api.
        // paso a eliminar el almacenamiento del local.
        removeLs("carrito");
        removeLs("people");
    }
}
function createDataPostSale() {
    let buyDetails = getBuyDetails();
    let data = new Object();
    data.NewClient = transformPeopleToRequest(),
        data.TotalAmount = parseFloat(buyDetails.TotalAmount),
        data.BuyDetail = buyDetails.BuyDetail
    return data;
}
function returnToStatusMp() {
    let statusMP = {
        collection_id: getParameterByName("collection_id"),
        status: getParameterByName("status"),
        merchant_order_id: getParameterByName("merchant_order_id")
    }
    return statusMP;
}
function getBuyDetails() {
    let detailsProducts = loadLs("carrito");
    var amount = 0;
    let product = [];
    for (const value of detailsProducts) {
        amount = amount + value.price;
        product.push(new BuyRequest(value.idProduct, value.quantity));
    }
    let buyDetails = {
        TotalAmount: amount,
        BuyDetail: product
    }
    return buyDetails;
}
const statusValue = {
    APPROVED: 'approved'
}
function transformPeopleToRequest() {
    let people = loadLs("people");
    let peopleResponse = new PostBuyEntity(people.nombre, people.apellido, people.dni, 1, people.direccion, people.nroCasa,people.detalleCasa , people.localidad, people.provincia, people.codPostal, people.email, people.telefono, "")
    return peopleResponse;
}

export { renderForm }