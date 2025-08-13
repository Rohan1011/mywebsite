document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector(".content");

    // Run only if on projects.html
    if (projectSection && window.location.pathname.includes("projects.html")) {
        const repoList = document.createElement("ul");
        projectSection.appendChild(repoList);

        fetch("https://api.github.com/users/Rohan1011/repos")
            .then(response => response.json())
            .then(data => {
                data
                    .filter(repo => !repo.fork) // Skip forked repos
                    .forEach(repo => {
                        const li = document.createElement("li");
                        li.innerHTML = `
                            <a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong></a>
                            <p>${repo.description || "No description available."}</p>
                        `;
                        repoList.appendChild(li);
                    });
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
                projectSection.innerHTML += `<p>Unable to load GitHub projects at this time.</p>`;
            });
    }
});
