const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');
    });
});

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}

// Add initial animation delay
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    if (index === 0) card.classList.add('active');
});