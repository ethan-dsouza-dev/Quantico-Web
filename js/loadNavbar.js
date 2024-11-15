// loadNavbar.js
document.addEventListener("DOMContentLoaded", function() {
    // Determine the correct path to navbar.html based on the current location
    const pathToNavbar = window.location.pathname.includes('/pages/')
        ? "../../navbar.html"  // For pages within the /pages/ directory
        : "navbar.html";       // For the root index.html page

    fetch(pathToNavbar)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error("Error loading navbar");
        })
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error(error));
});