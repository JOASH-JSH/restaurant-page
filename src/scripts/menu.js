import "../styles/menu.css";

export function menuPageHTML() {
    const imgSrc = require.context("../assets/images/", false, /\.webp/);

    const items = [
        { name: "Chicken fried rice", price: 50 },
        { name: "Veg fried rice", price: 35 },
        { name: "Chicken fried rice", price: 50 },
        { name: "Veg fried rice", price: 35 },
    ];

    return `
        <div class="menu-content">
            <div class="common-width">
                <h2>🍜 Menu 🍜</h2>
                <div class="items-container">
                    ${items.map((item) => generateItemHTML(item, imgSrc))}
                </div>
            </div>
        </div>
    `;
}

function generateItemHTML(item, imgSrc) {
    const imageName = item.name.toLowerCase().split(" ").join("-");

    return `
        <div class="item">
            <div class="item-image">
                <img src="${imgSrc(`./${imageName}.webp`)}" width="150"/>
            </div>
            <div class="item-price">
                <p>${item.name}</p>
                <p>Rs. ${item.price.toFixed(2)}</p>
            </div>
        </div>`;
}
