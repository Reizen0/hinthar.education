let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function opensidebar() {
  const sidebar = document.querySelector(".side_bar");
  sidebar.style.display = "flex";
}

function closesidebar() {
  const sidebar = document.querySelector(".side_bar");
  sidebar.style.display = "none";
}
