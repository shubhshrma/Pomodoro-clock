$(document).ready(function(){
	$("#session_plus").on("click",function(){
		$("#session_time").html(Number($("#session_time").text())+1);
	});
	$("#session_minus").on("click",function(){
		$("#session_time").html(Number($("#session_time").text())-1);
	});
	$("#break_plus").on("click",function(){
		$("#break_time").html(Number($("#break_time").text())+1);
	});
	$("#break_minus").on("click",function(){
		$("#break_time").html(Number($("#break_time").text())-1);
	});

});