const cardsImage = ["ht","ht","cs","cs","js","js","ph","ph","jav","jav","pyth","pyth","rea","rea","angu","angu","vju","vju"];
let cards = document.querySelectorAll("div");
cards = [...cards];

const counter = new Date().getTime();

const gamePairs = (cards.length)/2;
let choosenCard = "";
const pairOfCard = [];

let gameResult = 0;

const clickOnCard = function(){};
const init = function(){
 cards.forEach(card => {
const position = Math.floor(Math.random()*cardsImage.length);
card.classList.add(cardsImage[position])
cardsImage.splice(position,1);
 })   

setTimeout(function(){
    cards.forEach(card => {
        card.classList.add("hidden")
        card.addEventListener("click",clickOnCard)
    })

},3000)
}

init()