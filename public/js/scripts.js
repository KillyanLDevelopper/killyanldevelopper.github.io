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
    const cards = document.querySelectorAll('.competence-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Activer/désactiver le bouton
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="filterCategory('${category}')"]`).classList.add('active');

    // Filtrer les cartes
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}



