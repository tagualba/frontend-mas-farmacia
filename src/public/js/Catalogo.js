import { RenderHeader } from './components/header-components/HeaderComponent.js';
import { RenderCatalog } from './components/catalogo-components/CatalogComponent.js';
import { RenderFooter } from './components/home-components/FooterComponent.js';
window.onload = async function()
{    
    RenderHeader();   
    RenderCatalog();
    RenderFooter();
    filtros();        
}

function filtros(){    

        if(!( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i))){               
            document.getElementById("botonFiltro1").click();
            document.getElementById("botonMarca").click();
            document.getElementById("botonCategoria").click();
            document.getElementById("botonPrecio").click();     
            
    }
}

