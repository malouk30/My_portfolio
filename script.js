document.addEventListener('DOMContentLoaded', () => {
    // Navigation smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Effet de parallaxe pour le header
    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.header-parallax');
        let scrollPosition = window.pageYOffset;
        parallax.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
    });

    // Animation des cartes de projet au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.project-card').forEach((card) => {
        observer.observe(card);
    });

    // Gestion du formulaire de contact
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Ajoutez ici votre logique d'envoi de formulaire
        alert('Message envoyé !');
        form.reset();
    });
});
