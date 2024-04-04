// ==UserScript==
// @name         fixrocketnewsimgload
// @namespace    https://github.com/stm7128/fixrocketnewsimgload
// @version      1.0
// @description  Rocketnews24の記事の画像において特に遅いネットワークでしばらく灰色の物が表示されることがある問題の改善
// @author       stm7128
// @match        *://*.rocketnews24.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.hasAttribute('data-sco-src')) {
            img.setAttribute('src', img.getAttribute('data-sco-src'));
        }
    });

})();
