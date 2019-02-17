const cardsImage = ["ht","ht","cs","cs","js","js","ph","ph","jav","jav","pyth","pyth","rea","rea","angu","angu","vju","vju"];
let cards = document.querySelectorAll("div");
cards = [...cards];

const init = function(){
 cards.forEach(function(card){
const position = Math.floor(Math.random()*cardsImage.length);
card.classList.add(cardsImage[position])
cardsImage.splice(position,1);
 })   
}
init()