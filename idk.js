document.addEventListener("DOMContentLoaded", () => {
       document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = "Thank you for your message! We will get back to you soon.";
        contactForm.reset();
    });
});
