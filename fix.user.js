// ==UserScript==
// @name         Replace src with data-sco-src
// @namespace    keiaho
// @version      1.0
// @description  Replaces src attribute with data-sco-src attribute for images
// @author       Your Name
// @match        *://*.rocketnews24.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // すべての画像要素を取得する
    const images = document.querySelectorAll('img');

    // 各画像要素について処理を行う
    images.forEach(img => {
        // data-sco-src属性が存在する場合
        if (img.hasAttribute('data-sco-src')) {
            // src属性をdata-sco-src属性の値に置き換える
            img.setAttribute('src', img.getAttribute('data-sco-src'));
        }
    });

})();
