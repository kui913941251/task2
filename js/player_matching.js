window.onload=function(){
	//返回
	var back = document.getElementById("back");
	back.onclick=function(){
		window.location.href="homepage.html";
	}
	//去发牌
	var start=document.getElementById("start");

	//获取 去发牌，并创建单击函数
	var start = document.getElementById("start");
	//获取输入的人数
	var num = document.getElementById("num");
	start.onclick=function(){
		//限制输入人数
		//获取输入的人数		
		if(num.value<4 || num.value>18){
			alert("请输入正确的玩家数量");
		}else{
			window.location.href="view_identity.html";
		}
	}
	//在设置输入玩家数量，获取焦点时
	num.onfocus=function(){
		if(this.value == 4){
			this.value="";
		}
	}
	num.onblur=function(){
		if(this.value == ""){
			this.value=4; 
		}
	}
	//进度条数值绑定
		var rg = document.getElementById("rg");
		rg.min=4;
		rg.max=18;
		rg.step=1;
		rg.value=4;
		rg.onchange=function(){
			num.value=rg.value;
			num.oninput();
		} 
	//加减号控制进度条
	var reduce=document.getElementById("reduce");
	var plus  =document.getElementById("plus");
	//创建加减号单击响应函数
	plus.onclick=function(){
		rg.value++;
		num.value=rg.value;
	}
	reduce.onclick=function(){
		rg.value--;
		num.value=rg.value;
	}
	
	//获取  点击设置 ， 并创建单击响应函数
	num.oninput=function(){
		rg.value=num.value;
		//限制输入数字
		num.value=num.value.replace(/[^0-9]/,'');
		/*if(num.value=""){
			rg.value=4;
		}*/
		//水民人数
		var people = document.getElementById("blue_gray");
		 
		//杀手人数
		var killer = document.getElementById("yellow_gray");
		
		//分配人数
		if(num.value >=4 && num.value <=8 ){
			blue_gray.innerHTML= " "+(num.value-2)+" 人";
			yellow_gray.innerHTML=" "+2+" 人";
		}else if(num.value>8 && num.value<=12){
			blue_gray.innerHTML= " "+(num.value-3)+" 人";
			yellow_gray.innerHTML=" "+3+" 人";
		}else if(num.value>12 && num.value<=18){
			blue_gray.innerHTML= " "+(num.value-4)+" 人";
			yellow_gray.innerHTML=" "+4+" 人";
		}else{
			blue_gray.innerHTML= " "+0+" 人";
			yellow_gray.innerHTML=" "+0+" 人";
		}
	}
			
} 
