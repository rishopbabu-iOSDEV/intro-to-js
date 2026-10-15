
// fetch("github.json")
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data)
//     })
// console.log("1: Ordering Food...")
// console.log("2: While waiting, do other things...");

async function fetchData() {
    // Execution pauses here until the promise resolves
    const response = await fetch('https:api.github.com/users/rishopbabu');
    // Execution pauses here until the JSON is parsed
    const data = await response.json();
    console.log(data)
}

fetchData();


// Get Github User Profile

// const form = document.querySelector("#profile-form");
// const statusElement = document.querySelector("#status");
// const profileElement = document.querySelector("#profile");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const name = document.querySelector("#userName").value.trim();
//     if (!formValidation(name)) return;
//     fetchGitHubUserProfile(name);
// });

// async function fetchGitHubUserProfile(userName) {
//     statusElement.textContent = "Loading...";
//     profileElement.replaceChildren();

//     try {
//         const response = await fetch(`https://api.github.com/users/${encodeURIComponent(userName)}`);
//         if (response.status === 404) throw new Error("User not found.");
//         if (!response.ok) throw new Error(`GitHub API error (${response.status}).`);

//         const data = await response.json();
//         console.log(data)
//         statusElement.textContent = "";
//         renderProfile(data);
//     } catch (err) {
//         statusElement.textContent = err.message;
//     }
// }

// function renderProfile(user) {
//     const card = document.createElement("div");
//     card.className = "card";

//     const img = document.createElement("img");
//     img.src = user.avatar_url;
//     img.alt = `${user.login} avatar`;

//     const h2 = document.createElement("h2");
//     h2.textContent = user.name || user.login;

//     const login = document.createElement("p");
//     login.className = "login";
//     login.textContent = `@${user.login}`;

//     card.append(img, h2, login);

//     [user.bio, user.company, user.location].forEach((text) => {
//         if (!text) return;
//         const p = document.createElement("p");
//         p.className = "meta";
//         p.textContent = text;
//         card.append(p);
//     });

//     const stats = document.createElement("div");
//     stats.className = "stats";
//     [["Repos", user.public_repos], ["Followers", user.followers], ["Following", user.following]]
//         .forEach(([label, value]) => {
//             const item = document.createElement("div");
//             const strong = document.createElement("strong");
//             strong.textContent = value;
//             item.append(strong, label);
//             stats.append(item);
//         });

//     const link = document.createElement("a");
//     link.href = user.html_url;
//     link.target = "_blank";
//     link.rel = "noopener";
//     link.textContent = "View on GitHub";

//     card.append(stats, link);
//     profileElement.replaceChildren(card);
// }

// function showError(fieldId, show) {
//     document.querySelector(`#${fieldId}-error`).classList.toggle("show", show);
// }

// function formValidation(name) {
//     const isValid = name !== "";
//     showError("userName", !isValid);
//     return isValid;
// }




// Fetch Github and show in index.html

async function fetchGitHubUserProfile(name) {

    const container = document.querySelector("#githubCard");

    try {
        const response = await fetch(`https://api.github.com/users/${name}`);
        console.log(response);
        const user = await response.json();
        console.log(user);
        renderGithubCard(user)
    } catch(error) {
        console.error("Could not load the github activity", error);
        container.innerHTML = `<p>Could not load github right now. </p>`
    }
}



fetchGitHubUserProfile("rishopbabuuuu")

function renderGithubCard(user) {
    const container = document.querySelector("#githubCard");
    container.innerHTML = `
    <div class="github-card">
    <img src="${user.avatar_url}" alt="my github profile image" class="github-avatar">
    <h3>${user.name ? user.name : user.login}</h3>
    </div>
    `
}