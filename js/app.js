var music=new Audio('https://icecast.omroep.nl/radio2-bb-mp3');
music.play();   
   
 function myFunction(x) {
            
   x.classList.toggle("fa-stop-circle");
   x.classList.add("fa-play-circle");
            
   if (isPlaying) {
     music.pause()
   } else {
     music.play();
   }

 };

 music.onplaying = function() {
   isPlaying = true;
 };
 music.onpause = function() {
   isPlaying = false;
 }
