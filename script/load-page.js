const htmlFolder = "/html";
const startPageUrl = htmlFolder.concat("/home.html");

$(function() {
    $(".nav-link").removeClass("active");
    $(".nav-link[href=\"".concat(window.location.pathname, "\"]")).addClass("active");
    
    $("main").load(getPageContentUrl());

    $(".copyright").html("&copy; ".concat(new Date().getUTCFullYear(), ", den-quanten-blitzer.de"));
})

function getPageContentUrl() {
    if (window.location.pathname != "/") {
        return htmlFolder.concat(window.location.pathname, ".html");
    } else {
        return startPageUrl;
    }
}