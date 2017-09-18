jQuery(function(){
	$(".Btn").click(function(){
		 var but=$(this).data("btn").split(",");
 		 rot(but[0],but[1]);
	})
	function rot(x,y){
		$(".box").css("transform","rotateX("+x+"deg) rotateY("+y+"deg)");
	}
	$(".box1").mouseenter(function(){
		$(".box1").css("transform","rotateX(90deg) rotateY(0deg)")
	})
	$(".box1").mouseleave(function(){
		$(".box1").css("transform","rotateX(0deg) rotateY(0deg)")
	})
})
