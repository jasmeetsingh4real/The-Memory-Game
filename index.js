const cards=document.querySelectorAll(".card");
// console.log(cards);

var isFlipped=false;
var firstClick;
var secondClick;

cards.forEach((card)=>card.addEventListener("click",flip))

function flip(){
    this.classList.add("flip")// console.log("card is filpped mf");
    if(!isFlipped){
        isFlipped=true;
        
        firstClick=this;
    }else{
        // console.log('second card bitch');
        secondClick=this;
        checkIt();
    }
}

const checkIt=()=>{
    if(firstClick.dataset.image===secondClick.dataset.image)
    {
        success();
    }else{
        fail()
    }
}

const success=()=>{
    //console.log("ju are sexfull");
    firstClick.removeEventListener("click",flip)
    secondClick.removeEventListener("click",flip)
    reload();
}

const fail=()=>{
    //console.log("no bitch no, ju are not sexfull");
    setTimeout(() => {
        firstClick.classList.remove("flip")
        secondClick.classList.remove("flip")
     reload()},
     1000);
   
}   



const reload=()=>{
    isFlipped=false;
    firstClick=null;
    secondClick=null;
}
//bunch of css and math function bullshit
(function shuffle() {
    cards.forEach((card) => {
      var index = Math.floor(Math.random() * 16);
      card.style.order = index;
    });
  })();
  