

function test() {
	$("span").eq(0).text($("#player1").css("width"));
	$("span").eq(1).text($("#player1").css("height"));
}
	
//setInterval("test()", 500);

//发射子弹
function shell(player, forward) {
	var w = player.css("width").replace("px", "") / 2;
	var h = player.css("height").replace("px", "") / 2;
	var x = parseInt(player.css("left").replace("px", "")) + w;
	var y = parseInt(player.css("top").replace("px", "")) + h;
	var shellWidth;
	var shellHeight;
	var animateParams;
	var speedTime;
	var speed = 0.3;
	//子弹目标位置和时间
	switch(forward) {
		case 0: 
			y -= (h - 2);
			animateParams = '{"top": "0"}';
			speedTime = y / speed;
			break;
		case 180:
			y += (h + 2);
			animateParams = '{"top": "900px"}';
			speedTime = Math.abs(backHeight - y) / speed;
			break;
		case 270:
			x -= (w - 2);
			animateParams = '{"left": "0"}';
			speedTime = x / speed;
			break;
		case 90:
			x += (w + 2);
			animateParams = '{"left": "1600px"}';
			speedTime = Math.abs(backWidth - x) / speed;
			break;
	}
	var shell = $("<div></div>");
	shell.addClass("shell");
	shell.attr("data-hp", 1);
	shell.css("top", y);
	shell.css("left", x);
	$("body").append(shell);
	shell.animate(JSON.parse(animateParams), speedTime, "linear", function(){this.remove()});
}

	
	
//通过按键控制移动和射击
document.onkeydown=function(event){

    var event=event||window.event;

    var key = String.fromCharCode(event.keyCode);
    var key = event.keyCode;
	var player1 = $("#player1");
	var player2 = $("#player2");
	
	switch(key) {
		case 87://W
			if(p1_forward == 0) {
				player1.animate({top:"-=10px"}, 0);
			} else {
				player1.css({"transform":"rotate(0deg)"});
				p1_forward = 0;
			}
			isTankCollide(player1, key);
			break;
		case 83://S
			if(p1_forward == 180) {
				player1.animate({top:"+=10px"}, 0);
			} else { 
				player1.css({"transform":"rotate(180deg)"});
				p1_forward = 180;
			}
			isTankCollide(player1, key);
			break;
		case 65://A
			if(p1_forward == 270) {
				player1.animate({left:"-=10px"}, 0);
			} else {
				player1.css({"transform":"rotate(270deg)"});
				p1_forward = 270;
			}
			isTankCollide(player1, key);
			break;
		case 68://D
			if(p1_forward == 90) {
				player1.animate({left:"+=10px"}, 0);
			} else {
				player1.css({"transform":"rotate(90deg)"});
				p1_forward = 90;
			}
			isTankCollide(player1, key);
			break;
		case 74://J
			shell(player1, p1_forward);
			break;
			
			
		case 38://↑
			if(p2_forward == 0) {
				player2.animate({top:"-=10px"}, 0);
			} else {
				player2.css({"transform":"rotate(0deg)"});
				p2_forward = 0;
			}
			isTankCollide(player2, key);
			break;
		case 40://↓
			if(p2_forward == 180) {
				player2.animate({top:"+=10px"}, 0);
			} else { 
				player2.css({"transform":"rotate(180deg)"});
				p2_forward = 180;
			}
			isTankCollide(player2, key);
			break;
		case 37://←
			if(p2_forward == 270) {
				player2.animate({left:"-=10px"}, 0);
			} else {
				player2.css({"transform":"rotate(270deg)"});
				p2_forward = 270;
			}
			isTankCollide(player2, key);
			break;
		case 39://→
			if(p2_forward == 90) {
				player2.animate({left:"+=10px"}, 0);
			} else {
				player2.css({"transform":"rotate(90deg)"});
				p1_forward = 90;
			}
			isTankCollide(player2, key);
			break;
		case 96://0
		
			break;
	}

}


function isTankCollide($player, keyNum) {
	$beHit = $(".brick");
	for(var i = 0 ; i < $beHit.length; i++) {
		if(isShellCollide($player, $beHit.eq(i), keyNum)) {
			return;
		}
	}
}










