let touches = document.querySelectorAll(".key")
let audio = document.querySelectorAll("audio")

touches.forEach(function(touche){

    touche.addEventListener("mouseup", function(){
        //enleve la class playing
        touche.classList.remove("playing")
    })


    touche.addEventListener("mousedown", function(){
        //changer style  
        touche.classList.add("playing")

        //jouer le son 
        
    })
})

 







// myAudioElement.addEventListener("canplaythrough", (event) => {
//     /* the audio is now playable; play it if permissions allow */
//     myAudioElement.play();
//   });
  