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
        await sleepp(4000);
        console.log(document.querySelector("#forwardButton"));
        // Continuously check and remove the class if present
        while (true) {
            try {
                const iframe = document.getElementById('course-frame');
                if (iframe) {
                    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                    const iframe2 = iframeDocument.getElementById('scormdriver_content');
                    const iframeDoc2 = iframe2.contentDocument || iframe2.contentWindow.document;
                    const forwardButton = iframeDoc2.querySelector("#forwardButton");
                    if (forwardButton) {
                        forwardButton.classList = "";
                        console.log("Successfully modified the forward button inside the iframe.");
                    } else {
                        console.log("forwardButton element not found inside the iframe.");
                    }
                } else {
                    console.log("Iframe not found.");
                }
                await sleepp(500); // Wait before checking again
            } catch (error) {
                console.log(error);
            }
        }

    }

    removeDisabledClass();
})();