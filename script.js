// // Theme Toggle Functionality
// const themeToggle = document.getElementById('themeToggle');
// const themeIcon = themeToggle.querySelector('i');

// // Check for saved theme preference or default to light theme
// const currentTheme = localStorage.getItem('theme') || 'light';
// document.documentElement.setAttribute('data-theme', currentTheme);
// updateThemeIcon(currentTheme);

// themeToggle.addEventListener('click', () => {
//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//     updateThemeIcon(newTheme);
// });

// function updateThemeIcon(theme) {
//     if (theme === 'dark') {
//         themeIcon.className = 'fas fa-sun';
//     } else {
//         themeIcon.className = 'fas fa-moon';
//     }
// }

// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
        
//         if (targetElement) {
//             const headerHeight = document.querySelector('.navbar').offsetHeight;
//             const targetPosition = targetElement.offsetTop - headerHeight;
            
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Navbar Background Change on Scroll
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 100) {
//         navbar.style.backgroundColor = 'var(--surface-color)';
//         navbar.style.backdropFilter = 'blur(10px)';
//     } else {
//         navbar.style.backgroundColor = 'var(--surface-color)';
//         navbar.style.backdropFilter = 'none';
//     }
// });

// // Form Submission
// const contactForm = document.querySelector('.contact-form');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Get form data
//     const formData = new FormData(contactForm);
//     const name = contactForm.querySelector('input[type="text"]').value;
//     const email = contactForm.querySelector('input[type="email"]').value;
//     const message = contactForm.querySelector('textarea').value;
    
//     // Simple validation
//     if (!name || !email || !message) {
//         alert('Please fill in all fields');
//         return;
//     }
    
//     // Here you would typically send the data to a server
//     // For now, we'll just show a success message
//     alert('Thank you for your message! I\'ll get back to you soon.');
//     contactForm.reset();
// });

// // CTA Button Scroll to Projects
// const ctaButton = document.querySelector('.cta-button');
// ctaButton.addEventListener('click', () => {
//     const projectsSection = document.getElementById('projects');
//     const headerHeight = document.querySelector('.navbar').offsetHeight;
//     const projectsPosition = projectsSection.offsetTop - headerHeight;
    
//     window.scrollTo({
//         top: projectsPosition,
//         behavior: 'smooth'
//     });
// });

// // Add animation on scroll
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// // Observe elements for animation
// document.querySelectorAll('.skill-card, .project-card, .stat').forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(20px)';
//     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     observer.observe(el);
// });

// // Simple typing effect for hero section
// const heroTitle = document.querySelector('.hero-content h1');
// const originalText = heroTitle.textContent;
// let charIndex = 0;

// function typeWriter() {
//     if (charIndex < originalText.length) {
//         heroTitle.textContent = originalText.substring(0, charIndex + 1);
//         charIndex++;
//         setTimeout(typeWriter, 100);
//     }
// }

// // Start typing effect when page loads
// window.addEventListener('load', () => {
//     setTimeout(typeWriter, 1000);
// });

// // Add loading animation
// window.addEventListener('load', () => {
//     document.body.style.opacity = '0';
//     document.body.style.transition = 'opacity 0.5s ease';
    
//     setTimeout(() => {
//         document.body.style.opacity = '1';
//     }, 100);
// });

// // Skills progress animation (visual representation)
// document.querySelectorAll('.skill-card').forEach((card, index) => {
//     card.addEventListener('mouseenter', () => {
//         card.style.transform = 'translateY(-10px) scale(1.05)';
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'translateY(0) scale(1)';
//     });
// });

// // Mobile menu toggle (for future enhancement)
// function toggleMobileMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }

// console.log('Portfolio website loaded successfully!');

// // 🌙 Theme toggle (light ↔ dark)
// const themeButton = document.getElementById('themeToggle');
// const themeIcon = themeButton.querySelector('i');

// // Check saved theme in browser (agar user ne pehle dark/light kiya ho)
// let currentTheme = localStorage.getItem('theme') || 'light';
// document.documentElement.setAttribute('data-theme', currentTheme);
// updateIcon(currentTheme);

// // Jab button dabaye to theme change ho jaye
// themeButton.addEventListener('click', () => {
//   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//   document.documentElement.setAttribute('data-theme', newTheme);
//   localStorage.setItem('theme', newTheme);
//   updateIcon(newTheme);
//   currentTheme = newTheme;
// });

// // Theme icon change karne ka function
// function updateIcon(theme) {
//   themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
// }

// // 🧭 Smooth scroll jab nav link pe click kare
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     const target = document.querySelector(link.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   });
// });

// // 🪄 Navbar color scroll hone par change ho jaye
// window.addEventListener('scroll', () => {
//   const navbar = document.querySelector('.navbar');
//   if (window.scrollY > 100) {
//     navbar.style.backgroundColor = 'var(--surface-color)';
//     navbar.style.backdropFilter = 'blur(10px)';
//   } else {
//     navbar.style.backgroundColor = 'transparent';
//     navbar.style.backdropFilter = 'none';
//   }
// });

// // ✉️ Contact form ke liye basic validation
// const form = document.querySelector('.contact-form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const name = form.querySelector('input[type="text"]').value.trim();
//   const email = form.querySelector('input[type="email"]').value.trim();
//   const message = form.querySelector('textarea').value.trim();

//   if (!name || !email || !message) {
//     alert("Please fill all fields!");
//     return;
//   }

//   alert(`Thank you ${name}! I'll get back to you soon.`);
//   form.reset();
// });

// // 📜 "View My Work" button pe click → projects section par scroll
// const viewWorkBtn = document.querySelector('.cta-button');
// viewWorkBtn.addEventListener('click', () => {
//   document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
// });

// // 🌟 Scroll par element slow fade animation
// const elements = document.querySelectorAll('.skill-card, .project-card, .stat');
// window.addEventListener('scroll', () => {
//   elements.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       el.style.opacity = '1';
//       el.style.transform = 'translateY(0)';
//       el.style.transition = 'opacity 0.6s, transform 0.6s';
//     }
//   });
// });

// // 🔤 Typing animation for name
// const heroTitle = document.querySelector('.hero-content h1');
// const fullText = heroTitle.textContent;
// heroTitle.textContent = '';
// let index = 0;

// function typeEffect() {
//   if (index < fullText.length) {
//     heroTitle.textContent += fullText.charAt(index);
//     index++;
//     setTimeout(typeEffect, 80);
//   }
// }
// window.addEventListener('load', typeEffect);

// console.log("Portfolio website loaded successfully!");

// 🌙 Theme toggle (Light ↔ Dark)
const themeBtn = document.getElementById("themeToggle");
const themeIcon = themeBtn.querySelector("i");

// Agar user ne pehle theme change kiya ho to use yaad rakho
let currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
updateIcon(currentTheme);

// Button click hone par theme change karo
themeBtn.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
  currentTheme = newTheme;
});

// Theme icon change karne ka function
function updateIcon(theme) {
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// 🧭 Smooth scroll jab koi nav link click kare
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
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields before submitting!");
      return;
    }

    alert(`Thanks ${name}! Your message has been sent.`);
    contactForm.reset();
  });
}

console.log("✅ Simple Portfolio JS loaded successfully!");
