const cardsColor = ["red","red","green","green","blue","blue","brown","brown","yellow","yellow","aqua","aqua","pink","pink","orange","orange","lightgreen","lightgreen"];
let cards = document.querySelectorAll("div");
cards = [...cards];

const counter = new Date().getTime();


const gamePairs = (cards.length)/2;
let choosenCard = "";
let pairOfCards = [];

let gameResult = 0;


const clickOnCard = function(){
    choosenCard = this;
    

    if(choosenCard == pairOfCards[0])
    {
        return;
    }
    
    choosenCard.classList.remove("hidden");
    if(pairOfCards.length === 0){
        console.log("1 element");
        pairOfCards[0] = choosenCard;
        return;
    }else{
        console.log("2 element");
        cards.forEach(card => card.removeEventListener("click",clickOnCard))
        pairOfCards[1] = choosenCard;
        
        setTimeout(function(){

       
        if(pairOfCards[0].className === pairOfCards[1].className){
           pairOfCards.forEach(card => card.classList.add("off"));
           gameResult++;
           if(gameResult == gamePairs){
            const endTime = new Date().getTime();
            const gameTime = (endTime - counter)/1000;
            alert(`WYGRANA! Czas gry wyniósł ${gameTime} sekund`);
            location.reload();
           }


        }else{
            pairOfCards.forEach(card => card.classList.add("hidden"));
        }
        choosenCard = "";
        pairOfCards.length = 0;
        cards.forEach(card => card.addEventListener("click",clickOnCard));
    },1000)
    }
}
const init = function(){
 cards.forEach(card => {
const position = Math.floor(Math.random()*cardsColor.length);
card.classList.add(cardsColor[position])
cardsColor.splice(position,1);
 })   

setTimeout(function(){
    cards.forEach(card => {
        card.classList.add("hidden")
        card.addEventListener("click",clickOnCard)
    })

},3000)
}

init()