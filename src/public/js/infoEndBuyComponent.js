import { RenderHeader } from './components/header-components/HeaderComponent.js';
import { RenderFooter } from './components/home-components/FooterComponent.js';
import { getParameterByName} from './components/utils/utils.js';
import { removeLs,loadLs} from './components/utils/storage.js';
import {renderForm} from './components/End-buy-components/EndBuyComponent.js';
window.onload = async function()
{    
   await  RenderHeader();   
   
    // if (data.status == statusValue.APPROVED){
    //     removeLs("people");
    //     removeLs("carrito");
    // }
    await renderForm();
    RenderFooter();
}
const statusValue = {
    APPROVED: 'approved'
}