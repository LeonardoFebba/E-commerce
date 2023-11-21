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

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  document.getElementById('loading').style.display = 'block';

  setTimeout(function () {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('confirmation').style.display = 'block';
  }, 2000);
});