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