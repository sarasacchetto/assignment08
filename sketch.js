//var musica;
//var myVol;

            var amp;
            var mySong;
            var rectw;

function preload(){
    mySong=loadSound("assets/classical.mp3")
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    //mySong.play();
    setShakeThreshold(20);
    //myVol=new p5.Amplitude();
    //myVol.setInput(mySong);
             colorMode(HSB);
             fft=new p5.FFT(0,64);
              rectw=width/64;
    
    
}

function draw() {
    background('black');
    
 //rect(width/2-25, height/2-25, 50, 50);
    fill('white');
    textAlign(CENTER);
    textSize(30);
    text('-SHAKE FOR LISTENING TO MUSIC-',width/2,30);
    text('-turn your phone around axis X to stop music-',width/2,70);
    fill('black');
    
            var spectrum =fft.analyze();
            //stroke('black');
            noStroke();
            console.log(spectrum.lenght);
            for(var i=0; i<spectrum.length; i++){
                var amp=spectrum[i];
                var y=map(amp,0,256,height,0);
                fill(255,i,255)
                //line(i*rectw,height,i*rectw,y);
                rect(i*rectw,y,rectw,height-y);
            }
}


    
function deviceShaken(){
    if(mySong.isPlaying()==false){
        mySong.play();
    }
}

function deviceTurned() {
  if (turnAxis == 'X'){
    mySong.pause();
  } 
}


