document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    // Check if user has set a preference for light/dark mode in their system
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDark) {
        body.classList.add('dark-mode');
        themeToggleButton.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    // Toggle light/dark mode when user clicks the button
    themeToggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            body.classList.add('dark-mode');
            themeToggleButton.innerHTML = '<i class="fa-regular fa-sun"></i>';
        }
    });

    // Load site config from config.js
    const headerElement = document.querySelector("header h1");
    headerElement.textContent = siteConfig.headerTitle;

    const main = document.querySelector("main");

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

    // Add GitHub repo link to footer
    const footer = document.querySelector("footer");
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/stvlynn/navipage";
    githubLink.target = "_blank";  // Open link in a new tab


    const githubIcon = document.createElement("i");
    githubIcon.className = "fa-brands fa-github";
    githubLink.appendChild(githubIcon);
    
    footer.appendChild(githubLink);

    // ... [其它部分的代码不变] ...

    // Adjust footer content from config.js
    const footerText = document.createElement("span");
    footerText.textContent = siteConfig.footer.text;

    footer.insertBefore(footerText, githubLink); // Insert the text before the GitHub icon

});
