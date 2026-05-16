// script.js

let selectedWinner = "blue";

let players = ["blue","red","green","yellow"];

let currentPlayer = 0;

function startGame(color){

  selectedWinner = color;

  document.getElementById("homeScreen").classList.add("hidden");

  document.getElementById("gameScreen").classList.remove("hidden");

}

function rollDice(){

  let current = players[currentPlayer];

  let dice;

  // WINNER CONTROL SYSTEM
  if(current === selectedWinner){

    dice = Math.floor(Math.random()*2)+5;

  }else{

    dice = Math.floor(Math.random()*4)+1;

  }

  document.getElementById("dice").innerHTML = dice;

  document.getElementById("turnText").innerHTML =
    current.toUpperCase() + " rolled " + dice;

  // SIMPLE WIN CONDITION
  if(dice === 6 && current === selectedWinner){

    setTimeout(()=>{

      showWinner(current);

    },1000);

  }

  currentPlayer++;

  if(currentPlayer >= players.length){
    currentPlayer = 0;
  }

}

function showWinner(color){

  document.getElementById("popup").classList.remove("hidden");

  document.getElementById("winnerText").innerHTML =
    color.toUpperCase() + " WINS";

}

function restartGame(){

  location.reload();

}
