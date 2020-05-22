var music=new Audio('https://icecast.omroep.nl/radio2-bb-mp3');
music.play();   
   
function myFunction(x) {
            
x.classList.toggle("fa-stop-circle");
x.classList.add("fa-play-circle");
            
if(music.play){
    music.pause();
}else{
    music.play();    
}
    
}
