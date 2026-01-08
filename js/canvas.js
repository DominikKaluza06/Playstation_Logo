function draw () {
    var c = document.getElementById("logoCanvas");
    var ctx = c.getContext("2d");

    ctx.strokeStyle = "rgba(0,0,0,0)";
    //ctx.miterLimit=4;
    ctx.fillStyle = "#0070d1";
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(5.8, 32.1);
    ctx.bezierCurveTo(4.3, 33.1, 4.8, 35, 8, 35.9);
    ctx.bezierCurveTo(11.3, 37, 14.9, 37.3, 18.4, 36.7);
    ctx.bezierCurveTo(18.6, 36.7, 18.8, 36.6, 18.9, 36.6);
    ctx.lineTo(18.9, 33.2);
    ctx.lineTo(15.5, 34.3);
    ctx.bezierCurveTo(14.2, 34.7, 12.9, 34.8, 11.6, 34.5);
    ctx.bezierCurveTo(10.6, 34.2, 10.8, 33.6, 12, 33.1);
    ctx.lineTo(18.9, 30.7);
    ctx.lineTo(18.9, 27);
    ctx.lineTo(9.3, 30.3);
    ctx.bezierCurveTo(8.1, 30.7, 6.9, 31.3, 5.8, 32.1);
    ctx.closePath();

    ctx.moveTo(29, 17.1);
    ctx.lineTo(29, 26.8);
    ctx.bezierCurveTo(33.1, 28.8, 36.3, 26.8, 36.3, 21.6);
    ctx.bezierCurveTo(36.3, 16.3, 34.4, 13.9, 28.9, 12);
    ctx.bezierCurveTo(26, 11, 23, 10.1, 20, 9.5);
    ctx.lineTo(20, 38.4);
    ctx.lineTo(27, 40.5);
    ctx.lineTo(27, 16.2);
    ctx.bezierCurveTo(27, 15.1, 27, 14.3, 27.8, 14.6);
    ctx.bezierCurveTo(28.9, 14.9, 29, 16, 29, 17.1);
    ctx.closePath();

    ctx.moveTo(42, 29.8);
    ctx.bezierCurveTo(39.1, 28.8, 36, 28.4, 33, 28.7);
    ctx.bezierCurveTo(31.4, 28.8, 29.9, 29.2, 28.5, 29.7);
    ctx.lineTo(28.2, 29.8);
    ctx.lineTo(28.2, 33.7);
    ctx.lineTo(34.7, 31.3);
    ctx.bezierCurveTo(36, 30.9, 37.3, 30.8, 38.6, 31.1);
    ctx.bezierCurveTo(39.6, 31.4, 39.4, 32, 38.2, 32.5);
    ctx.lineTo(28.2, 36.2);
    ctx.lineTo(28.2, 40);
    ctx.lineTo(42, 34.9);
    ctx.bezierCurveTo(43, 34.5, 43.9, 34, 44.7, 33.2);
    ctx.bezierCurveTo(45.4, 32.2, 45.1, 30.8, 42, 29.8);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
}

draw();