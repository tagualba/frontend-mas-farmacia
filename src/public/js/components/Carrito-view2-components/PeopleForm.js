function form (){
   return `<section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <br>
                    <p class="catalogoTitulo"><a href="/">Home</a> / Carrito</p>
                    <hr class="separator1">
                    <br>
                </div>
            </div>

        </div>

        <div class="container">
            <!--ordenar por-->
            <div class="row">
                <div class="col-md-12">
                    <p class="subTituloCarrito">02. Complete sus datos</p>
                </div>
            </div>
            <hr class="separator1">
            <form id = "Form">
                @INPUTS
            </form>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <input class="form-check-input" type="checkbox" id="@ID" >
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <hr class="separator1">
                    <!--DownBar Carrito-->
                    <div class="row downBarCar">
                        <div class="col-xs-12 col-md-6  botonDownBar1">
                            <button type="button" class=" btn botonCustomCarrito " onclick="redirect('/views/CatalogoView.html')">Agregar mas productos</button>
                            <br><br> 
                        </div>
                        <div class="col-xs-12 col-md-6 botonDownBar2">
                            <button type="button" class=" btn botonCustomCarrito" onclick="checkInputs()">Siguiente Paso</button>
                        </div>
                    </div>
                    <br>
                    <hr class="separator1">
                </div>
            </div>
        </div>
        </div>
    </section>`;
}

function inputs() {
    var dom = `
    <div class="form-row">
        <div class="form-group col-md-6" >
            <label class="labelCustom" for="@valor">@valor</label>
            <input type="text" class="form-control" id="@valor" placeholder="@valor" required>
            <!--small>Error message</small-->
        </div>
        <div class="form-group col-md-6">
            <label class="labelCustom" for="@otraCosa">@otraCosa</label>
            <input type="text" class="form-control" id="@otraCosa" placeholder="@otraCosa" required>
            <!--small>Error message</small-->
        </div>
    </div>
    `
    return dom;
}
function inputBig() {
    var dom = `
    <div class="form-group col-md-16">
        <label for="InformacionAdicional">Informacion Adicional</label>
        <textarea class="form-control focus" id="InformacionAdicional" rows="3"></textarea> <!-- rows indentifica cuanto va a usar de alto -->
    </div>
    `
    return dom;
}


export {inputs,inputBig,form};