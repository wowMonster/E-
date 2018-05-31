window.onload = function(){
	var touchleft=document.getElementById("xiahua-shang-left");
	var touchright=document.getElementById("xiahua-shang-right");
	var xialeft=document.getElementById("xia-left");
	var xiaright=document.getElementById("xia-right");
	var denglu=document.getElementById("denglu");
	var zhuce=document.getElementById("zhuce");
	var bigul=document.getElementById("xiahua");
	var xiahuaxia=document.getElementById("xiahua-xia");
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
			xiahuaxia.style.display="block";
			xialeft.style.display="block";
			xiaright.style.display="none";
		}
		touchright.onmouseover=function(){
			touchright.style.color="white";
			xiahuaxia.style.display="block";
			xialeft.style.display="none";
			xiaright.style.display="block";
		}
		touchright.onmouseout=function(){
			touchright.style.color="darkgray";
		}
		touchleft.onmouseout=function(){
			touchleft.style.color="darkgray";
		}
		xiahuaxia.onmousemove=function(){
			xiahuaxia.style.display="block";
		}
		xiahuaxia.onmouseout=function(){
			xiahuaxia.style.display="none";
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
					<li class="lione"><img src="../${data[i].list.bigimg[0]}"/><span>${data[i].list.bigname[0]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>

				</ul>
				<ul class="bfive">
					<li class="lione"><img src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.bigname[0]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[2]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>	
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>
					<li class="litwo"><span class="lispan">${data[i].list.listname[0]}</span><img class="liimg" src="../${data[i].list.bigimg[1]}"/><span>${data[i].list.listlist[0]}</span><span>${data[i].list.listlist[1]}</span><span>${data[i].list.listlist[2]}</span><span>${data[i].list.listlist[3]}</span><span>${data[i].list.listlist[4]}</span></li>	
				</ul>
				</div>
				</li>
					`
				
			}
				yan.innerHTML=srr;  
		}
	})
	
	var conbtm=document.getElementById("conright-bottom");
	var kk="";
	var pp="";
	Ajax({
		url:"../json/liebiao.json",
		type:"get",
		success:function(data){
			var data=JSON.parse(data);
			console.log(data);
			
			for(var i in data){
				for(var j in data[i].img){
					pp+=`<img src="../${data[i].img[j]}" />`}
				
				kk+=`
						<div class="liebiaokuang" boo-id=${i}><img src="../${data[i].picture}" class="datu"/><div class="xiaotu">${pp}</div><p class="biaoti">${data[i].say}</p><p class="jiage">${data[i].price}</p><span class="shouchu">${data[i].shou}</span><span class="hudong">${data[i].zx}</span></div>
				`
				pp="";
			}
			console.log(kk)
			conbtm.innerHTML=kk;
			$(function(){
				var idd=document.getElementsByClassName("liebiaokuang");
					for(var i in idd){
						idd[i].onclick=function(){
							var souid=this.getAttribute("boo-id");
							location.href="http://localhost:8080/html/xiangqing.html?id="+souid;
						}
					}
		
			})
		}
	})
		var gouwuche=document.getElementById("gouwuche");
		var hq=JSON.parse(getCookie("cart"));
		var y=document.getElementById("y");
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

