export function homePageHTML() {
    const imgSrc = require.context("../assets/images", false, /\.webp/);

    return `
        <div class="home-content">
            <div>
                <img class="hero-chef-image" src="${imgSrc("./chef-1.webp")}" ait="chef-image" />
            </div>
            <div>
                <p class="hero-text-1">Welcome to Rice Delightful!</p>
            </div>
            <div>
                <h2 class="hero-text-2">Where Every Grain is a Joy</h2>
            </div>
            <div>
                <p class="hero-text-3">
                    Indulge in our perfectly crafted fried rice dishes,
                    made with love and the finest ingredients. From
                    classic favorites to exciting new flavors, each bite
                    is a celebration of taste and tradition. Come and
                    experience the delightful world of rice at Rice Delightful!
                </p>
            </div>
            <div>
                <button id="explore-btn">explore</button>
            </div>
        </div>
    `;
}
