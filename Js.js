let value = 0;
let firstelement;
let firstelementproperties;
let firstparagraph;
let TheMainElement;
let firstcutsom;
let bot = [];
let card = [];
let customization = [];
let wrongtries = 0
let wrongcounter = document.getElementById("WrongCounter")
let ids = ["images/youtube.png", "images/youtube.png" , "images/facebook.png" , "images/facebook.png" , "images/instagram.png" , "images/instagram.png" , "images/tiktok.png" , "images/tiktok.png" , "images/whatsup.png", "images/whatsup.png" , "images/linkedin.png" , "images/linkedin.png" , "images/google.png" , "images/google.png" , "images/twitter.png", "images/twitter.png" , "images/discord.png" , "images/discord.png" ,"images/github.png" , "images/github.png"]
for( let i = 0 ; i < 20 ; i++){
card[i] = document.querySelectorAll("img")[i]
}



function randomcard(){
for( let i = 0 ; i < 20 ; i++){
    let z = Math.floor(Math.random() * ids.length)
if(card[i].id === ""){
    card[i].id = ids[z]
    ids.splice(z,1)
}
}

}
randomcard()

function questionmark(element , paragraph , mainelement , custom){


if(value === 0 && element.id != "Already Used"){    
mainelement.style.cssText = " transform: rotatey(180deg); background-color:lightblue;"
custom.style.cssText = "height:100%;"
paragraph.innerHTML = "";
element.src = element.id;
element.id = "Already Used";
firstelementproperties = element; 
TheMainElement = mainelement;
firstelement = element.src;
firstcutsom = custom;
firstparagraph = paragraph;
value++
}
else if( value === 1 && firstelement != element.src){
    mainelement.style.cssText = " transform: rotatey(180deg); background-color:lightblue;"
    custom.style.cssText = "height:100%;"
    paragraph.innerHTML = ""
    element.src = element.id
    element.id = "Already Used" 
    if(firstelement === element.src){
        let zy = [];
        var audio = new Audio("correct-choice-43861.mp3")
        audio.play()
        value = 0
      for( let xy = 0 ; xy < 20 ; xy++){
        if(card[xy].id === "Already Used"){
            zy.push(card[xy])
        }
      }
      if(zy.length === 20){
        setTimeout( function(){location.reload()}, 1000)
      }
    }
    else if(firstelement != element.src){
        value = 3;  
        var audio = new Audio("negative_beeps-6008.mp3")
        audio.play()
setTimeout( function(){ 
  
    firstelementproperties.id = firstelement
    element.id = element.src
    custom.style.height = "0px"
    firstcutsom.style.height = "0px"
    paragraph.innerHTML = "?"
    firstparagraph.innerHTML = "?"
    
    element.src = ""
    firstelementproperties.src = ""
   mainelement.style.cssText = "background:black; transform: rotatey(0deg);"
   TheMainElement.style.cssText = "background:black; transform: rotatey(0deg);"
   wrongtries ++
   wrongcounter.innerHTML = `Wrong Tries : ${wrongtries}`
   value = 0;  
    }, 1000)
      
    }
}
}