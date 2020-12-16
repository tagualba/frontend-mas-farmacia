import { RenderHeader } from './components/header-components/HeaderComponent.js';
import { RenderCarrito} from './components/carrito-components/ProductsCarrito.js';
import { RenderFooter } from './components/home-components/FooterComponent.js';
window.onload = function()
{
    RenderHeader();   
    RenderCarrito();
    RenderFooter();
}