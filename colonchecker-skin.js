function checkColon(e){
    var nameColon = decodeURIComponent(document.URL);
    if (document.domain != "en.scratch-wiki.info" || mw.config.get("wgPageName") != "Special:Search"){
        return;
    }
    if (nameColon.toLowerCase().indexOf("%3a") > -1){
        nameColon = nameColon.replace("%3A",":").replace("%3a",":");
        location.href = nameColon;
    }
}

window.addEventListener("load",checkColon);
