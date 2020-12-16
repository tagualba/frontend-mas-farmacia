function getForm() {
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
                     <p class="subTituloCarrito">04. Pago del pedido</p>
                 </div>
            </div>
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
                    <!--DownBar Carrito-->
                    <hr class="separator1">
                    <br>
                </div> 
        </div>
        @DELIVERY
        <hr class="separator1">
        @PAGO
         <hr class="separator1">
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
                             <div class="col-xs-12 col-md-6 botonDownBar2" id="prueba">
                                
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
function getProductsForm() {
    return `
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
                    <h4 id="cantidades@@PRODUCTOID"> @CANTIDAD </h4>
                </div>
            </div>
        </td>
        <td>
            <h4 id="totales@@PRODUCTOID">$@TOTAL </h4>
        </td>
    </tr><!--esto-->
    </tbody>
    `
}
function getDelivery() {

    return ` 
        <div class="row">
            <div class="col-md-4">
                
            </div>   
            <div class="col-md-4">
                
                
            </div>   
            <div class="col-md-4">
                <h4> Total&nbsp;de&nbsp;los&nbsp;productos:&nbsp;&nbsp;&nbsp;$@TOTALPRODUCTOS</h4> 
                <hr>
            </div>  
        </div>
        <br>
        <br>
        <div class="row">
            <div class="col-md-4">
                <h4>Envio seleccionado:</h4> 
            </div>
            <div class="col-md-4  label" >
                <label class="form-check-label" >
                    Direccion de la sucursal 123 <br>
                    Tel: 0800-222-1917
                 </label>
            </div>
            <div class="col-md-4  label">
                
                <label class="form-check-label" >
                    ¡Gratis!
                </label>
            </div>
        </div>
        <br>
        <br>
        
        `
}

function getMethodPay() {
    return ` 
    <div class="row">
        <div class="col-md-4">
            
        </div>   
        <div class="col-md-4">
            
            
        </div>   
        <div class="col-md-4">
            <h4> Total&nbsp;con&nbsp;envio:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1548</h4> 
            <hr>
        </div>   
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-md-4">
            <h4>Metodo de pago</h4> 
        </div>   
        <div class="col-md-4">
        </div>   
        <div class="col-md-4">
            @CHECKS
        </div> 
    </div>
    <div class="row">
        <div class="col-md-4">
           
            <label class="form-check-label" >
            Click en el metodo de pago seleccionado
            para finalizar la compra
             </label>
        </div>
        <div class="col-md-4  label" >
            <label class="form-check-label" >
               
             </label>
        </div>
        <div class="col-md-4  label">
            
        </div>
    </div>
    <br>
    <br>
    
    `

}
function getCheck() {
    return `  
    <form id ="f1">                                          
    <div class="form-check">
        <hr>
        <div class="custom-control form-control-lg custom-checkbox">  
            <img src="../resources/ico_mercadoLibre.jpg" alt="Mercado Pago" title=" Mercado Pago " width="40" height="27">
            <input type="checkbox" value="@IDSUBCATEGORIA" onchange="createButtonPay()" class="custom-control-input checkBoton" id="SubCategoriaCheckBox@IDSUBCATEGORIA">  
                <label class="custom-control-label" for="SubCategoriaCheckBox@IDSUBCATEGORIA">
                <h4 for="SubCategoriaCheckBox@IDSUBCATEGORIA">Mercado Pago</h4>  
                </label>  
        </div>  
    </div>
        <hr>
    </form>    
            `
}

function getButtonMp(id) {
    return `
            <a   href="${id}" target="/views/EndBuyView.html">        
                <button type="button" class=" btn botonCustomCarrito ">Pagar</button>
            </a>        
        `
}

export { getForm, getProductsForm, getDelivery, getMethodPay, getCheck, getButtonMp }