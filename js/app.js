var music=new Audio();
music.src="http://laradioglobal.ddns.net:8000/global";
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
