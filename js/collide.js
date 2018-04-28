

//循环判断是否碰撞
setInterval("collideDdetection()", 50);

function collideDdetection() {
	var $shells = $(".shell");
	var $bricks = $(".brick");
	var $tanks = $(".tank");

	for(var s = 0 ; s < $shells.length; s++) {
		var $shell = $shells.eq(s);
		//子弹和墙的碰撞
		for(var b = 0 ; b < $bricks.length; b++) {
			var $brick = $bricks.eq(b);
			
			if(isShellCollide($shell, $brick, 0)) {
				shellHp($shell, $brick);
			}
		}
		//子弹和tank的碰撞
		for(var t = 0 ; t < $tanks.length; t++) {
			var $tank = $tanks.eq(t);
			if(isShellCollide($shell, $tank, 0)) {
				shellHp($shell, $tank);
			}
		}
	}
	
	
	
			//$("span").eq(2).text();
}

//血量检测
function shellHp($shell, $body) {
	var shellHp = $shell.attr("data-hp");
	var bodyHp = $body.attr("data-hp");
	
	$shell.attr("data-hp", shellHp - bodyHp);
	if($shell.attr("data-hp") <= 0) {
		$shell.removeClass();
	}
	
	$body.attr("data-hp", bodyHp - shellHp);
	if($body.attr("data-hp") <= 0) {
		$body.remove();
	}
	//$("span").eq(2).text($shell.attr("data-hp")+","+$body.attr("data-hp"));
}

//碰撞检测(碰撞体， 被碰撞体)
function isShellCollide($collideBody, $beHit, keyNum) {
	//碰撞体的上下左右4个边的位置
	var collideBodyTop = parseInt($collideBody.css("top").replace("px", ""));
	var collideBodyBottom = collideBodyTop + parseInt($collideBody.css("height"));
	var collideBodyLeft = parseInt($collideBody.css("left").replace("px", ""));
	var collideBodyRight = collideBodyLeft + parseInt($collideBody.css("width"));
	
	//被碰撞体的上下左右4个边的位置(碰撞体是td而不是div时)
	/*if($beHit[0].tagName == "TD") {*/
		var beHitTop = parseInt($beHit[0].offsetTop);
		var beHitBottom = beHitTop + parseInt($beHit.css("height"));
		var beHitLeft = parseInt($beHit[0].offsetLeft);
		var beHitRight = beHitLeft + parseInt($beHit.css("width"));
	/*} else {
		var beHitTop = parseInt($beHit.css("top").replace("px", ""));
		var beHitBottom = beHitTop + parseInt($beHit.css("height"));
		var beHitLeft = parseInt($beHit.css("left").replace("px", ""));
		var beHitRight = beHitLeft + parseInt($beHit.css("width"));
	}*/
	
	
	//碰撞体的4个边是否在被碰撞体的内部
	var topBoolean = collideBodyTop <= beHitBottom && collideBodyTop >= beHitTop; 
	var bottomBoolean = collideBodyBottom <= beHitBottom && collideBodyBottom >= beHitTop;
	var leftBoolean = collideBodyLeft >= beHitLeft && collideBodyLeft <= beHitRight;
	var rightBoolean = collideBodyRight >= beHitLeft && collideBodyRight <= beHitRight;

	
	//是否碰撞
	if(topBoolean && (leftBoolean || rightBoolean) || bottomBoolean && (leftBoolean || rightBoolean) || leftBoolean && (topBoolean || bottomBoolean) || rightBoolean && (topBoolean || bottomBoolean)) {
		
		switch(keyNum) {
			case 87:
				$collideBody[0].style.top = (beHitBottom + 1) + "px";
			case 38:;break;
			case 83:
				$collideBody.css("top", (beHitTop - 1 - parseInt($beHit.css("height"))) + "px");
			case 40:;break;
			case 65:
				collideBody.css("left", (beHitRight + 1) + "px");
			case 37:;break;
			case 68:
				$collideBody[0].style.left = (beHitLeft - 1 - parseInt($beHit.css("width"))) + "px";
			case 39:;break;
		}
		
		return true;
	} else {
		return false;
	}
}












