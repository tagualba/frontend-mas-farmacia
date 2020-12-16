import { normalized, redirect } from '../utils/utils.js';
import { setLsnotEncrypted } from '../utils/storage.js';
window.search = search;
function search(value) {
    var valueNormalized = normalized(value);
    setLsnotEncrypted("search", valueNormalized);
    redirect('/views/CatalogoView.html');
}
window.goTo = goTo;
function goTo(value) {
    console.log(value.innerText)
    var valueNormalized = normalized(value.innerText.replace(/ /g, ""));
    setLsnotEncrypted("search", valueNormalized);
    redirect('/views/CatalogoView.html');
}

export { search }