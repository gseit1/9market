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

const menuTabs = document.querySelectorAll(".menu-tab");
const menuList = document.getElementById("menu-list");
const moodSelect = document.getElementById("mood");

// 📌 Sample Menu Data with Images
const menuItems = {
    "hot-drinks": [
        { name: "Espresso", ingredients: "Coffee, Water", image: "drink1.png" },
        { name: "Matcha Latte", ingredients: "Matcha, Milk, Sugar", image: "drink2.png" }
    ],
    "cold-drinks": [
        { name: "Iced Latte", ingredients: "Espresso, Milk, Ice", image: "late1.png" },
        { name: "Cold Brew", ingredients: "Coffee, Ice", image: "late2.png" }
    ],
    "brunch": [
        { name: "Avocado Toast", ingredients: "Avocado, Sourdough, Egg", image: "drink1.png" },
        { name: "Pancakes", ingredients: "Flour, Milk, Maple Syrup", image: "matcha1.png" }
    ],
    "desserts": [
        { name: "Chocolate Cake", ingredients: "Chocolate, Butter, Flour", image: "drink2.png" },
        { name: "Strawberry Cheesecake", ingredients: "Strawberries, Cream Cheese, Biscuit", image: "late1.png" }
    ]
};

// 📝 Function to Update the Menu Grid
function updateMenu(category) {
    menuList.innerHTML = "";
    menuItems[category].forEach((item) => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-info">
                <h3>${item.name}</h3>
                <p>${item.ingredients}</p>
            </div>
        `;
        menuList.appendChild(div);
    });
}

// 🎯 Event Listeners for Category Tabs
menuTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
        menuTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
        updateMenu(this.dataset.category);
    });
});

// 🎯 Event Listener for Mood Filter
moodSelect.addEventListener("change", function () {
    if (this.value === "wake-up") updateMenu("hot-drinks");
    if (this.value === "relax") updateMenu("cold-drinks");
    if (this.value === "sweet") updateMenu("desserts");
});

// 🔥 Load Default Menu on Page Load
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

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
// ☕ Vibe Generator with Animation
function generateVibe() {
    const drinks = ["Espresso", "Matcha Latte", "Pink Latte", "Iced Americano", "Chai Tea"];
    const quotes = [
        "Life happens, coffee helps.",
        "Sipping happiness, one cup at a time.",
        "Caffeine & dreams – the perfect blend.",
        "Start your day with a smile and a latte."
    ];
    const songs = [
        "☕ 'Coffee' by Sylvan Esso",
        "🎵 'Sunday Morning' by Maroon 5",
        "🎶 'Café de Flore' by Doctor Rockit",
        "🎧 'Put Your Records On' by Corinne Bailey Rae"
    ];

    // Randomly select items
    document.getElementById("drink").innerText = drinks[Math.floor(Math.random() * drinks.length)];
    document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("song").innerText = songs[Math.floor(Math.random() * songs.length)];

    // Reveal the result with animation
    let resultBox = document.getElementById("vibe-result");
    resultBox.style.display = "block";
    setTimeout(() => {
        resultBox.style.opacity = "1";
        resultBox.style.transform = "translateY(0)";
    }, 100);
}

// 📌 Add a Memory
function addMemory() {
    let input = document.getElementById("memory-input");
    let text = input.value.trim();
    
    if (text === "") return; // Ignore empty messages

    // Create a new memory note
    let memoryBoard = document.getElementById("memory-board");
    let newMemory = document.createElement("div");
    newMemory.classList.add("memory");
    newMemory.innerHTML = `
        ${text} 
        <span class="delete-btn" onclick="deleteMemory(this)">❌</span>
    `;

    // Add the memory to the board
    memoryBoard.appendChild(newMemory);
    input.value = ""; // Clear input field
}

// 🗑️ Delete a Memory
function deleteMemory(element) {
    element.parentElement.remove();
}
