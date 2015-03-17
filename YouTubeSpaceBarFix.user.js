// ==UserScript==
// @name         YouTube Spacebar & Fullscreen fix
// @namespace    http://davidpetrasovic.com
// @version      0.3
// @description  make space bar and "f" work for youtube without clicking on the video first.
// @author       Dave
// @match        https://www.youtube.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function(){
    
    $(document).keypress(function(e) {
        if(!$("input").is(":focus")){
            if(e.which == 32) {//spacebar
                e.preventDefault();
                console.log($("#player .html5-video-controls .ytp-button-pause").click());
                console.log($("#player .html5-video-controls .ytp-button-play").click());
            }else if(e.which == 102){//F
                console.log($("#player .html5-video-controls .ytp-button-fullscreen-enter").click());
                console.log($("#player .html5-video-controls .ytp-button-fullscreen-exit").click());
            }
        }
    });
});