import "./index.css";
import { homePageHTML } from "./scripts/home.js";

const content = document.getElementById("content");

content.innerHTML = homePageHTML();

document.getElementById("home-btn").addEventListener("click", (event) => {
    if (!event.target.classList.contains("clicked")) {
        document.querySelector("button.clicked").classList.remove("clicked");
        event.target.classList.add("clicked");
        content.innerHTML = homePageHTML();
    }
});

document.getElementById("menu-btn").addEventListener("click", (event) => {
    if (!event.target.classList.contains("clicked")) {
        document.querySelector("button.clicked").classList.remove("clicked");
        event.target.classList.add("clicked");
        content.innerHTML = homePageHTML();
    }
});

document.getElementById("about-btn").addEventListener("click", (event) => {
    if (!event.target.classList.contains("clicked")) {
        document.querySelector("button.clicked").classList.remove("clicked");
        event.target.classList.add("clicked");
        content.innerHTML = homePageHTML();
    }
});
