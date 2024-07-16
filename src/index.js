import "./index.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";

import { homePageHTML } from "./scripts/home.js";
import { menuPageHTML } from "./scripts/menu.js";
import { aboutPageHTML } from "./scripts/about.js";
import { renderPage } from "./scripts/render-page.js";

const nav = document.getElementById("nav");
const dropdownButton = document.getElementById("dropdown-button");
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

// handle navigation event
function navigationButtonEventHandler(button, renderWebpage) {
    button.addEventListener("click", (event) => {
        if (!button.classList.contains("clicked")) {
            const buttonClicked = document.querySelector("button.clicked");
            if (buttonClicked) {
                buttonClicked.classList.remove("clicked");
                button.classList.add("clicked");
                renderWebpage();
            }
        }
    });
}

// in smaller devices handles whenever user clicked outside the dropdown it closes the dropdown
document.body.addEventListener("click", (event) => {
    const target = event.target;

    if (!target.closest("#dropdown-button")) {
        if (nav.classList.contains("clicked")) {
            nav.classList.remove("clicked");
        }
    }
});

renderPage(homePageHTML);

dropdownButton.addEventListener("click", () => nav.classList.toggle("clicked"));
navigationButtonEventHandler(homeButton, renderPage.bind(renderPage, homePageHTML));
navigationButtonEventHandler(menuButton, renderPage.bind(renderPage, menuPageHTML));
navigationButtonEventHandler(aboutButton, renderPage.bind(renderPage, aboutPageHTML));
