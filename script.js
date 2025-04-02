// 🌟 Animate Timeline on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function checkTimeline() {
        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkTimeline);
    checkTimeline();
});

// 🍽️ Menu Filtering
const menuTabs = document.querySelectorAll(".menu-tab");
const menuList = document.getElementById("menu-list");

const menuItems = {
    "hot-drinks": [
        "☕ Espresso",
        "🍵 Matcha Latte",
        "☕ Cappuccino",
        "☕ Mocha"
    ],
    "cold-drinks": [
        "🧊 Iced Latte",
        "🍹 Cold Brew",
        "🧃 Fresh Juices",
        "🥤 Frappuccino"
    ],
    "desserts": [
        "🍰 Cheesecake",
        "🥐 Croissant",
        "🍩 Donuts",
        "🧁 Cupcakes"
    ]
};

function updateMenu(category) {
    menuList.innerHTML = "";
    menuItems[category].forEach((item) => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = item;
        menuList.appendChild(div);
    });
}

menuTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
        menuTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
        updateMenu(this.dataset.category);
    });
});

// Load default menu category
updateMenu("hot-drinks");

// 🎶 Smooth Event Scrolling
const eventCarousel = document.querySelector(".events-carousel");

eventCarousel.addEventListener("wheel", (e) => {
    e.preventDefault();
    eventCarousel.scrollBy({
        left: e.deltaY > 0 ? 200 : -200,
        behavior: "smooth"
    });
});

// 📸 Instagram Feed (Placeholder for API)
const instagramFeed = document.querySelector(".instagram-feed");

for (let i = 1; i <= 6; i++) {
    const img = document.createElement("img");
    img.src = `https://source.unsplash.com/random/150x150?cafe,coffee,food&sig=${i}`;
    instagramFeed.appendChild(img);
}
document.querySelectorAll('.community-gallery img').forEach(img => {
    img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${this.src}" alt="${this.alt}">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        document.querySelector('.close').addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

