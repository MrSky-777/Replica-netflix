// Menú hamburguesa
const burger = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Slider
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function updateSlider() {
  const width = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentSlide * width}px)`;
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

window.addEventListener('resize', updateSlider);

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}, 5000);
