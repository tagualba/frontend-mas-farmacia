function loadLs(key) {
    //valido que haya algo en el localstorage para renderizar el carro;
    let ls = localStorage.getItem(key);
    if (ls == null) {
        return null;
    }
    else {
        var decrypted = CryptoJS.AES.decrypt(ls, "LOCK");
        console.log(JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)));
        return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    }
}
function setLs(key, variableValor) {
    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(variableValor), "LOCK");
    localStorage.setItem(key, encrypted);
}
function setLsnotEncrypted(key, variableValor) {
    localStorage.setItem(key, variableValor);
}
function removeLs(key) {
    localStorage.removeItem(key);
}
function loadLsNotEncrypted (key){
    let ls = localStorage.getItem(key);
    if (ls == null) {
        return null;
    }
    return ls
}
export { setLs, loadLs, removeLs, setLsnotEncrypted,loadLsNotEncrypted };