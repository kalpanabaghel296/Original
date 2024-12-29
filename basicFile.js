// Console message to indicate that the script file is loaded
console.log("IEMS JavaScript Loaded");

// Highlight the current page in the navigation
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});

// Simple form validation for example
function validateForm() {
    const inputField = document.getElementById("inputField");
    if (inputField.value === "") {
        alert("Please fill out the field.");
        return false;
    }
    return true;
}
