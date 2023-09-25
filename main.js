const showInfoButton = document.querySelector('.button-2');

const infoContainer = showInfoButton.querySelector('.hoverInfo');

showInfoButton.addEventListener('click', () => {
  if (infoContainer.style.display === 'block') {
    infoContainer.style.display = 'none';
    showInfoButton.querySelector('.main').textContent = 'Learn more';
  
} else {
    infoContainer.style.display = 'block';
    showInfoButton.querySelector('.main').textContent = 'Close this';

  }
});

infoContainer.addEventListener('click', () => {
  
    infoContainer.style.display = 'none';
  showInfoButton.querySelector('.main').textContent = 'Learn more';
});




document.addEventListener("DOMContentLoaded", function() {
    
    const buttonContainer = document.querySelector(".button-3");
    buttonContainer.addEventListener("click", function() {
        if (buttonContainer.classList.contains('active')) {
            buttonContainer.classList.remove('active');
        
        } else {
            buttonContainer.classList.add('active');
        }
    });
});


function selectCard(card) {
    const cards = document.querySelectorAll('.build-1, .build-2');

    if (!card.classList.contains('active')) {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    
    } else {
        card.classList.remove('active');
    }

}
