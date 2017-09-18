var can = document.getElementById("can")
if(can.getContext){
	var ctx = can.getContext("2d");
	function draw(){
		var date = new Date();
		ctx.clearRect(0,0,300,300);
		ctx.save();
		//需要还原,因为translate会相对上一次进行移动
		ctx.translate(150, 150); 
		ctx.lineWidth = 8;
		ctx.lineCap = "round";
		ctx.save();

		//画时针刻度
		for(var i = 0; i < 12; i++){
			ctx.rotate(Math.PI/6);
			ctx.beginPath();			
			ctx.moveTo(115,0);
			ctx.lineTo(90,0);
			ctx.stroke();	
		}
		ctx.restore();

		//画秒针刻度
		ctx.save();
		for(var i = 0; i < 60; i++){
			ctx.rotate(Math.PI/30);
			ctx.beginPath();			
			//ctx.moveTo(115,0);
			ctx.arc(115, 0, 3, 0, Math.PI * 2);
			ctx.fill();	
		}
		ctx.restore();

		//获取时间
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();

		//画时针
		ctx.save();
		ctx.rotate(hour*(Math.PI/6));
		ctx.beginPath();			
		ctx.moveTo(0,5);
		ctx.lineTo(0,-50);
		ctx.stroke();
		ctx.restore();

		//画分针
		ctx.save();
		ctx.lineWidth = 7;
		ctx.rotate((Math.PI*2)*min/60);
		ctx.beginPath();			
		ctx.moveTo(0,5);
		ctx.lineTo(0,-70);
		ctx.stroke();
		ctx.restore();

		//画秒针
		ctx.save();
		ctx.strokeStyle = "red";
		ctx.lineWidth = 4;
		ctx.rotate((Math.PI/30)*sec);
		ctx.beginPath();			
		ctx.moveTo(0,5);
		ctx.lineTo(0,4);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, 0, 4, 0, Math.PI * 2);
		ctx.fill();
		ctx.beginPath();			
		ctx.moveTo(0,-4);
		ctx.lineTo(0,-70);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, -75, 5, 0, Math.PI * 2);
		ctx.stroke();
		ctx.restore();

		//画圆盘
		ctx.strokeStyle = "#126686";
		ctx.beginPath();
		//ctx.moveTo(135,0);
		ctx.arc(0, 0, 135, 0, Math.PI * 2);
		ctx.stroke();
		ctx.restore();

		window.requestAnimationFrame(draw);

	}
	window.requestAnimationFrame(draw);
}else{
	alert("not suopport");
}