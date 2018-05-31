window.onload = function(){
	var touchleft=document.getElementById("xiahua-shang-left");
	var touchright=document.getElementById("xiahua-shang-right");
	var xialeft=document.getElementById("xia-left");
	var xiaright=document.getElementById("xia-right");
	var denglu=document.getElementById("denglu");
	var zhuce=document.getElementById("zhuce");
	var gologo=document.getElementById("gologo");
	var gochildren=gologo.children[0];
	var one=document.getElementById("one");
	var oneshou=one.children[0];
	oneshou.onclick=function(){
		location.href="http://localhost:8080";
	}
	gologo.onclick=function(){
		location.href="http://localhost:8080/html/gouwuc.html";
	}
	denglu.onclick=function(){
		location.href="http://localhost:8080/html/denglu.html";
	}
	zhuce.onclick=function(){
		location.href="http://localhost:8080/html/zhuce.html#";
	}
//	var xihuaone=document.getElementById("xiahua-xia-left-top");
//	var xiahuatwo=document.getElementById("xiahua-xia-left-center");
//	var xiahuasan=document.getElementById("xiahua-xia-left-bottom");
	
//		滑动换页那点
		touchleft.onmouseover=function(){
			touchleft.style.color="white";
			xialeft.style.display="block";
			xiaright.style.display="none";
		}
		touchright.onmouseover=function(){
			touchright.style.color="white";
			xialeft.style.display="none";
			xiaright.style.display="block";
		}
		touchright.onmouseout=function(){
			touchright.style.color="darkgray";
		}
		touchleft.onmouseout=function(){
			touchleft.style.color="darkgray";
		}
//		滑动换页左栏滑动出现滑块
		$(function(){
			$("#xiahua-xia-left-top").mouseenter(function(){
				$("#xiahua-xia-left-top > div").stop().animate({
					"left":-36,
					"opacity":1,
				})
			})
			$("#xiahua-xia-left-top").mouseleave(function(){
				$("#xiahua-xia-left-top > div").stop().animate({
					"left":0,
					"opacity":0,
				})
			})
			$("#xiahua-xia-left-center").mouseenter(function(){
				$("#xiahua-xia-left-center > div").stop().animate({
					"left":-36,
					"opacity":1,
				})
			})
			$("#xiahua-xia-left-center").mouseleave(function(){
				$("#xiahua-xia-left-center > div").stop().animate({
					"left":0,
					"opacity":0,
				})
			})
			$("#xiahua-xia-left-bottom").mouseenter(function(){
				$("#xiahua-xia-left-bottom > div").stop().animate({
					"left":-36,
					"opacity":1,
				})
			})
			$("#xiahua-xia-left-bottom").mouseleave(function(){
				$("#xiahua-xia-left-bottom > div").stop().animate({
					"left":0,
					"opacity":0,
				})
			})
			
		})
		
		
		
//轮播
$(function() {
    /***用于放图片的数组*****/
    var arr = ["../img/lun.jpg", "../img/lun1.jpg","../img/lun2.jpg"];
    var col = ["#411a4f","#29251A","#974fbb"];
    /****初始化页面启动显示的图片*****/
    $(".ul_img li img").attr("src", arr[0]);
	var count = 0;
    var index = 0;
    var timer = null;
    var timer1 = null;
    /****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
    $(".ul_text li").hover(function() {
        clearInterval(timer);
        index = $(this).index();
        //alert(index);
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
            'opacity': 1
        }, 2000);
//      左边侧栏和上部的点击栏
        $("#header").css("background-color",col[index]);
		$("#xiahua-shang > div").css("background-color",col[index]);
    }, function() {
        auto();
    });

    auto();
    /*****自动播放图片的定时器****/
$("#header").css("background-color",col[0]);
$("#xiahua-shang > div").css("background-color",col[0]);
    function auto() {
        timer = setInterval(function() {
            index++;
            if (index > 2) {
                index = 0;
            }
            $(".ul_text li").eq(index).addClass("hover").siblings().removeClass("hover");
            $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 1000);
            
           count++;
		if(count>2){
			count = 0;
		}
		$("#header").css("background-color",col[count]);
		$("#xiahua-shang > div").each(function(){
			$(this).css("background-color",col[count]);
		})
            
        }, 2000);
        
    }
 $(".ul_img li img").hover(function(){
            	clearInterval(timer)
            	
            },function(){
            	auto();
            })		
	});	
		
//	导航上面小鱼hover的时候转个圈
	$(function(){
		$(".yu").mouseenter(function(){
			$(this).children("img").rotate({
				angle:0, 
				duration: 400, 
				animateTo: 360
			})
			$(this).children("span").css("color","#e74085")
		})
		$(".yu").mouseleave(function(){
			$(this).children("span").css("color","black")
		})
	})
	
	$(function(){
		$(".yb").mouseenter(function(){
			$(this).stop().animate({
				"margin-left":-10
			},400)
		})
	
		$(".yb").mouseleave(function(){
			$(this).stop().animate({
				"margin-left":0
			},400)
		})
	})
	var yan=document.getElementById("yan");
	var srr="";
	Ajax({
		url:"../json/model.json",
		type:"get",
		success:function(data){
			data=JSON.parse(data);
			for(var i in data){
				srr+= `<li class="lii"><span class="bone">${data[i].name}	</span><a class="btwo">${data[i].number}</a><span class="bthree">${data[i].name1}	</span><a class="bfour">${data[i].number1}</a>
				<div class="bao">
				<ul class="bfive">
					<li class="lione"><img src="${data[i].list.bigimg[0]}"/><span>${data[i].list.bigname[0]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>

				</ul>
				<ul class="bfive">
					<li class="lione"><img src="${data[i].list.bigimg[1]}"/><span>${data[i].list.bigname[0]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[2]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>	
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>	
				</ul>
				</div>
				</li>
					`
			}
	yan.innerHTML=srr;
   }
})
	

	
	
	
	
	
	
	
	
	
var contenttop=document.getElementById("content-right-top");
var contentbottom=document.getElementById("content-right-bottom");
var arr="";
var cc="";
	Ajax({
		url:"../json/dayhurry.json",
		type:"get",
		success:function(data){
			data=JSON.parse(data);
			
				for(var j in data.name){
					arr+=`<span class="hov">${data.name[j]}</span>`
				}
			
			contenttop.innerHTML=arr;

		console.log(cc)
	
		$(function(){
		
			$(".hov").mouseenter(function(){
				var aa=$(".hov").index($(this));
				if(aa==0){
						cc="";
						contentbottom.innerHTML="";
						Ajax({
							url:"../json/hurry.json",
							type:'get',
							success:function(data){
								data=JSON.parse(data);
								
									for(var i in data){
										cc+=`<div class="lei"><img src="${data[i].picture}" /><p>${data[i].say}</p><span class="wo">${data[i].price}</span><span class="ai">仅限一件</span><input type="button" value="即将开始" class="pi"/></div>`
									}
									
									contentbottom.innerHTML=cc;
							}
						})					
				}
				if(aa==1){
						cc="";
						contentbottom.innerHTML="";
						Ajax({
								url:"../json/hurry1.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									
										for(var i in data){
											cc+=`<div class="lei"><img src="${data[i].picture}" /><p>${data[i].say}</p><span class="wo">${data[i].price}</span><span class="ai">仅限一件</span><input type="button" value="即将开始" class="pi"/></div>`
										}
										
										contentbottom.innerHTML=cc;
								}
							})
				}
				if(aa==2){
						cc="";
						contentbottom.innerHTML="";
						Ajax({
								url:"../json/hurry2.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									
										for(var i in data){
											cc+=`<div class="lei"><img src="${data[i].picture}" /><p>${data[i].say}</p><span class="wo">${data[i].price}</span><span class="ai">仅限一件</span><input type="button" value="即将开始" class="pi"/></div>`
										}
										
										contentbottom.innerHTML=cc;
								}
						})
				}
				if(aa==3){
						cc="";
						contentbottom.innerHTML="";
						Ajax({
								url:"../json/hurry3.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									
										for(var i in data){
											cc+=`<div class="lei"><img src="${data[i].picture}" /><p>${data[i].say}</p><span class="wo">${data[i].price}</span><span class="ai">仅限一件</span><input type="button" value="即将开始" class="pi"/></div>`
										}
										
										contentbottom.innerHTML=cc;
								}
						})
				}
				if(aa==4){
						cc="";
						contentbottom.innerHTML="";
						Ajax({
								url:"../json/hurry4.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									
										for(var i in data){
											cc+=`<div class="lei"><img src="${data[i].picture}" /><p>${data[i].say}</p><span class="wo">${data[i].price}</span><span class="ai">仅限一件</span><input type="button" value="即将开始" class="pi"/></div>`
										}
										
										contentbottom.innerHTML=cc;
								}
						})
				}
			})

				Ajax({
							url:"../json/hurry.json",
							type:'get',
							success:function(data){
								data=JSON.parse(data);
								
									for(var i in data){
										cc+=`<div class="lei"><img src="${data[i].picture}" /><p>${data[i].say}</p><span class="wo">${data[i].price}</span><span class="ai">仅限一件</span><input type="button" value="即将开始" class="pi"/></div>`
									}
									
									contentbottom.innerHTML=cc;
							}
					})		
		
	})
	}
})
	var contentright=document.getElementById("content1-right");
	var contentleft=document.getElementById("content1-left");
	var vv="";
			Ajax({
				url:"../json/content.json",
				type:'get',
				success:function(data){
					data=JSON.parse(data);
					console.log(data);
					for(var i in data){
						vv+=`<div class="cont1"><p>${data[i].name[0]}</p><span>${data[i].say[0]}</span><img src="${data[i].img[0]}"  /></div><div class="cont2"><p>${data[i].name[1]}</p><span>${data[i].say[1]}</span><img src="${data[i].img[1]}"  /></div><div class="cont3"><p>${data[i].name[2]}</p><span>${data[i].say[2]}</span><img src="${data[i].img[2]}"  /></div><div class="cont4"><p>${data[i].name[3]}</p><span>${data[i].say[3]}</span><img src="${data[i].img[3]}"  /></div><div class="cont5"><p>${data[i].name[4]}</p><span>${data[i].say[4]}</span><img src="${data[i].img[4]}"  /></div><div class="cont6"><p>${data[i].name[5]}</p><span>${data[i].say[5]}</span><img src="${data[i].img[5]}"  /></div>`
					}
					contentright.innerHTML=vv;
					$(function(){
						$("#content1-right").find("img").mouseenter(function(){
							$(this).stop().animate({
										"right":40
									},200)
						})
						$("#content1-right").find("img").mouseleave(function(){
							$(this).stop().animate({
										"right":10
									},200)
						})
					})
					$(function(){
						$("#content2-right").find("img").mouseenter(function(){
							$(this).stop().animate({
										"right":40
									},200)
						})
						$("#content2-right").find("img").mouseleave(function(){
							$(this).stop().animate({
										"right":10
									},200)
						})
					})
				}
			})
		var nn="";
		Ajax({
			url:"../json/content1.json",
			type:'get',
			success:function(data){
				data=JSON.parse(data);
				console.log(data);
				for(var i in data){
					nn+=`
					<div class="touu"><div class="mm">${data[i][0]}</div><div class="mm">${data[i][1]}</div><div class="mm">${data[i][2]}</div><div class="mm">${data[i][3]}</div></div>
					
					`
				}
				contentleft.innerHTML+=nn;
			
				$(function(){
					$(".mm").mouseenter(function(){
						var bb=$(".mm").index($(this));
						if(bb==0){
							vv="";
							contentright.innerHTML="";
						Ajax({
								url:"../json/content.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									console.log(data);
									for(var i in data){
										vv+=`<div class="cont1"><p>${data[i].name[0]}</p><span>${data[i].say[0]}</span><img src="${data[i].img[0]}"  /></div><div class="cont2"><p>${data[i].name[1]}</p><span>${data[i].say[1]}</span><img src="${data[i].img[1]}"  /></div><div class="cont3"><p>${data[i].name[2]}</p><span>${data[i].say[2]}</span><img src="${data[i].img[2]}"  /></div><div class="cont4"><p>${data[i].name[3]}</p><span>${data[i].say[3]}</span><img src="${data[i].img[3]}"  /></div><div class="cont5"><p>${data[i].name[4]}</p><span>${data[i].say[4]}</span><img src="${data[i].img[4]}"  /></div><div class="cont6"><p>${data[i].name[5]}</p><span>${data[i].say[5]}</span><img src="${data[i].img[5]}"  /></div>`
									}
									contentright.innerHTML=vv;
									
									$(function(){
										$("#content1-right").find("img").mouseenter(function(){
											$(this).stop().animate({
														"right":40
													},400)
										})
										$("#content1-right").find("img").mouseleave(function(){
											$(this).stop().animate({
														"right":10
													},400)
										})
							})
					}
			})
	}
						if(bb==1){
							vv="";
							contentright.innerHTML="";
							Ajax({
								url:"../json/content2.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									console.log(data);
									for(var i in data){
										vv+=`
							<div class="kk"><img src="${data[i].picture}"/><p>${data[i].say}</p><span>${data[i].price}</span></div>`
				}
				console.log(nn)
				contentright.innerHTML+=vv;
				$(function(){
										$("#content1-right").find("img").mouseenter(function(){
											$(this).stop().animate({
														"right":40
													},400)
										})
										$("#content1-right").find("img").mouseleave(function(){
											$(this).stop().animate({
														"right":10
													},400)
										})
							})
			}
		})
	}
						if(bb==2){
							vv="";
							contentright.innerHTML="";
							Ajax({
								url:"../json/content3.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									console.log(data);
									for(var i in data){
										vv+=`
							<div class="kk"><img src="${data[i].picture}"/><p>${data[i].say}</p><span>${data[i].price}</span></div>`
				}
				console.log(nn)
				contentright.innerHTML+=vv;
				$(function(){
										$("#content1-right").find("img").mouseenter(function(){
											$(this).stop().animate({
														"right":40
													},400)
										})
										$("#content1-right").find("img").mouseleave(function(){
											$(this).stop().animate({
														"right":10
													},400)
										})
							})
			}
		})
	}
						if(bb==3){
							vv="";
							contentright.innerHTML="";
							Ajax({
								url:"../json/content4.json",
								type:'get',
								success:function(data){
									data=JSON.parse(data);
									console.log(data);
									for(var i in data){
										vv+=`
							<div class="kk"><img src="${data[i].picture}"/><p>${data[i].say}</p><span>${data[i].price}</span></div>`
				}
				console.log(nn)
				contentright.innerHTML+=vv;
				
			}
		})
	}
	})
				$("#content1-right").find("img").click(function(){
					location.href="http://localhost:8080/html/liebiao.html";
				})
	})
}
})
			$(function(){
				$("#touch").find("img").mouseenter(function(){
					$(this).stop().animate({
					"margin-top":-10
				},200)
				})
				$("#touch").find("img").mouseleave(function(){
					$(this).stop().animate({
					"margin-top":0
				},200)
				})
			})
		
		var gouwuche=document.getElementById("gouwuche");
		var y=document.getElementById("y");
		var hq=JSON.parse(getCookie("cart"));
		var ii=0;
		for(var i in hq){
			ii+=hq[i];
		}
		gochildren.innerHTML="购物车（"+ii+"）";
		gouwuche.innerHTML=ii;
		y.innerHTML=ii;
		y.onclick=function(){
			location.href="http://localhost:8080/html/gouwuc.html";
		}






}

