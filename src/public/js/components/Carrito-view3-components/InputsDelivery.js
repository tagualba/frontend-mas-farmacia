function getForm (){
   return ` 
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
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="subTituloCarrito">03. Selección metodo de envio</p>
                </div>
            </div>
            <hr class="separator1">
                <form id ="f1">
                    @DIVSCHECKS
                <form >
            <br>
            
            <div class="row">
                <div class="col-lg-12">
                    <!--DownBar Carrito-->
                    <div class="row">
                    <div class="col-lg-12">
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
                    <br>
                </div>
            </div>
        </div>
        </div>
        <!--productos-->
    </section>`
}

function getChecks (){
 return   `      
 
    <div class="row">
        <div class="col-md-4">
            <div class="form-check" onclick="inchoiceCheck(@ID)">
                <input class="form-check-input" type="checkbox" id="@ID" >
                <label  for="@ID" text-align="left" >
                    @OPCIONDERETIRO
                </label>
            </div>
        </div>
        <div class="col-md-4  label" >
            <label class="form-check-label" for="@ID" onclick="inchoiceCheck(@ID)">
                @DIRECCIONYTELEFONOCONBR
            </label>
        </div>
        <div class="col-md-4  label" >
            <label class="form-check-label" for="@ID"class="label" onclick="inchoiceCheck(@ID)">
                @CARGODELENVIO
            </label>
        </div>
    </div>
        <hr class="separator1"></hr>`

}
export {getChecks,getForm}