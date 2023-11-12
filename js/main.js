const toggleButtons = document.querySelectorAll(".toggle-content");
const contentContainers = document.querySelectorAll(".content-container");

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    contentContainers.forEach((container) => {
      container.style.display = "none";
    });

    const buttonIndex = Array.from(toggleButtons).indexOf(button);

    contentContainers[buttonIndex].style.display = "block";
  });
});