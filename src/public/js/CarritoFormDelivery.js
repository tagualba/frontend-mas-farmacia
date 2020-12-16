import { RenderHeader } from './components/header-components/HeaderComponent.js';
import {renderForm} from './components/Carrito-view3-components/ChoiceDelivery.js';
import { RenderFooter } from './components/home-components/FooterComponent.js';
window.onload = function()
{
    RenderHeader();   
    debugger;
    renderForm();
    RenderFooter();
}