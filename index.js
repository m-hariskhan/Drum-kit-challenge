
// for(i=0; i<7; i++) OR 
// as we are accsesing the html element so using DOM

// checking for button press:
for(var i=0; i<document.querySelectorAll("button").length; i++){

document.querySelectorAll("button")[i].addEventListener("click", function(){

   var buttonInnerHTML= this.innerHTML
   makeSound(buttonInnerHTML);
//    to add animation while on click
   buttonAnimation(buttonInnerHTML);

});
}
// checking for key (on keyboard) press:
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    //using switch here 
    switch (key) {
        case "w":
            var crash = new Audio("/sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            var kick = new Audio("/sounds/kick-bass.mp3")
            kick.play()
            break;
        case "s":
            var snare = new Audio("/sounds/snare.mp3")
            snare.play()
            break;
        case "d":
            var tom1 = new Audio("/sounds/tom-1.mp3")
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio("/sounds/tom-2.mp3")
            tom2.play()
            break;
        case "k":
            var tom3 = new Audio("/sounds/tom-3.mp3")
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio("/sounds/tom-4.mp3")
            tom4.play()
            break;
    
        default:
            console.log(key);
            break;
    }
}
// adding animation to the buttons using queryselector on keys:
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey)
//   adding pre define css class "pressed":
  activeButton.classList.add("pressed");
//   for animation and to back the button into its previous condition use setTineout here:
  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);
}



// *adding eventlistener to the whole document rather then adding to specific tags or (using queryselectors):
// document.addEventListener("keypress", function(event){
//     alert("key is press")
// })

// *adding audio to js:
// var audio = new Audio("/sounds/tom-1.mp3")
// audio.play();