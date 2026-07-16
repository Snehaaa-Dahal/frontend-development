// Select ALL elements with class "faq-item" (returns a list, not just one)
const faqItems = document.querySelectorAll(".faq-item");

// Loop through each FAQ item and add a click listener to its question
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // First, close ALL faq items (ensures only one stays open)
    faqItems.forEach((faq) => faq.classList.remove("active"));

    // If the clicked one wasn't already open, open it now
    if (!isActive) {
      item.classList.add("active");
    }
  });
});