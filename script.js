// Mensagem de boas-vindas
const welcomeButton = document.querySelector(".welcomeButton");
const welcomeMessage = document.querySelector(".message");

// Mudar imagem de hobbies
const hobbiesImages = [
  "./assets/hobbie.jpg",
  "./assets/hobbie2.jpg",
  "./assets/hobbie3.jpg",
];
const img = document.querySelector(".hobbieImg");
let currentImg = 0;
// Mostrar/Esconder mensagem de boas-vindas
welcomeButton.addEventListener("click", () => {
  if (welcomeMessage.classList.contains("show")) {
    welcomeMessage.classList.remove("show");
    welcomeButton.textContent = "Clique para ver a mensagem novamente!";
  } else {
    welcomeMessage.classList.add("show");
    welcomeButton.textContent = "Clique aqui para sumir com a mensagem ):";
  }
});

// Alterar imagem de hobbies
document.getElementById("next").addEventListener("click", () => {
  currentImg++;
  if (currentImg >= hobbiesImages.length) {
    currentImg = 0;
  }
  img.src = hobbiesImages[currentImg];
});

document.getElementById("prev").addEventListener("click", () => {
  currentImg--;
  if (currentImg < 0) {
    currentImg = hobbiesImages.length - 1;
  }

  img.src = hobbiesImages[currentImg];
});
