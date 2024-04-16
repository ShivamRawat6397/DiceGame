const player1 = document.getElementById("p1");
const player2 = document.getElementById("p2");

function player1Change() {
  let value = Math.floor(Math.random() * 6) + 1;
  player1.querySelector("img").src = `./images/dice${value}.png`;
  return value;
}

function player2Change() {
  let value = Math.floor(Math.random() * 6) + 1;
  player2.querySelector("img").src = `./images/dice${value}.png`;
  return value;
}

let score1 = player1Change();
let score2 = player2Change();
let con = document.getElementsByClassName("container")[0];
let head = con.querySelector("h1");
if (score1 > score2) {
  head.innerHTML = "Player 1 Wins!!";
} else if (score1 === score2) {
  head.innerHTML = "Draw!!";
} else {
  head.innerHTML = "Player 2 Wins!!";
}
