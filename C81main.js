canvas = document.getElementById("canvas_draw");
ctx = canvas.getContext("2d");
color ="blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200,200,50,0,2 *Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;
    console.log("X = " + mousex + ",Y = " + mousey );
    circle(mousex,mousey);

}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mousex,mousey,50,0,2 *Math.PI);
    ctx.stroke();
}