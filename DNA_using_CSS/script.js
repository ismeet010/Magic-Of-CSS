var cnv;


function setup(){
    frameRate(60);
    if (displayWidth > displayHeight) {
        cnv = createCanvas(500, 500, P2D);
    } else {
        cnv = createCanvas(displayWidth*0.95,displayWidth*0.95, P2D);
    }
    cnv.parent("cnv");
    
    num = 20;
    a = 0;
    scl = 1;
    speed = PI/60;
    
    stroke(255);
}


function draw(){
    background(0,100);
    
    for (var i=1; i<num+1; i++){
        let pos1 = createVector(width/2+width*sin(a+i*PI/num)/4,i*height/(num+1));
        let pos2 = createVector(width/2-width*sin(a+i*PI/num)/4,i*height/(num+1));
        strokeWeight(height/num/2);
        stroke(255*noise(scl*(a+i*PI/num)),255*noise(scl*(a+i*PI/num+10)),255*noise(scl*(a+i*PI/num+20)));
        point(pos1.x,pos2.y);
        point(pos2.x,pos2.y);
        strokeWeight(height/num/20);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
    
    a+=speed;
}