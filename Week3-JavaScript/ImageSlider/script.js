// Array of slide data - each object has a title and a color (standing in for a real image)
const slides = [
  { title: "Espresso", color: "#6f4e37" },
  { title: "Cappuccino", color: "#d7a86e" },
  { title: "Cold Brew", color: "#3e2723" },
  { title: "Latte", color: "#c8945a" }
];

let currentIndex = 0;

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const dotsContainer = document.getElementById("dots");

// Build one dot per slide, dynamically
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

function updateSlide() {
  const current = slides[currentIndex];
  slideImage.style.backgroundColor = current.color;
  slideTitle.textContent = current.title;

  // Update active dot
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
}

// Initialize the first slide
updateSlide();

// Optional: auto-slide every 3 seconds
setInterval(nextSlide, 3000);