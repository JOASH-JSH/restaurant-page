export function homePageHTML() {
    const imgSrc = require.context("../assets/images", false, /\.webp/);

    return `
        <div class="home-content common-width">
            <div class="hero-text-container">
                <p class="hero-text-1">Welcome to Rice Delightful!</p>
                <img 
                    src="${imgSrc("./home-fried-rice-bowl.webp")}" 
                    alt="home-fried-rice-bowl" 
                    class="home-fried-rice-bowl"
                    width="125"
                />
                <h2 class="hero-text-2">Where Every Grain is a Joy</h2>
                <p class="hero-text-3">
                    Indulge in our perfectly crafted fried rice dishes,
                    made with love and the finest ingredients. From
                    classic favorites to exciting new flavors, each bite
                    is a celebration of taste and tradition. Come and
                    experience the delightful world of rice at Rice Delightful!
                </p>
                <button id="explore-btn">explore</button>
            </div>
        </div>
    `;
}
