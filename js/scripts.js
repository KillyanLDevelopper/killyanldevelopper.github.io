function toggleDescription(id) {
    // Sélectionne la description et l'élément parent
    const description = document.getElementById(id);
    const competenceItem = description.parentElement;

    // Active ou désactive la classe "active" selon la visibilité de la description
    if (description.style.display === "block") {
        description.style.display = "none";
        competenceItem.classList.remove("active");
    } else {
        // Ferme toutes les autres descriptions
        document.querySelectorAll('.competence-desc').forEach(desc => {
            desc.style.display = "none";
            desc.parentElement.classList.remove("active");
        });
        // Affiche la description sélectionnée et ajoute la classe "active"
        description.style.display = "block";
        competenceItem.classList.add("active");
    }
}

function toggleDetail(detailId, arrowId) {
    const detailElement = document.getElementById(detailId);
    const arrowElement = document.getElementById(arrowId);

    if (detailElement.style.display === "none") {
        detailElement.style.display = "block";
        arrowElement.classList.add("open"); 
    } else {
        detailElement.style.display = "none";
        arrowElement.classList.remove("open"); 
    }
}

function filterCategory(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    const headings = document.querySelectorAll('.competences h3[data-category]');
    const competenceLists = document.querySelectorAll('.competences .competences_lst[data-category]');
    const competenceItems = document.querySelectorAll('.competences .competence-item[data-category]');

    // Activer/désactiver le bouton sélectionné
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="filterCategory('${category}')"]`).classList.add('active');

    // Affichage et masquage des titres <h3> associés
    headings.forEach(heading => {
        const headingCategory = heading.getAttribute('data-category');

        if (category === 'all' || headingCategory === category) {
            heading.style.display = 'block';  // Affiche le titre <h3>
        } else {
            heading.style.display = 'none';  // Cache le titre <h3>
        }
    });

    // Affichage et masquage des listes de compétences
    competenceLists.forEach(list => {
        const listCategory = list.getAttribute('data-category');

        if (category === 'all' || listCategory === category) {
            list.style.display = 'flex';  // Affiche la liste de compétences
        } else {
            list.style.display = 'none';  // Cache la liste de compétences
        }
    });

    // Affichage et masquage des éléments de compétence individuels
    competenceItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';  // Affiche l'élément de compétence
        } else {
            item.style.display = 'none';  // Cache l'élément de compétence
        }
    });
}

// Fonction pour basculer entre mode clair et sombre
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Ajoute ou retire la classe "dark-mode" au body
    
    // Enregistre la préférence de l'utilisateur dans le localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Fonction pour appliquer le thème au chargement de la page
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode'); // Mode clair par défaut
    }
}

document.addEventListener('DOMContentLoaded', applySavedTheme);







