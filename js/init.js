var start = false;//是否加载完毕

var backWidth = parseInt($("#backgroundDiv").css("width").replace("px",""));//背景div宽度
var backHeight = parseInt($("#backgroundDiv").css("height").replace("px",""));//背景div高度

var p1_forward = 0;//1号玩家的前方（上下左右分别为0,180,270,80）
var p2_forward = 0;//2号玩家的前方

var p1_hp = 5;
var p2_hp = 5;

$("#player1").attr("data-hp", p1_hp);
$("#player2").attr("data-hp", p2_hp);