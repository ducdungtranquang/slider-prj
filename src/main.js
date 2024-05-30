const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const paginationCircles = document.querySelectorAll(".pagination-circle");

let currentIndex = 0;
let totalSlides = slides.length / 2; // Chỉ tính các slide gốc

function updatePagination() {
  paginationCircles.forEach((circle) => circle.classList.remove("active"));
  paginationCircles[currentIndex % totalSlides].classList.add("active");
}

function scrollToSlide(index) {
  const slide = slides[index];
  slide.scrollIntoView({ behavior: "smooth" });
  currentIndex = index;
  updatePagination();
}

paginationCircles.forEach((circle, index) => {
  circle.addEventListener("mouseenter", () => scrollToSlide(index));
});

slider.addEventListener("scroll", () => {
  const newIndex = Math.round(slider.scrollTop / window.innerHeight);
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    updatePagination();
    if (newIndex >= totalSlides) {
      setTimeout(() => {
        slider.scrollTop = 0;
        currentIndex = 0;
        updatePagination();
      }, 300); // Delay nhỏ để đảm bảo cuộn mượt mà
    }
  }
});

// Initial pagination setup
updatePagination();
