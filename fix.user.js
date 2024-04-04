// ==UserScript==
// @name         fixrocketnewsimgload
// @namespace    https://github.com/star114514-mit/fixrocketnewsimgload/
// @version      1.0
// @description  Rocketnews24の画像においてしばらく灰色の物が表示される問題の改善
// @author       stm_int
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
