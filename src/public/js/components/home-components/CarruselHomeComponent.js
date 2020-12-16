import { RenderComponent } from '../utils/renderUtil.js';

function RenderCarruselHome()
{    
   fetch('../data/homeInfo.json')
        .then(data => data.json())
        .then(data => 
        {
            var contenidoJson = [];
            for (var dat of data) 
            {
                contenidoJson.push(dat);
            }
            var renderHTML = GetHtmlItemsCarrusel(contenidoJson);
            RenderComponent("#CarruselHome",renderHTML);            
        })
        .catch(error => 
        {
            console.log(error);
        })
}

function GetHtmlItemsCarrusel(items)
{
    var carruselHomeHtmlBase = 
    `
    <div class="container-fluid">
        <div class="row carruselHome">
            <div class="col-12">
                <div id="itemCarruselHome" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators ">
                        @OL
                    </ol>
                    <div class="carousel-inner">
                        @CARRUSELITEMS
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    var olCarruselHtmlBase = 
    `
    <div data-target="#itemCarruselHome" data-slide-to="@IDITEM" class="@ACTIVE redondo">
    </div>&nbsp;
    `;
    var itemCarruselHtmlBase =
    `
    <div class="carousel-item @ACTIVE">
        <a href="@URL" id = "itemCarruselHome@IDITEM">
            <img src="@PATH" class="d-block w-100"
                alt="...">
        </a>
    </div>
    `;

    var itemsCarrusel = "";
    var olsCarrusel = "";
    var x = 0
    for(let item of items)
    {
        if(x==0)
        {
            olsCarrusel+= olCarruselHtmlBase.replace(/@ACTIVE/,"active").replace(/@IDITEM/g,item.id);
            itemsCarrusel += itemCarruselHtmlBase.replace(/@IDITEM/g,item.id).replace(/@PATH/g,item.path).replace(/@URL/g,item.url).replace(/@ACTIVE/g,"active").replace(/@/g);
            x=1;
        }
        else
        {
            olsCarrusel+= olCarruselHtmlBase.replace(/@ACTIVE/,"").replace(/@IDITEM/g,item.id);
            itemsCarrusel += itemCarruselHtmlBase.replace(/@IDITEM/g,item.id).replace(/@PATH/g,item.path).replace(/@URL/g,item.url).replace(/@ACTIVE/g,"");
        }
    }

    carruselHomeHtmlBase = carruselHomeHtmlBase.replace(/@CARRUSELITEMS/g,itemsCarrusel).replace(/@OL/g,olsCarrusel);

    return carruselHomeHtmlBase;
    
}

export {RenderCarruselHome};