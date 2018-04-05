// ==UserScript==
// @name         Colon Checker
// @version      1.0
// @description  Bug fix (especially [wiki] tag)
// @author       apple502j
// @match        https://en.scratch-wiki.info/w/index.php?search=*
// @match        https://en.scratch-wiki.info/wiki/Special:Search?search=*
// ==/UserScript==

function checkColon(e){
    var nameColon = decodeURIComponent(document.URL);
    nameColon = nameColon.replace("%3A",":").replace("%3a",":");
    location.href = nameColon;
}

window.addEventListener("load",checkColon);
