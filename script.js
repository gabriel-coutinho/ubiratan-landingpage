document.addEventListener('DOMContentLoaded', function() {
    // Smooth nav effects
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });

    // Effect for initial sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Activate initial sections
    document.querySelector('.init').style.opacity = '1';
    document.querySelector('.init').style.transform = 'translateY(0)';
    document.querySelector('.section.white-bg').style.opacity = '1';
    document.querySelector('.section.white-bg').style.transform = 'translateY(0)';
    
    // Accordeons with activations
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            accordionItem.classList.toggle('active');
        });
    });
});