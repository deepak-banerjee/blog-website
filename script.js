// ---------------------------
// NAVBAR TOGGLE (MOBILE MENU)
// ---------------------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-links");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });

  // Close menu after clicking a link
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// ---------------------------
// DARK / LIGHT THEME TOGGLE
// ---------------------------
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  if (themeToggle) themeToggle.textContent = "☀️";
} else {
  body.classList.remove("dark");
  if (themeToggle) themeToggle.textContent = "🌙";
}

// Toggle theme button
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });
}

// ---------------------------
// FOOTER YEAR AUTO UPDATE
// ---------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
