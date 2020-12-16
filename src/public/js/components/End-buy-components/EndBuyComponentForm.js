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
                     <p class="subTituloCarrito">05. Detalle de compra</p>
                 </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        
                    </div>
                    <!--DownBar Carrito-->
                    <hr class="separator1">
                    <br>
                </div> 
        </div>
        @PAGO
        <hr class="separator1">
        @DELIVERY
         <hr class="separator1">
             <br>
            
         </div>
         <!--productos-->
     </section>
     <br><br><br><br><br><br><br><br><br><br>
     `
}
function renderApproved() {
    return `
    <div class="row">
        <div class="col-md-12">
            <p class="subTituloCarrito">PAGO APROBADO! Su numero de referencia de Mercado Pago es: @COLLECTIONID</p>
        </div>
    </div>`
}
function renderDelivery() {
    return `
    <div class="row">
        <div class="col-md-12">
            <p >En los próximos minutos le llegará un mail con los datos de envio facturacion. Gracias por comprar en Farmacia Más</p>
        </div>
    </div>`
}
export {renderApproved,renderDelivery,getForm}