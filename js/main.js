/*JAVASCRIPT - UNIQUEMENT DARK MODE Commit #1 */

// DARK MODE avec localStorage
// 1. Récupérer le thème sauvegardé ou 'light' par défaut
const currentTheme = localStorage.getItem('theme') || 'light';
// 2. Appliquer le thème sur la balise <html>
document.documentElement.setAttribute('data-theme', currentTheme);
// 3. Récupérer le bouton
const themeToggle = document.getElementById('theme-toggle');
// 4. Changer l'icône du bouton selon le thème actuel
if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
}
// 5. Ajouter l'événement au clic
themeToggle.addEventListener('click', function() {
    // Récupérer le thème actuel
    const current = document.documentElement.getAttribute('data-theme');
    // Basculer
    const newTheme = current === 'light' ? 'dark' : 'light';
    // Appliquer le nouveau thème
    document.documentElement.setAttribute('data-theme', newTheme);
    // Sauvegarder dans localStorage
    localStorage.setItem('theme', newTheme);
    // Changer l'icône
    if (newTheme === 'dark') {
        this.innerHTML = '<i class="bi bi-sun"></i>';
    } else {
        this.innerHTML = '<i class="bi bi-moon"></i>';
    }
});
/*COMITÉ #2 - NAVBAR DYNAMIQUE*/

// 1. Récupérer la navbar
const navbar = document.getElementById('navbar');

// 2. Changement de fond et d'ombre après 80px de défilement
window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Menu hamburger (ouverture/fermeture au clic)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    // Basculer la classe active
    navLinks.classList.toggle('active');
    
    // Changer l'icône (hamburger ↔ croix)
    const icon = this.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'bi bi-x-lg';
    } else {
        icon.className = 'bi bi-list';
    }
});

// 4. Fermer le menu au clic sur un lien (sur mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.className = 'bi bi-list';
    });
});