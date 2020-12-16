import { getForm, getChecks } from './InputsDelivery.js';
import { RenderComponent } from '../utils/renderUtil.js';
import { loadLs, setLs, removeLs } from '../utils/storage.js';
import { PersonaEntity } from '../../Entitys/PersonaEntity.js';
import {redirect} from '../utils/utils.js';
function renderForm() {
    var form = getForm();
    var checks = getChecks();
    var dom = "";
    var aux = '';
    for (var i = 0; i < 3; i++) {
        aux = checks.replace(/@ID/g, i);
        aux = aux.replace(/@OPCIONDERETIRO/g, "Retiro en sucursal Urquiza")
        aux = aux.replace(/@DIRECCIONYTELEFONOCONBR/g, "Direccion de la sucursal 123 <br> Tel: 0800-222-1917")
        aux = aux.replace(/@CARGODELENVIO/g, "Gratis!")
        dom += aux;
    }
    form = form.replace(/@DIVSCHECKS/g, dom)
    RenderComponent("#inputs", form);
}

window.inchoiceCheck = inchoiceCheck;
function inchoiceCheck(idCheck) {
    var f1 = document.getElementById("f1");
    for (var i = 0; i < f1.elements.length; i++) {
        if (f1.elements[i].type == "checkbox") {
            if (f1.elements[i].id != idCheck) {
                f1.elements[i].checked = 0
            }
        }
    }
}
window.checkInputs = checkInputs;
function checkInputs() {
    var values = [];
    values = loadLs("people");
    removeLs("people");
    var checked = isChecked();
    var idEnvio = getCheckID();
    if (checked) {
                      //new PersonaEntity(nombre, apellido, dni, email, direccion, piso, localidad, provincia, codPostal, telefono, infoAdicional, null,nroCasaValue)
        var persona = new PersonaEntity(values.nombre, values.apellido, values.dni, values.email, values.direccion, values.piso, values.localidad, values.provincia, values.codPostal, values.telefono, values.infoAdicional, idEnvio,values.nroCasa)
        setLs("people",persona);
        redirect('/views/CarritoDetailsSaleView.html');
    } else{
        //terminar
        return alert("seleccione un envio")
    }

}

function getCheckID() {
    var f1 = document.getElementById("f1");
    for (var i = 0; i < f1.elements.length; i++) {
        if (f1.elements[i].type == "checkbox") {
            if (f1.elements[i].checked == 1) {
                return f1.elements[i].id;
            }
        }
    }
}
function isChecked() {
    var checked;
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
export { renderForm };