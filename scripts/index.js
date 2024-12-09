// Set Year in footer
window.onload = function () {
  document.getElementById("current-year").textContent = new Date().getFullYear();
}

// Select all modal open buttons and close elements
const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalElements = document.querySelectorAll(".close");
const allModals = document.querySelectorAll('.modal');

// Open specific modal based on data attribute
openModalButtons.forEach(button => {
  button.onclick = function () {

    document.querySelector('body').style.overflow = 'hidden';

    // Close any open modals (nested modals, for example)
    allModals.forEach(modal => {
      modal.style.display = "none";
    });

    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  };
});

// Close any open modal when "X" is clicked
closeModalElements.forEach(close => {
  close.onclick = function () {
    const modal = this.closest(".modal");
    if (modal) {
      modal.style.display = "none";
      document.querySelector('body').style.removeProperty('overflow');
    }
  };
});

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.querySelector('body').style.removeProperty('overflow');
  }
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', function () {

  if (menuToggle.classList.contains('open')) {
    document.querySelector('body').style.removeProperty('overflow');
    
  } else {
    document.querySelector('body').style.overflow = 'hidden';
  }
  
  menuToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close Mobile Menu on item click 
const menuLinks = document.querySelectorAll('#nav-menu a');
menuLinks.forEach(link => {
  link.onClick = function() {
    document.querySelector('body').style.removeProperty('overflow');
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  }
});

// Board Price Toggle
const pricingOptions = document.querySelectorAll('.board-pricing-options .pricing-option');
pricingOptions.forEach(option => {
  option.onclick = function() {
    pricingOptions.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    let price = option.dataset.price;
    let originalPrice = option.dataset.og;
    let meta = option.dataset.meta;
    document.querySelector('.pricing-cta .price').innerHTML = price;
    document.querySelector('.pricing-cta .meta').innerHTML = meta;
    document.querySelector('.pricing-cta .original-price').innerHTML = originalPrice;
  }
})