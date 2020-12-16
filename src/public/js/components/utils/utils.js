window.redirect = redirect;
function redirect(url) {
    window.location.href = url;
}

function normalized(string) {
    var normal = string.toLowerCase();
    //elimino caracteres especiales.
    normal = normal.replace(/[^a-zA-Z 0-9.]+/g, "");
    return normal;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


export { redirect,normalized,getParameterByName };