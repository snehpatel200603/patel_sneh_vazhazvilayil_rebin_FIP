console.log("JS file connected");

//this is done for the menu bar 


document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-mobile-menu');
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const promoButton = document.createElement('button');
  promoButton.textContent = 'Click for Promo Details';
  promoButton.classList.add('promo-button');



  
  const promoContent = [
    "Get 2 juices for the price of 1! Offer valid for a limited time.",
    "Buy one juice, get a second one free! Don't miss out on this deal.",
    "Double the refreshment with our 2-for-1 juice promo. Limited stock available.",
  ];
  
  let currentIndex = 0;

  promoButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % promoContent.length;
    showPromoContent(promoContent[currentIndex]);
  });

  function showPromoContent(content) {
    const promoPopup = document.createElement('div');
    promoPopup.classList.add('promo-popup');
    
    const promoText = document.createElement('p');
    promoText.textContent = content;
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.classList.add('close-button');

    closeBtn.addEventListener('click', () => {
      promoPopup.remove();
    });
    
    promoPopup.appendChild(promoText);
    promoPopup.appendChild(closeBtn);
    document.body.appendChild(promoPopup);
  }

  const promotionImage = document.getElementById('Promotion');
  promotionImage.insertAdjacentElement('afterend', promoButton);
});



