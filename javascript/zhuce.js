window.onload=function(){
//	注册
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	var pnumber=document.getElementById("phonenum");
	var yanzhengma=document.getElementById("yanzhengma");
	var repassword=document.getElementById("repassword");
	var btn=document.getElementById("zc");
	var yama=document.getElementById("yama");
	var shu=1000+Math.floor(Math.random()*9000);
	var consol=false;
	yama.innerHTML=shu;

	btn.onclick=function(){
		var name=String(username.value);
		var pwd=String(password.value);
		var yzm=yanzhengma.value;
		var repwd=repassword.value;
		function checkMobile(){ 
		 var sMobile = pnumber.value;
		 if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
		  alert("不是完整的11位手机号或者正确的手机号前七位"); 
		  consol=false;
		  location.reload();
		  pnumber.focus(); 
		  return false; 
		 }else{
			consol=true;
			}
		} 
		checkMobile();
		
		if(yzm!=shu){
			alert("验证码错误");
			location.reload();
			consol=false;
		}else{
			consol=true;
		}
		
		Ajax({
		url:"http://h6.duchengjiu.top/shop/api_user.php",
		type:"post",
		data:{"status":"register","username":name,"password":pwd},
		success:function(data){
			var data=JSON.parse(data);
			console.log(data);
			var cc=data.code;
			var dd=data.message;
			switch(cc){
				case 0:
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
			
			
		if(repwd!=pwd){
			alert("两次密码输入不一致");
			location.reload();
			consol=false;
		}else{
			consol=true;
		}
		if(consol==true&&cc==0){
			alert("注册成功");
			location.href="http://localhost:8080/html/denglu.html";
		}

		}
	})
	}

}


