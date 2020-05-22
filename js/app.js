var music=new Audio();
music.src="https://icecast.omroep.nl/radio2-bb-mp3";
music.loop=true;
music.pause();   
   
function myFunction(x) {
            
x.classList.toggle("fa-stop-circle");
            
if(music.paused){
    music.play();
}else{
    music.pause();    
}
    
}
