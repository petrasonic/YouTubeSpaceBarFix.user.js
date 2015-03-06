// ==UserScript==
// @name         YouTube Spacebar & Fullscreen fix
// @namespace    http://davidpetrasovic.com
// @version      0.1
// @description  make space bar and "f" work for youtube without clicking on the video first.
// @author       Dave
// @match        https://www.youtube.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function(){
    
    $(document).keypress(function(e) {
        if(e.which == 32) {
            // enter pressed
            e.preventDefault();
            console.log($("#player .html5-video-controls .ytp-button-pause").click());
            console.log($("#player .html5-video-controls .ytp-button-play").click());
        }else if(e.which == 102){
            console.log($("#player .html5-video-controls .ytp-button-fullscreen-enter").click());
            console.log($("#player .html5-video-controls .ytp-button-fullscreen-exit").click());
        }
    });
});