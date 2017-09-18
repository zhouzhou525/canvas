$(function(){
        //给两个图片定义为一个数组
        var arr = ["image/nan.jpg", "image/nv.jpg"];

        //判断是否为第一次输入
        var flag = false;
        //判断是哪个用户
        var onOff = true;
        //文本域的值初始化
        $("#input").val("请输入");

        //显示头像
        $("#img").click( function(){
            flag = true;
            if(onOff){
                this.src = arr[1];
                onOff = false;
                //激活焦点
                $("#input").focus();
                $("#input").val("");
            } else {
                this.src = arr[0];
                onOff = true;
                //激活焦点
                $("#input").focus();
                $("#input").val("");
            }
        })

        //发送事件
        //if(typeof($("#input").val()) != null){
            $("#enter").click( function(){
                if(flag){
                    if(!onOff){
                        //输入不能为空
                        if($("#input").val()==""){ 
                            alert("不能为空！！");
                        }else{
                           $("#liaoTian").append("<div class='nv'><div class='nvdui'>"+ $("#input").val() + "<div class='duihua1'></div></div><img class='img' src="
                                + arr[1] + " width='20px' height='20px'>" + "</div><div style='clear: both'></div>");
                           $("#input").val("");
                           //设置滚动条永远保持在最下方
                           $("#liaoTian").scrollTop($("#liaoTian")[0].scrollHeight); 
                        }
                    } else{
                        //输入不能为空
                        if($("#input").val()==""){ 
                            alert("不能为空！！");
                        }else{
                            $("#liaoTian").append("<div class='nan'><img class='img' src=" + arr[0] + " width='20px' height='20px'><span class='nandui'>" + 
                                $("#input").val() + "<span class='duihua2'></span></span></div><div style='clear: both'></div>");
                            $("#input").val("");
                            //设置滚动条永远保持在最下方
                            $("#liaoTian").scrollTop($("#liaoTian")[0].scrollHeight); 
                            
                        }
                    }
                }
            })
        //}

        //按回车发送消息
        $("#input").keydown( function(e){
            if(e.keyCode == 13){
                if(flag){
                    if(!onOff){
                        //输入不能为空
                        if($("#input").val() == ""){ 
                            alert("不能为空！！");
                        }else{
                           $("#liaoTian").append("<div class='nv'><div class='nvdui'><div class='nvbox'>"+ $("#input").val() + "<div class='duihua1'></div></div></div><img class='img' src="
                                + arr[1] + " width='20px' height='20px'>" + "</div><div style='clear: both'></div>");
                           $("#input").val("");
                           //设置滚动条永远保持在最下方
                           $("#liaoTian").scrollTop($("#liaoTian")[0].scrollHeight); 
                        }
                    } else{
                        //输入不能为空
                        if($("#input").val()==""){ 
                            alert("不能为空！！");
                        }else{
                            $("#liaoTian").append("<div class='nan'><img class='img' src=" + arr[0] + " width='20px' height='20px'><span class='nandui'><div class='nanbox'>" + 
                                $("#input").val() + "<span class='duihua2'></span></div></span></div><div style='clear: both'></div>");
                            $("#input").val("");
                            //设置滚动条永远保持在最下方
                            //scrollHeight元素滚动的高度
                            //$("#liaoTian")[0] 将全部元素都存在这个数组内
                            $("#liaoTian").scrollTop($("#liaoTian")[0].scrollHeight); 
                            /*var fkdk = document.getElementsByTagName("li");
                            console.log(fkdk[0]); =console.log($(".test").children()[0]);
                            console.log($(".test").children());*/
                            
                        }
                    }
                }
            }
        })
        //鼠标滑过滑出按钮变化
        $("#enter").hover(function(){
            $(this).addClass("hover");
        },function(){
            $(this).removeClass("hover");
        })   

})