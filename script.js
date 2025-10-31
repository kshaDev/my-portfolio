// 🌙 Theme toggle (Light ↔ Dark)
const themeBtn = document.getElementById("themeToggle");
const themeIcon = themeBtn.querySelector("i");

// If the user changed theme before, remember it
let currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
updateIcon(currentTheme);

// Change theme when the button is clicked
themeBtn.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
  currentTheme = newTheme;
});

// Function to update the theme icon
function updateIcon(theme) {
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// 🧭 Smooth scroll when any nav link is clicked
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ✉️ Contact form validation
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields before submitting!");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xgvpnqlb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert(`Thanks ${name}! Your message has been sent successfully.`);
        contactForm.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection.");
    }
  });
}

console.log("✅ Contact form connected with Formspree successfully!");


