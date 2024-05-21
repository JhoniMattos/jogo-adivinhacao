// Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const inputNumber = document.querySelector("#inputNumber");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', pressEnter);

// Funções
function handleTryClick(event) {
  event.preventDefault();  
  
  const inputValue = Number(inputNumber.value);

  if (inputValue < 0 || inputValue > 10 || isNaN(inputValue) || inputNumber.value === "") {
    alert("Erro! Insira um número entre 0 e 10.");
  } else {
    if (inputValue == randomNumber) {
      toggleScreen();
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`;
    }
    xAttempts++;
    inputNumber.value = ""; // Limpa o campo de entrada após cada tentativa
  }
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(event) {
  if (event.key === 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick();
  }
}

// Verificação de tecla Enter no input
inputNumber.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && inputNumber.value !== "") {
    handleTryClick(event);
  } else if (event.key === 'Enter' && inputNumber.value === "") {
    event.preventDefault();
  }
});