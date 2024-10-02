// JavaScript for smooth scrolling between sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
        top: element.offsetTop - 60,  // Offset to account for the fixed navigation bar
        behavior: 'smooth'
    });
}
