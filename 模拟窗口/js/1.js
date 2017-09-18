$(function(){
    var count = 0;
    //点击窗口总是显示在最前端
    $(".box").click(function(){
        $(this).css("z-index", ++count);
    })

    //让窗口跟随鼠标移动
    var divX = 0;
    var divY = 0;
    var top = 0;
    var left = 0;
    var pointer;

    var move = false;

    $(".box").bind("mousedown",function(e){
        //获取父级的当前top/left
        //var $parent = $(this).parent();
        top = $(this).css("top")=="auto"? 0 : +$(this).css("top").split("px")[0];
        left = $(this).css("left")=="left"? 0 : +$(this).css("left").split("px")[0];
        // 获取鼠标当前坐标 - top left
        //clientX是相对于屏幕可视范围的，不包括滚动条下的范围
        //screenX是指整个屏幕的
        //pageX,offsetX是相对于整个网页的，包括滚动条下的范围
        divX = e.clientX - left;
        divY = e.clientY - top;
        console.log("divX:"+divX+",divY:"+divY);
        move = true; 
        pointer = $(this);
    }) 
    $("body").bind("mousemove",function(e){
        if(move){
            //获取鼠标移动距离
            left = e.clientX-divX;
            top = e.clientY-divY;
            console.log("top: " + top + " ; left: " + left);

            left = left < 0 ? 0 : left;
            top = top < 0 ? 0 : top;

            pointer.css("top", top+"px");
            pointer.css("left", left+"px");
            console.log("top: " + top + " ; left: " + left);

        }
    })
    $("body").bind("mouseup",function(evt){
        move = false;
    }) 
    //将窗口最小化
    $(".min").click(function(){
        $(this).parent().parent().parent().addClass("boxMin");
        // $(this).prev().addClass("titleClick");
        // var $parent = $(this).parent();
        // console.log($($parent).next());
        $('.content').css("display", "none"); 
        // $(this).parent().next().hide();
    })
    //将窗口最大化
    $(".max").click(function(){
        $(this).parent().parent().parent().removeClass("boxMin");
        // $(this).parent().next().css("display", "block");
        $('.content').show(); 
    })
    //将窗口关闭
    $(".close").click(function(){
        // $(this).parent().parent().css("display", "none");
        $(this).parent().parent().parent().hide();
    })
    // setTimeout(function(){
    //     $(".box1").clone(true);
    // }, 2000);


})