window.onload = function(){
var qingsuan=document.getElementById("qingsuan");
var dd="";
	var one=document.getElementById("one");
	var oneshou=one.children[0];
	oneshou.onclick=function(){
		location.href="http://localhost:8080";
	}
Ajax({
	url:"../json/liebiao.json",
	type:"get",
	success:function(data){
		var data=JSON.parse(data);
		console.log(data[1001]);
		
		
		if(getCookie("cart")==undefined){
			qingsuan.innerHTML="购物车空空，快去选购吧";
		}else{
			var obj=JSON.parse(getCookie("cart"));
		}
		for(var i in obj){
			var cpp=parseInt(obj[i]*(data[parseInt(i)].price).substring(1)*10)/10;
			
			
			dd+=`
			<div class="gwc">
				<input type="checkbox" checked class="xuankuang">
				<img src="../${data[parseInt(i)].picture}" class="ig"/>
				<span class="miaosu">${data[parseInt(i)].say}</span>
				<div class="jiajiankuang">
					<div class="jian" jian-id=${i}>-</div>
					<div class="shu">${obj[i]}</div>
					<div class="jia" jia-id=${i}>+</div>
				</div>
				<div class="zongjia">${cpp}元</div>
				<span class='delbtn' data-id=${i}>删除</span>
			</div>
			`
		}
		qingsuan.innerHTML+=dd;
//		删除商品
		var odel=document.getElementsByClassName("delbtn");
		for(var i in odel){
			odel[i].onclick=function(){
				var delid=this.getAttribute("data-id");
				delete obj[delid];
				qingsuan.removeChild(this.parentNode);
				setCookie("cart",JSON.stringify(obj),7);
				location.reload();
			}
		}
//		商品减减
		var jian=document.getElementsByClassName("jian");
		for(var j in jian){
			jian[j].onclick=function(){
				var jianid=this.getAttribute("jian-id");
				if(obj[jianid]<0){
					obj[jianid]=0;
				}
			console.log(obj[jianid])
				obj[jianid]--;
				if(obj[jianid]<0){
					obj[jianid]=0;
				}
				setCookie("cart",JSON.stringify(obj),7);
				location.reload();
			}
		}
//		商品加加
		var jia=document.getElementsByClassName("jia");
		for(var l in jia){
			jia[l].onclick=function(){
				var jiaid=this.getAttribute("jia-id");
				obj[jiaid]++;
				setCookie("cart",JSON.stringify(obj),7);
				location.reload();
			}
		}

}
})



		var gouwuche=document.getElementById("gouwuche");
		var y=document.getElementById("y");
		var hq=JSON.parse(getCookie("cart"));
		var ii=0;
		for(var i in hq){
			ii+=hq[i];
		}
		gouwuche.innerHTML=ii;
		y.innerHTML=ii;
		y.onclick=function(){
			location.href="http://localhost:8080/html/gouwuc.html";
		}
}

