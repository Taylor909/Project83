var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("weight").value;
        //Addictonal Activity ends

        mouseEvent = "mousedown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
var width=screen.width;
var height=screen.height;
var newWidth=width-100;
var newHeight=height-200;
var currentX,currentY,lastX,lastY;

if(width<992){
document.getElementById("myCanvas").width=newWidth;
document.getElementById("myCanvas").height=newHeight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
console.log("touch event started")
color= document.getElementById("color").value;
weight= document.getElementById("weight").value;
lastX=e.touches[0].clientX-canvas.offsetLeft;
lastY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=weight;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
    lastX=currentX;
    lastY=currentY;
    console.log(lastX+","+lastY)
}
function clearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    console.log("clearing the canvas");
}
