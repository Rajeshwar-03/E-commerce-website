// Toggle mobile menu
const toggleMenu = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute("href"));
        
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: "smooth"
        });
    });
});

// Form validation for contact page (basic example)
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        // Simple validation
        if (!name.value || !email.value || !message.value) {
            alert("Please fill out all fields.");
        } else {
            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset();
        }
    });
}

// Optional: Lazy loading images for better performance
const images = document.querySelectorAll("img");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Use data-src to lazy load images
            img.classList.remove("lazy");
            observer.unobserve(img);
        }
    });
}, options);

images.forEach(image => {
    observer.observe(image);
});
