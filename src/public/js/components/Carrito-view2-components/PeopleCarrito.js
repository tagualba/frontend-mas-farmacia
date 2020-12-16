import { inputs, inputBig, form } from './PeopleForm.js';
import { RenderComponent } from '../utils/renderUtil.js';
import { loadLs, setLs } from '../utils/storage.js';
import { PersonaEntity } from '../../Entitys/PersonaEntity.js';
import { redirect } from '../utils/utils.js';
function RenderForm() {
    var divSuperior = "";
    var divInferior = "";
    var dom = ''
    for (var i = 0; i < 6; i++) {
        var input = inputs();
        var aux = "";

        switch (i) {
            case 0:
                divSuperior = "Nombre";
                divInferior = "Apellido";
                break;
            case 1:
                divSuperior = "DNI";
                divInferior = "Email";
                break;
            case 2:
                divSuperior = "Calle";
                divInferior = "Numero";
                break;
            case 3:
                divSuperior = "Piso/dpto (Opcional)";
                divInferior = "Detalles de la casa";
                break;
            case 4:
                divSuperior = "Localidad";
                divInferior = "Provincia";
                break;
            case 5:
                divSuperior = "Cod. Postal";
                divInferior = "Telefono";
                break;
        }

        aux = input.replace(/@valor/g, divSuperior);
        if (divInferior == "Piso/dpto (Opcional)") {
            aux = aux.replace(/required/g, " ");
        }
        aux = aux.replace(/@otraCosa/g, divInferior);
        dom += aux;
    }
    dom += inputBig();
    var esqueleto = form();
    dom = esqueleto.replace(/@INPUTS/g, dom);
    RenderComponent("#Form", dom);
    //var x = f();
}

function loadInputs() {
    var values = []
    values = loadLs("people");
    console.log(values);
    if (values != null) {
        document.getElementById("Nombre").value = values.nombre;
        document.getElementById("Apellido").value = values.apellido;
        document.getElementById("DNI").value = values.dni;
        document.getElementById("Email").value = values.email;
        document.getElementById("Calle").value = values.direccion;
        document.getElementById("Localidad").value = values.localidad;
        document.getElementById("Provincia").value = values.provincia;
        document.getElementById("Cod. Postal").value = values.codPostal;
        document.getElementById("Numero").value = values.Numero;
        document.getElementById("Telefono").value = values.telefono;
        document.getElementById("Piso/dpto (Opcional)").value = values.piso;        
        document.getElementById("Detalles de la casa").value = values.detalleCasa;
        
        // document.getElementById("InformacionAdicional)").value = values.infoAdicional;
    }
}
window.checkInputs = checkInputs;

function checkInputs() {
    //obtengo elementos
    var nombre = document.getElementById("Nombre");
    var apellido = document.getElementById("Apellido");
    var dni = document.getElementById("DNI");
    var email = document.getElementById("Email");
    var direccion = document.getElementById("Calle");
    var localidad = document.getElementById("Localidad");
    var provincia = document.getElementById("Provincia");
    var codPostal = document.getElementById("Cod. Postal");
    var telefono = document.getElementById("Telefono");
    var piso = document.getElementById("Piso/dpto (Opcional)");
    var nroCasa = document.getElementById("Numero");
    var infoAdicional = document.getElementById("InformacionAdicional");
    var detalleCasaValue = document.getElementById("Detalles de la casa");
    //elimino espacios en blancos 
    var nroCasaValue = nroCasa.value.trim();
    console.log(nroCasaValue);
    var nombreValue = nombre.value.trim();
    var apellidoValue = apellido.value.trim();
    var dniValue = dni.value.trim();
    var emailValue = email.value.trim();
    var direccionValue = direccion.value.trim();
    var localidadValue = localidad.value.trim();
    var provinciaValue = provincia.value.trim();
    var codPostalValue = codPostal.value.trim();
    var telefonoValue = telefono.value.trim();
    var pisoValue = piso.value.trim();
    var InformacionAdicional = infoAdicional.value.trim();
    var detalleCasa = detalleCasaValue.value.trim();
    var contErrors = 0;
    var errors = ''
    console.log(nombreValue)
    if (nombreValue === '') {
        setErrorFor(nombre, 'Password2 no debe ngresar en blanco');
        errors += 'Password2 no debe ngresar en blanco'
        contErrors++;
    }
    if (apellidoValue === '') {
        setErrorFor(apellido, 'Password2 no debe ngresar en blanco');
        contErrors++;
        errors += 'Password2 no debe ngresar en blanco'
    }
    if (dniValue === '') {
        setErrorFor(dni, 'Password2 no debe ngresar en blanco');
        contErrors++;
        errors += 'Password2 no debe ngresar en blanco'
    }
    if (emailValue === '') {
        setErrorFor(email, 'No puede dejar el email en blanco');
        contErrors++;
        errors += 'Password2 no debe ngresar en blanco'
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
        contErrors++
        errors += 'Password2 no debe ngresar en blanco'
    }
    if (direccionValue === '') {
        setErrorFor(direccion, 'Password2 no debe ngresar en blanco');
        contErrors++;
        errors += 'Password2 no debe ngresar en blanco'
    }
    if (localidadValue === '') {
        setErrorFor(localidad, 'Password2 no debe ngresar en blanco');
        contErrors++;

    }
    if (provinciaValue === '') {
        setErrorFor(provincia, 'Password2 no debe ngresar en blanco');
        contErrors++;
        errors += 'Password2 no debe ngresar en blanco'
    }
    if (codPostalValue === '') {
        setErrorFor(codPostal, 'Password2 no debe ngresar en blanco');
        contErrors++;
        errors += 'Password2 no debe ngresar en blanco'
    }
    if (telefonoValue === '') {
        setErrorFor(telefono, 'Password2 no debe ngresar en blanco');
        contErrors++;
        errors += 'Password2 no debe ngresar en blanco'
    }
    if (contErrors > 0) {
        alert(errors);
        return false
    } else {
        save(nombre.value, apellido.value, dni.value, email.value, direccion.value, piso.value, localidad.value, provincia.value, codPostal.value, telefono.value, infoAdicional.value,nroCasaValue,detalleCasa)
    }
}

function save(nombre, apellido, dni, email, direccion, piso, localidad, provincia, codPostal, telefono, infoAdicional,nroCasaValue,detalleCasa) {
    let step2 = new PersonaEntity(nombre, apellido, dni, email, direccion, piso, localidad, provincia, codPostal, telefono, infoAdicional, null,nroCasaValue,detalleCasa)
    setLs("people", step2)
    redirect('/views/CarritoFormDeliveryView.html');
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //	formControl.className = 'col-md-6 small';
    //	small.innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

export { RenderForm, loadInputs }