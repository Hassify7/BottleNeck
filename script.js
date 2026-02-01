// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (hamburger && navbarMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navbarMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                navbarMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarMenu && hamburger) {
                navbarMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
});
