// ==UserScript==
// @name         enable copy lyric in uta-net.com
// @namespace    https://github.com/stm7128/userscripts/
// @version      1.0
// @description  uta-net.comにおいて歌詞をコピーできるようにする
// @author       stm7128
// @match        *://*.uta-net.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var kashiAreaDiv = document.getElementById('kashi_area');
    if (kashiAreaDiv) {
        kashiAreaDiv.removeAttribute('id');
    }
})();
