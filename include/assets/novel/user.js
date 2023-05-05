//自定义文章页阅读样式
var options = {path: '/', expires: 10};			//定义路径，过期时间为10天
var cookie_backColor = $.cookie("backColor");	//定义背景颜色值
var cookie_fontStyle = $.cookie("fontStyle");	//定义字体类别
var cookie_fontSize = $.cookie("fontSize");		//定义字体大小
//如果cookie里有背景颜色、字体样式、字体大小，就加载相应属性。
$(function(){
	if(cookie_backColor){
		$('.entry').css('background', cookie_backColor);
	}
	if(cookie_fontStyle){
		$('.entry p').css('font-family', cookie_fontStyle);
	}
	if(cookie_fontSize){
		$('.entry p').css('font-size', cookie_fontSize + 'px');
	}
});

//背景颜色方法
function backcolor(num){
	if(num == 1){
		$(".entry").css('background','#fef0e1');		//改变背景颜色
		$.cookie("backColor", "#fef0e1", options);	//把背景颜色值传进"backColor"这个cookie里
	}
	if(num == 2){
		$(".entry").css('background','#feeaee');
		$.cookie("backColor", "#feeaee", options);
	}
	if(num == 3){
		$(".entry").css('background','#fdecfd');
		$.cookie("backColor", "#fdecfd", options);
	}
	if(num == 4){
		$(".entry").css('background','#e9f4fc');
		$.cookie("backColor", "#e9f4fc", options);
	}
	if(num == 5){
		$(".entry").css('background','#f3fdec');
		$.cookie("backColor", "#f3fdec", options);
	}
	if(num == 6){
		$(".entry").css('background','#ffffff');
		$.cookie("backColor", "#ffffff", options);
	}
}
//字体颜色方法
function fontstyle(num){
	if(num == 1){
		$(".entry p").css('font-family','宋体');		//改变字体颜色
		$.cookie("fontStyle", "宋体", options);	//把字体颜色值传进"fontStyle"这个cookie里
	}
	if(num == 2){
		$(".entry p").css('font-family','黑体');
		$.cookie("fontStyle", "黑体", options);
	}
	if(num == 3){
		$(".entry p").css('font-family','Microsoft Yahei');
		$.cookie("fontStyle", "Microsoft Yahei", options);
	}
	if(num == 4){
		$(".entry p").css('font-family','楷体');
		$.cookie("fontStyle", "楷体", options);
	}
}
//字体大小方法
function fontsize(num){
	switch(num){
		case 1:
			$(".entry p").css('font-size','14px');	//改变字体大小
			$.cookie("fontSize", "14", options);	//把字体大小值传进"fontSize"这个cookie里
			break;
		case 2:
			$(".entry p").css('font-size','18px');
			$.cookie("fontSize", "18", options);
			break;
		case 3:
			$(".entry p").css('font-size','22px');
			$.cookie("fontSize", "22", options);
			break;
		case 4:
			$(".entry p").css('font-size','26px');
			$.cookie("fontSize", "26", options);
			break;
	}
}
//恢复默认方法
function defaultCL(){
	$(".entry").css('background','');			//清空背景颜色
	$.cookie("backColor", null, options);	//把背景颜色空值传进"backColor"这个cookie里
	$(".entry p").css('color','');			//清空字体颜色
	$.cookie("fontStyle", null, options);	//把字体颜色空值传进"fontStyle"这个cookie里
	$(".entry p").css('font-size','');		//清空字体大小
	$.cookie("fontSize", null, options);	//把字体大小空值传进"fontSize"这个cookie里
}