// Select the elements
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

// Function to toggle the menu
menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    // Toggle the display of the navbar for mobile view
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    // Toggle the visibility of the open and close icons
    openIcon.style.display =
      openIcon.style.display === "none" ? "inline-block" : "none";
    closeIcon.style.display =
      closeIcon.style.display === "none" ? "inline-block" : "none";
  }
});

// Function to handle screen resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.style.display = "flex";

    openIcon.style.display = "none";
    closeIcon.style.display = "none";
  } else {
    navbar.style.display = "none";
    openIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  }
});
