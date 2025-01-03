const carousel = document.querySelector('.carousel');
let index = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  index += direction;

  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;

  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
