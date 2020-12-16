
import { RenderCarruselHome } from './components/home-components/CarruselHomeComponent.js';
import { RenderHeader } from './components/header-components/HeaderComponent.js';
import { RenderFeatures } from './components/home-components/FeaturesHomeComponent.js';
import { RenderFooter } from './components/home-components/FooterComponent.js';
window.onload = function()
{
    RenderCarruselHome();
    RenderHeader();
    RenderFeatures();   
    RenderFooter(); 
}



