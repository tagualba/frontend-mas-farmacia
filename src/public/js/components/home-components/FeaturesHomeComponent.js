import { RenderComponent } from '../utils/renderUtil.js';
//import { agregarAlCarrito } from '../Function-Multiples-Scopes/FunctionsCarrito.js';
function RenderFeatures()
{    
   fetch('data/featuredInfo.json')
        .then(data => data.json())
        .then(data => 
        {
            var contenidoJson = [];
            for (var dat of data) 
            {
                contenidoJson.push(dat);
            }
            var renderHTML = GetHtmlItemsCardsHome(contenidoJson);
            RenderComponent("#FeaturedHome",renderHTML);            
        })
        .catch(error => 
        {
            console.log(error);
        })
}

function GetHtmlItemsCardsHome(items)
{
    var carruselDestacadosHtmlBase = 
    `
    <div class="container-fluid">
        <div class="row" >        
            <div class="col-sm-1 d-none d-sm-none d-md-block flechitaCardsLeft">
                <a  id="prevCarrusel@ID" onClick="ClickToId('nextCarruselCardButton@ID')">
                    <img src="/resources/FlechitaIzquierda.jpg"/>
                </a>
            </div>                
        
            <div class="col-sm-10">                                        
                <div id="carouselHome@ID" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">    
                        @ITEMS                        
                    </div>
                </div>                            
            </div>
            <a class="carousel-control-prev" href="#carouselHome@ID" id="nextCarruselCardButton@ID" role="button"
                data-slide="prev" hidden>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselHome@ID" id="prevCarruselCardButton@ID" role="button"
                data-slide="next" hidden>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            <div class="col-sm-1 d-none d-sm-none d-md-block flechitaCardsRight">
                <a  id="nextCarruselCards@ID" onClick="ClickToId('prevCarruselCardButton@ID')">
                    <img src="/resources/FlechitaDerecha.jpg"/>
                </a>
            </div>                
        </div>    
    </div>
    `;

    var itemCarouselHtmlBase = 
    `
    <div class="carousel-item @ACTIVE ">
        <br>
        <h5 class="TituloProductosDestacados">@NOMBRE</h5>
        <hr class="separator1">
        <div class='row'>
            @CARDS
        </div>
    </div>
    `;

    var cardCarouselHtmlBase =
    `
    <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
        <div class="card cardProducto">
            <img class="card-img-top img-fluid"
                src="@PATH"
                alt="Card image cap">
            <div class="card-block">
                <input id="valor@@ID"  type="hidden" value='@object'>
                <h3 class="card-title cardProductoT">@NOMBRE</h3>
                <h4 class="card-subtitle cardProductoST">@DESCRIPCION</h4>
                <h3>$@PRECIO</h3>
                <button id="botonCardDestacado@ID" class='btnprimary cardProductoBTN'  onclick="agregarAlCarrito(@ID)" >Agregar al carrito</button>
            </div>
        </div>
    </div>
    `;

    var carruselesResponse = "";    
    var contId= 0;
    for(var feature of items)
    {
        
        var subIdCont = 0;
        var carruselFeatureAux = "";
        for(var item of feature)
        {
            var cardsHtml ="";
            for(var card of item.items)
            {
                var aux = cardCarouselHtmlBase.replace(/@PATH/g,card.path).replace(/@NOMBRE/g,card.name).replace(/@DESCRIPCION/g, card.description).replace(/@PRECIO/g,card.price).replace(/@ID/g,card.id).replace(/@object/g,JSON.stringify(card));
                cardsHtml += aux;
            }
            carruselFeatureAux += itemCarouselHtmlBase.replace(/@CARDS/g, cardsHtml).replace(/@ACTIVE/g,subIdCont == 0 ? "active" : "").replace(/@NOMBRE/g,item.tittleFeatured);
            subIdCont++;
        }

        carruselesResponse += carruselDestacadosHtmlBase.replace(/@ID/g, contId ).replace(/@ITEMS/g,carruselFeatureAux);        
        contId++;
    }
    return carruselesResponse;
    
}

export {RenderFeatures};