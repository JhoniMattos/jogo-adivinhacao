// variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const inputNumber = document.querySelector("#inputNumber")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

// function
function handleTryClick(event) {
  event.preventDefault()  
  
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    
    screen2.querySelector("h2")
    .innerText = `acertou em ${xAttempts} tentativas!`
  } else if(Number(inputNumber.value) > 10) {
    alert("Erro!") 
  } else if(Number(inputNumber.value) < 0) {
    alert("Erro!") 
  }
  
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick(){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function pressEnter() {
  if (pressEnter.key == 'Enter' && screen1.classList.contains('hide'))
    handleResetClick()
}

const inputElement = document.querySelector('input');

inputElement.addEventListener('keypress', function(event) {
  if(event.key == 'Enter') {
    if(inputElement.value == "")
      event.preventDefault();
  }
})





