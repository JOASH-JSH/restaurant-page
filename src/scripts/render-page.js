"use strict";

// Add "HTML page" to content area  
export function renderPage(page) {
    document.getElementById("content").innerHTML = page();
}
