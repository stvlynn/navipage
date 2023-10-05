document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const icon = document.querySelector("#theme-toggle i");
    document.getElementById("theme-toggle").addEventListener("click", function() {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            icon.className = "fa-solid fa-moon";
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            icon.className = "fa-regular fa-sun";
        }
    });

    const hour = new Date().getHours();
    body.classList.add(hour >= 7 && hour < 19 ? "light-mode" : "dark-mode");

    const main = document.querySelector("main");
    
    document.querySelector("header h1").textContent = siteConfig.siteHeader;
    
    const footerContent = `${siteConfig.footer.copyright} | ${siteConfig.footer.icp}`;
    document.querySelector("footer p").textContent = footerContent;
    
    if (siteConfig.backgroundImage) {
        body.style.backgroundImage = "url('img/background.jpg')";
    }
    
// ... [前面的代码不变] ...

siteConfig.categories.forEach(category => {
    const section = document.createElement("section");
    
    const h2 = document.createElement("h2");
    h2.textContent = category.title;
    section.appendChild(h2);

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    category.links.forEach(link => {
        const card = document.createElement("a");
        card.href = link.href;
        card.className = "card";
        card.title = link.description;

        const imgContainer = document.createElement("div");
        if (link.thumbnail) {
            const img = document.createElement("img");
            img.src = link.thumbnail;
            imgContainer.appendChild(img);
        } else {
            const icon = document.createElement("i");
            icon.className = "fa-solid fa-sitemap";
            imgContainer.appendChild(icon);
        }
        card.appendChild(imgContainer);

        const cardText = document.createElement("div");
        cardText.className = "card-text";
        cardText.textContent = link.text;
        card.appendChild(cardText);

        const cardDescription = document.createElement("div");
        cardDescription.className = "card-description";
        cardDescription.textContent = link.description;
        card.appendChild(cardDescription);

        cardContainer.appendChild(card);
    });

    section.appendChild(cardContainer);

    const divider = document.createElement("hr");
    section.appendChild(divider);

    main.appendChild(section);
});
});

