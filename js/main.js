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
/*COMITÉ #3 - COMPTE À REBOURS*/
// Date de la conférence : 25 Juillet 2026 à 09h00
const joursElement = document.getElementById('days');
const heuresElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondesElement = document.getElementById('seconds');
if (joursElement && heuresElement && minutesElement && secondesElement) {
const targetDate=new Date('2026-07-25T09:00:00').getTime();
function updateCountdown(){
    const now = Date.now();
    const diff = targetDate - now;
    if (diff <= 0){
        document.getElementById('days').textContent='00';
        document.getElementById('hours').textContent='00';
        document.getElementById('minutes').textContent='00';
        document.getElementById('seconds').textContent='00';
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60))/1000);
    document.getElementById('days').textContent=String(days).padStart(2, '0');
    document.getElementById('hours').textContent=String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent=String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent=String(seconds).padStart(2, '0');
}
// Mettre à jour le compte à rebours toutes les secondes
setInterval(updateCountdown, 1000);
updateCountdown();
}
/*COMITÉ 3 - animations au scrool*/
// Observer pour les animations fade-in
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
// Observer tous les éléments avec la classe .fade-in
document.querySelectorAll('.fade-in').forEach(el=>{
    observer.observe(el);
});
/*COMITÉ5*/
const boutonsOnglets = document.querySelectorAll('.tab-btn');
const contenusOnglets = document.querySelectorAll('.tab-content');
boutonsOnglets.forEach(bouton => {
    bouton.addEventListener('click', function() {
        // 1. Enlever la classe active de tous les boutons
        boutonsOnglets.forEach(b => b.classList.remove('active'));
        // 2. Ajouter la classe active au bouton cliqué
        this.classList.add('active');
        // 3. Cacher tous les contenus (tableaux)
        contenusOnglets.forEach(c => c.style.display = 'none');
        // 4. Afficher le contenu correspondant au jour cliqué
        const jour = this.dataset.jour;
        document.getElementById('jour' + jour).style.display = 'block';
    });
});
/* COMMIT 5 filtrage des intervnants*/
const boutonsFiltres = document.querySelectorAll('.btn-filtre');
const cartesIntervenants = document.querySelectorAll('.carteintervenant');
boutonsFiltres.forEach(bouton =>{
    bouton.addEventListener('click', function(){
        // 1. Enlever la classe 'actif' de tous les boutons
        boutonsFiltres.forEach(b => b.classList.remove('actif'));
        // 2. Ajouter la classe 'actif' au bouton cliqué
        this.classList.add('actif');
        // 3. Récupérer le filtre sélectionné
        const filtre = this.dataset.filtre;
        // 4. Afficher ou masquer les cartes
        cartesIntervenants.forEach(carte => {
            if (filtre === 'tous' || carte.dataset.categorie === filtre) {
                carte.style.display = 'block';
            } else {
                carte.style.display = 'none';
            }
        });
    });
});