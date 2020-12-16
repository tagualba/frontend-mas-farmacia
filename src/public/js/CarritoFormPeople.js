import { RenderHeader } from './components/header-components/HeaderComponent.js';
import {loadInputs,RenderForm} from './components/Carrito-view2-components/PeopleCarrito.js';
import { RenderFooter } from './components/home-components/FooterComponent.js';
window.onload = function()
{
    debugger;
    RenderHeader();   
    RenderForm();
    loadInputs();
    RenderFooter();
}