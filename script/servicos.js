let slideIndex = 0;
const slides = document.querySelectorAll("#slide img");
const dots = document.querySelectorAll("#slide-controls button");

function showSlide(n) {
  slideIndex = n;
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(nextSlide, 5000);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    showSlide(i);
  });
}
