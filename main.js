canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width = 90;
rover_height = 100;

rover_x_position = 200;
rover_y_position = 200;

background_image =  "mars.jpg";
rover_image = "rover.png";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload=draw_image;
    background_imageTag.src=background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload=draw_rover;
    rover_imageTag.src=rover_image;
}

function draw_image() {
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function draw_rover() {
    ctx.drawImage(rover_imageTag, rover_x_position, rover_y_position, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        console.log("up");
        up();
    }
    if (keyPressed == "40") {
        console.log("down");
        down();
    }
    if (keyPressed == "37") {
        console.log("left");
        left();
    }
    if (keyPressed == "39") {
        console.log("right");
        right();
    }
}


