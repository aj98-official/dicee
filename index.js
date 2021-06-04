
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
  document.querySelector(".title").textContent = "Player1 wins.";
}
else if(randomNumber1<randomNumber2){
  document.querySelector(".title").textContent = "Player2 wins.";
}
else {
  document.querySelector(".title").textContent = "Draw."
}
