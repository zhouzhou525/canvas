var can = document.getElementById("can")
if(can.getContext){
	var ctx = can.getContext("2d");
	var res;
	var mov = false;
	var ball = {
		x : 40,
		y : 40,
		ra : 20,
		vx : 2,
		vy : 2
	}

	//画小球
	function draw(){
		ctx.fillStyle = "blue";
		ctx.beginPath();
		// ctx.moveTo(ball.x + ball.ra,ball.y + ball.ra);
		ctx.arc(ball.x, ball.y, ball.ra,0,Math.PI*2);
		ctx.fill();
	}
	draw();

	//小球移动
	function move(){
		//ctx.clearRect(0,0,can.width,can.height);
		//画长尾
		ctx.fillStyle = "rgba(255,255,255,0.4)";
		ctx.fillRect(0,0,can.width,can.height);
		//限制小球出边界
		if(ball.x+ball.ra+ball.vx>can.width||ball.x-ball.ra<0){
			ball.vx = -ball.vx;
		}
		if(ball.y+ball.ra+ball.vy>can.height||ball.y-ball.ra<0){
			ball.vy = -ball.vy;
		}

		ball.x += ball.vx;
		ball.y += ball.vy;
		draw();
		res = window.requestAnimationFrame(move);
	}

	/*//鼠标移入开始动
	can.addEventListener("mouseover", function(){
		res = window.requestAnimationFrame(move);
	});

	//鼠标移出停止
	can.addEventListener("mouseout", function(){
		window.cancelAnimationFrame(res); //进行传参
	});*/

	//如果小球没有移动,那么会跟着鼠标移动
	can.addEventListener("mousemove", function(e){
		if(!mov){
			ctx.clearRect(0,0,can.width,can.height);
			ball.x = e.clientX;
			ball.y = e.clientY;
			draw();
		}
	});

	//点击小球,小球进行移动
	can.addEventListener("click", function(e){
		mov = true;
		if(mov){
			res = window.requestAnimationFrame(move);
		}
	});

	//鼠标离开画面,停止移动
	can.addEventListener("mouseout", function(){
		window.cancelAnimationFrame(res);
		mov = false;
	});

}else{
	alert("not support");
}
