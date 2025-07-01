// Image Slider 
let slideIndex = 0; 
const slides = document.querySelectorAll('.slide'); 
 
function showNextSlide() { 
  slides[slideIndex].classList.remove('active'); 
  slideIndex = (slideIndex + 1) % slides.length; 
  slides[slideIndex].classList.add('active'); 
} 
setInterval(showNextSlide, 3000); // changes every 3 seconds 
 
// Buy Button 
function buy(item, price) { 
  alert(`You selected ${item} for ₦${price}. Proceeding to payment...`);
}