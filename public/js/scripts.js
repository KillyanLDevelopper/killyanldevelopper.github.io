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

