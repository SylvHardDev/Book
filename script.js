// Assurez-vous que GSAP et ScrollTrigger sont chargés
gsap.registerPlugin(ScrollTrigger);

// Sélection des projets
const projects = document.querySelector(".projects");

// Calculer la largeur totale à scroller
const totalScrollWidth = projects.scrollWidth - window.innerWidth;

// Appliquer l'animation GSAP
gsap.to(projects, {
  x: -totalScrollWidth, // Translate horizontale négative
  ease: "none", // Linear
  scrollTrigger: {
    trigger: ".container", // Élément déclencheur
    start: "top top", // Début (viewport + conteneur)
    end: `+=${totalScrollWidth}`, // Durée du défilement
    scrub: 1, // Synchroniser avec le scroll
    pin: true, // Fixer le conteneur
    anticipatePin: 1, // Fluidité de l'épingle
  },
});
