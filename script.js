const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const carousel = button.closest("[data-carousel]");
    const slides = carousel.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // Check if the next button is clicked and it's the last slide
    if (newIndex === slides.children.length - 1 && offset === 1) {
      // Redirect to the final page
      window.location.href = "./final-page.html"; // Change this to your final page URL
      return; // Stop further execution
    }

    // Reset active slide
    delete activeSlide.dataset.active;

    // Handle circular navigation
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
  });
});
