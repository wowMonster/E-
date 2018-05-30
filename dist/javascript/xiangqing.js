window.onload = function(){
	var touchleft=document.getElementById("xiahua-shang-left");
	var touchright=document.getElementById("xiahua-shang-right");
	var xialeft=document.getElementById("xia-left");
	var xiaright=document.getElementById("xia-right");
	var denglu=document.getElementById("denglu");
	var zhuce=document.getElementById("zhuce");
	var bigul=document.getElementById("xiahua");
	var xiahuaxia=document.getElementById("xiahua-xia");
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

var fangda=document.getElementById("fangda");

var cc="";
var yy="";
Ajax({
	url:"../json/xiangqing.json",
	type:"get",
	success:function(data){
		var data=JSON.parse(data);
		console.log(data);
		for(var i in data){
			for(var j in data[i].img){
				yy+=`<img src="../${data[i].img[j]}"/>`
			}
			cc+=`<div id="left1"><div id="topcont"><img src="../${data[i].img[0]}"/></div><div id="centercont"><span id="centleft"><</span><div id="baoq"><div id="langbox">${yy}</div></div><span id="centright">></span></div><p>商品编号:${i}</p></div>`
		}
		fangda.innerHTML=cc;
	var langbox=document.getElementById("langbox");
	var leftbtn=document.getElementById("centleft");
	var rightbtn=document.getElementById("centright");
	var bigcont=document.getElementById("bigcont");
	var topcont=document.getElementById("topcont");
	var op=topcont.children[0];
	var oimg=langbox.children;
	var aa=oimg.length*44;
	console.log(aa)
	langbox.style.width=aa+"px";
	console.log(langbox.offsetWidth)
	var count=0;
		leftbtn.onclick=function(){
			count++;
			if(count>oimg.length){
				count=0;
			}
			langbox.style.left=(-count*44)+"px";
		}
		console.log(count)
		rightbtn.onclick=function(){
			count++;
			if(count>oimg.length){
				count=0;
			}
			langbox.style.left=(count*44)+"px";
		}
		var topcont=document.getElementById("topcont");

	}
})
var youbian=document.getElementById("youbian");
var ll="";
Ajax({
	url:"../json/xiangqing.json",
	type:"get",
	success:function(data){
		var data=JSON.parse(data);
		for(var i in data){
			ll+=`<div>
			<p id="say">${data[i].say}</p>
			<p id="price">${data[i].price}</p>
			<span>${data[i].shou}</span>
			<span>${data[i].zx}</span>
			<span>${data[i].pg}</span>
			<div id="coun">0</div>
			<input type="button" value="加入购物车" id="gouwuc" data-id=${i}/>
			</div>`
		}
		console.log(ll)
		youbian.innerHTML=ll;
		var btn=document.getElementById("gouwuc");
		var coun=document.getElementById("coun");
		if(getCookie("cart")!== undefined){
			var obj = JSON.parse(getCookie("cart"));
		}else{
			var obj = {};
		}
		var sum = 0;
		for(var b in obj){
			sum+=obj[b];
		}
		coun.innerHTML=sum;
		btn.onclick = function(){
			var productid=this.getAttribute("data-id");
			if(obj[productid] ==  undefined){
				obj[productid] = 1;
			}else{
				obj[productid]++;
			}
			var sum = 0;
			for(var b in obj){
				sum+=obj[b];
			}
			coun.innerHTML=sum;
			var objtostr = JSON.stringify(obj);
			setCookie("cart",objtostr,7);
		}
		
		
	}

})












}

