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

  // Exibir tela de loading
  document.getElementById('loading').style.display = 'block';

  // Simular o envio do formulário (tempo fictício de 2 segundos)
  setTimeout(function () {
      // Esconder tela de loading
      document.getElementById('loading').style.display = 'none';

      // Exibir mensagem de confirmação
      document.getElementById('confirmation').style.display = 'block';
  }, 2000);
});