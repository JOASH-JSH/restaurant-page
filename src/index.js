"use strict";

/* CSS */ 
import "./index.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";

/* JAVASCRIPT */
import { homePageHTML } from "./scripts/home.js";
import { menuPageHTML } from "./scripts/menu.js";
import { aboutPageHTML } from "./scripts/about.js";
import { renderPage } from "./scripts/render-page.js";

/* GET ELEMENTS */
const nav = document.getElementById("nav");
const dropdownButton = document.getElementById("dropdown-button");
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

// HANDLER FUNCTION
// Handle rendering page dynamically when targeted page button clicked
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

// HANDLER FUNCTION
// Handle "dropdown" open and close event
function handleDropdown() {    
    dropdownButton.classList.toggle("dropdown-button-clicked");
    nav.classList.toggle("clicked");
}

renderPage(homePageHTML); // Dynamically render "home" page

// Handle event closing "dropdown" when clicked occurs outside "dropdown"
document.body.addEventListener("click", (event) => {
    if (!event.target.closest("#dropdown-button")) {
        if (nav.classList.contains("clicked")) {
            handleDropdown()
        }
    }
});

// Add Event Listeners
dropdownButton.addEventListener("click", handleDropdown);
navigationButtonEventHandler(homeButton, renderPage.bind(renderPage, homePageHTML));
navigationButtonEventHandler(menuButton, renderPage.bind(renderPage, menuPageHTML));
navigationButtonEventHandler(aboutButton, renderPage.bind(renderPage, aboutPageHTML));
