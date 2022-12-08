canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
hoverl = 100;
hovera = 90;
roverX = 10;
roverY = 10;
imgfun = "mars.jpg";
imgrover = "rover.png";
function add(){
    imgfunTag = new Image();
    imgfunTag.onload = uploadfundo;
    imgfunTag.src = imgfun;
    imgroverTag = new Image();
    imgroverTag.onload = uploadrover;
    imgroverTag.src = imgrover;
}
function uploadfundo(){
    ctx.drawImage(imgfunTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(imgroverTag, roverX, roverY, hoverl, hovera);
}
window.addEventListener("keydown",kdm);
function kdm(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38"){
        up();
        console.log("up");
    }
    if (keyPressed == "39"){
        right();
        console.log("right");
    }
    if (keyPressed == "40"){
        down();
        console.log("down");
    }
    if (keyPressed == "37"){
        left();
        console.log("left");
    }
}
function up(){
    if (roverY>=0){
        roverY = roverY - 10;
        uploadfundo();
        uploadrover();
    }
}
function down(){
    if (roverY<=500){
        roverY = roverY + 10;
        uploadfundo();
        uploadrover();
    }
}
function left(){
    if (roverX>=0){
        roverX = roverX - 10;
        uploadfundo();
        uploadrover();
    }
}
function right(){
    if (roverX<=500){
        roverX = roverX + 10;
        uploadfundo();
        uploadrover();
    }
}