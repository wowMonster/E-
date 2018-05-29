window.onload=function(){
//	登录
var dengd=document.getElementById("in4");
var dengz=document.getElementById("in1");
var dengp=document.getElementById("in2");
dengd.onclick=function(){
	var dengzz=String(dengz.value);
	var dengpp=String(dengp.value);
	console.log(dengzz,dengpp);
	Ajax({
		url:"http://h6.duchengjiu.top/shop/api_user.php",
		type:"post",
		data:{"status":"login","username":dengzz,"password":dengpp},
		success:function(data){
			var data=JSON.parse(data);
			console.log(data)
			var cc=data.code;
			var dd=data.message;
			switch(cc){
				case 0:
				location.href="http://localhost:8080/";
					break;
				case 1:
					alert("数据为空");
					break;
				case 2:
					alert("失败");
					break;
				case 3:
					alert("系统错误，请联系管理员");
					break;
				case 1000:
					alert("用户名错误,格式不正确，规定在3-20位数字字母下划线");
					break;
				case 10001:
					alert("密码错误,格式不对,需要在6-20位之间,数字字母下划线");
					break;
				case 10004:
					alert(dd);
					break;
				case 2000:
					alert(dd);
					break;
				case 2001:
					alert(dd);
					break;
				case 2002:
					alert(dd);
					break;
					
				default:
					alert("请重新输入数据！！！或联系管理员  雷  丰  溪");
			}
		}
	})
}
}
	
