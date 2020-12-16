import { RenderHeader } from './components/header-components/HeaderComponent.js';
import {renderDetails} from './components/Carrito-view4-components/DetailsEndsales.js';
import { RenderFooter } from './components/home-components/FooterComponent.js';
window.onload = function()
{
    RenderHeader();   
    renderDetails();
    RenderFooter();
}