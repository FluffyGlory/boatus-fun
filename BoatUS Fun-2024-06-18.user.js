// ==UserScript==
// @name         BoatUS Fun
// @namespace    http://tampermonkey.net/
// @version      2024-06-18
// @description  A fun script that makes the BoatUS course a little faster
// @author       You
// @match        https://cdn.kencookpartners.com/courseplayer/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kencookpartners.com
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
function sleepp(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function removeDisabledClass() {
        await sleepp(40000);
        // Continuously check and remove the class if present
        while (1 == 1) {
            // Remove the disabled class
            console.log(document.querySelector("#forwardButton"));
            document.querySelector("#forwardButton.navbar-link").classList = "navbar-link";

            // Wait for 1 second before the next check
            await sleepp(500);
        }
    }

    removeDisabledClass();
})();