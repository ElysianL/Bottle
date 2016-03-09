$(function() {
	var rint; // 定义随机数

	for (i = 1; i <= 10; i++) {   //循环10次，添加10个瓶子，修改可以添加不同数量瓶子
		rint = getRandom(19); // 0-20随机取
		if (rint < 10) {
			rint = "0" + rint;   
		}
		$.floatingAd({
			delay: 5,   //漂浮速度，1-100，越小越快
			//漂浮内容
			ad:	[{
				'img': './css/img/green'+rint+'.png',
				'z-index':getRandom(100),
			},{
				'img': './css/img/yellow'+rint+'.png',
				'z-index': getRandom(100),
			},{
				'img': './css/img/blue'+rint+'.png',
				'z-index': getRandom(100),
			},{
				'img': './css/img/orange'+rint+'.png',
				'z-index': getRandom(100),
			}],
		});
	}
	 
	$(".ad").each(function(){  //取得所有图片，随机旋转角度（0-360）
		$(this).find("img").rotate(getRandom(360))
	})
	
	
	var beepOne = $("#beep-one")[0];
	$('.ad').live('click', function() { // 所有class= position 的 点击触发
		beepOne.play();  //点击播放破碎声音
		var name = $(this).find("img").attr("src");     //取得点击图片url
		name = name.substring(0,name.length-6);
		var tem = "<div class='drop'>";   //碎瓶子div
		for (i = 0; i <= 5; i++) {
			tem += "<img src='"+name+"p0"+parseInt(i+1)
					+ ".png' class='break'  >";
		}
		tem = tem + "</div>"    //添加破碎瓶子集合
		$(this).find("img").remove();  //删除原瓶子
		$(this).append(tem);   //添加碎瓶子
		$(".break").animate({    //碎瓶子集合掉落
			'top' : '+=1000px',
			"z-index" : "0"
		}, 3000); //速度3000毫秒
		
		var ms = $('.bottle').length;
		if(ms < 1){
			parent.location.reload();
		}
	});
});

// 获取 0-n随机数
function getRandom(n) {
	return Math.floor(Math.random() * n + 1)
}


 