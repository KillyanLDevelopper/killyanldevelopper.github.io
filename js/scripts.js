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
        document.body.classList.remove('dark-mode');
    }
}

function toggleShowMore(section) {
    let container, button;
    
    if (section === 'outils') {
        container = document.querySelector('.competences .competences_lst');
        button = document.getElementById('outils-show-more');
    } else if (section === 'competences') {
        container = document.querySelector('.skills-section .skills-list');
        button = document.getElementById('competences-show-more');
    }
    
    if (container && button) {
        if (container.classList.contains('show-all')) {
            container.classList.remove('show-all');
            button.textContent = 'Voir plus';
            
            if (section === 'outils') {
                document.querySelector('.competences').scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                document.querySelector('.skills-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            container.classList.add('show-all');
            button.textContent = 'Voir moins';
        }
    }
}

// Initialisation EmailJS
(function() {
    emailjs.init("bvP1r4XlEaay1Lu0N");
})();

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme();
    initScrollToTop();
    initScrollAnimations();
    
    const contactForm = document.getElementById('contact-form');
    const statusDiv = document.getElementById('contact-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            statusDiv.textContent = '';
            statusDiv.className = 'contact-status';
            
            emailjs.sendForm('service_q7ez05c', 'template_h7z0hpv', this)
                .then(function() {
                    statusDiv.textContent = '✓ Message envoyé avec succès !';
                    statusDiv.className = 'contact-status success';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Envoyer';
                }, function(error) {
                    statusDiv.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
                    statusDiv.className = 'contact-status error';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Envoyer';
                    console.error('Erreur EmailJS:', error);
                });
        });
    }
});

// Bouton retour en haut
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Animations au scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', applySavedTheme);







