//SQUARE
'use strict';
(function () {
	var x = 0;
	var y = 15;
	var speed = 3;

	function animate() {
		requestAnimationFrame(animate);
		x += speed;
		if (x <= 0 || x >= 475) {
			speed = -speed;
			y = y + 10
		}
		draw();
	}

	function draw() {
		var canvas = document.getElementById('block');
		var context = canvas.getContext('2d');
		context.clearRect(0, 0, 500, 300);
		context.fillStyle = '#af305d';
		context.fillRect(x, y, 20, 20);
		context.lineWidth = 3;
		context.strokeStyle = '#af305d';
		context.strokeRect(x, y, 20, 20);
	}
	document.addEventListener("DOMContentLoaded", function () {
		animate();
	});
}());



  //PANORAMA
  var img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 20;
var scale = 1.05;
var y = -4.5;
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) { x = CanvasXSize - imgW; }
    if (imgW > CanvasXSize) { clearX = imgW; }
    else { clearX = CanvasXSize; }
    if (imgH > CanvasYSize) { clearY = imgH; }
    else { clearY = CanvasYSize; }
    ctx = document.getElementById('panorama').getContext('2d');
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY);

    if (imgW <= CanvasXSize) {
        if (x > CanvasXSize) { x = -imgW + x; }
        if (x > 0) { ctx.drawImage(img, -imgW + x, y, imgW, imgH); }
        if (x - imgW > 0) { ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH); }
    }
    else {
        if (x > (CanvasXSize)) { x = CanvasXSize - imgW; }
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img, x - imgW + 1, y, imgW, imgH); }
    }
    ctx.drawImage(img, x, y,imgW, imgH);
    x += dx;
}









