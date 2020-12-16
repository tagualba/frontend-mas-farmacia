import { normalized, redirect } from '../utils/utils.js';
import { setLsnotEncrypted } from '../utils/storage.js';
window.goTo = goTo;
function goTo(value) {
    var valueNormalized = normalized(value);
    setLsnotEncrypted("search", valueNormalized);
    redirect('/views/CatalogoView.html');
}

export { search }