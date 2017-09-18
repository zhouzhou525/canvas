var can = document.getElementById("can")
if(can.getContext){
	var ctx = can.getContext("2d");
	var res;
	var mov = false;
	//球
	var ball = {
		x : 300,
		y : 250,
		ra : 10,
		vx : 4,
		vy : 4
	}
	//球拍
	var plate = {
		x : 260,
		y : 260,
		w : 80,
		h : 10
	}
	var arr = ["brown","blue","yellow","pink","orange"];
	
	var array2 = new Array();
	//砖块 
	var block = {
		x : 5,
		y : 0,
		w : 114,
		h : 20
	}
	ctx.fillStyle = "brown";

	//画小球
	function drawBall(){
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ball.ra,0,Math.PI*2);
		ctx.fill();
	}
	drawBall();

	//画弹板
	function drawPlate(){
		ctx.fillStyle = "brown";
		ctx.fillRect(plate.x, plate.y, plate.w, plate.h);
	}
	drawPlate();
	
	//最初画砖块
	var k = 0;
	var count = 0;
	function drawBlock(){
		for(var i=0; i<4; i++){
			for(var j=0; j<5; j++){
				//array1[i] = new Array();
				//array1[i][j] = 0;			
				ctx.fillStyle = arr[j];
				block.x =  5+(block.w+5) * j;
				block.y =  (block.h+3) * i;
				array2[k] = [block.x, block.y, 1, arr[j]];				
				
				//if(array2[k][2]){
					ctx.fillRect(block.x, block.y, block.w, block.h);
				//}
				k++;
			}
		}
	}
	drawBlock();

	//重复画砖块
	function drawBl(){
			for(var i=0; i<array2.length; i++){			
					if(array2[i][2] == 1){
						ctx.fillStyle = array2[i][3];
						ctx.fillRect(array2[i][0], array2[i][1], block.w, block.h);
				}
			}
	}

	//小球移动
	function move(){
		//ctx.clearRect(0, 0, can.width,  can.height);
		//画长尾
		ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
		ctx.fillRect(0, 0, can.width, can.height);
		/*if(ball.x == (plate.x+40) && (ball.y+ball.ra) == plate.y){
			ball.vx = 0;
		}else{
			ball.vx = 4;
		}*/
		//限制小球出边界
		if(ball.x+ball.ra+ball.vx>can.width || ball.x-ball.ra<0){
			ball.vx = -ball.vx;
		}
		if(ball.y+ball.ra+ball.vy>can.height || ball.y-ball.ra<0){
			ball.vy = -ball.vy;
		}
		//如果接住小球，小球沿y轴方向反射
		if(ball.x>=plate.x&&ball.x<=plate.x+plate.w&&ball.y+ball.ra==plate.y){
			ball.vy = -ball.vy;
		}
		//如果没有接住小球，那么游戏失败
		if(ball.y+ball.ra==can.height){
			alert("fail");
			window.cancelAnimationFrame(raf);
			return false;
		}

	    ball.x += ball.vx;
		ball.y += ball.vy;
		//如果碰到砖块，砖块消除，小球沿Y轴反射
		for(var i=array2.length-1; i>=0; i--){
			if(ball.x>=array2[i][0] && ball.x<=array2[i][0]+block.w && ball.y-ball.ra<=array2[i][1]+block.h && ball.y-ball.ra>=array2[i][1]){
				array2[i][2] = 0;
				array2[i][0] = 0;
				array2[i][1] = 0;
				//console.log(array2.length);
				ball.vy = -ball.vy;
				if(array2[i][0]==0){
					count++;
					console.log(count);
				}
				if(count==20){
					alert("sucess");
				}
			}

		}

        
		drawBl();
		drawBall();
		drawPlate();
		
		res = window.requestAnimationFrame(move);
	}

	//弹板和小球在画面中央，并且会跟着鼠标移动
	can.addEventListener("mousemove", function(e){
		if(!mov){
			ctx.clearRect(0, 240, can.width, plate.y);
			plate.x = e.clientX-40;
			ball.x = e.clientX;
			if(plate.x < 0 && ball.x < 40){
				plate.x = 0;
				ball.x = 40;
			}
			if(plate.x > 520 && ball.x > 560){
				plate.x = 520;
				ball.x = 560;
			}
			drawPlate();
			drawBall();	
		}else{
			ctx.clearRect(0, 260, can.width, plate.y);
			plate.x = e.clientX-40;
			if(plate.x < 0){
				plate.x = 0;
			}
			if(plate.x > 520){
				plate.x = 520;
			}
			drawPlate();	
		}		
	});

    //点击小球,小球进行移动
	can.addEventListener("click", function(e){
			mov = true;
				if(mov){
				res = window.requestAnimationFrame(move);
				}
	});

}else{
	alert("not support");
}
