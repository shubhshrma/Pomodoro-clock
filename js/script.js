$(document).ready(function(){
	$("#pause,#reset").hide();
	var ongoing="Session is on.Focus!";
	$("#session_plus").on("click",function(){
		$("#session_time").html(Number($("#session_time").text())+1);
	});
	$("#session_minus").on("click",function(){
		if(Number($("#session_time").text())>1)
		$("#session_time").html(Number($("#session_time").text())-1);
	});
	$("#break_plus").on("click",function(){
		$("#break_time").html(Number($("#break_time").text())+1);
	});
	$("#break_minus").on("click",function(){
		if(Number($("#break_time").text())>1)
		$("#break_time").html(Number($("#break_time").text())-1);
	});
	$("#start").on("click",function(){
		$("#reset").show();
        sessionstart();
		function breakstart(){
			var mins=$("#break_time").text()-1;
			var secs=60;
			ongoing="It's Break time.Enjoy!";
			var temp=setInterval(function(){
			$("#start").html('<div class="show" id="break_show">'+ongoing+'</div>'+'<div class="timer" id="">'+mins+
				' : '+secs+'</div><div id="reset_button">'+
		        '<a href="#" id="reset" >Reset</a></div>');
			secs--;
			if(secs===0)
			{
				secs=59;
				mins--;
			}
			if(mins<0)
			{
				clearInterval(temp);
				sessionstart();
			}
			

		},1000);
			
		}
		function sessionstart(){
		ongoing="Session is on.Focus!";
		var mins=$("#session_time").text()-1;
		var secs=60;
		var temp=setInterval(function(){
			$("#start").html('<div class="show" id="session_show">'+ongoing+'</div>'+'<div class="timer" id="">'+mins+
				' : '+secs+'</div><div id="reset_button">'+
		        '<a href="#" id="reset">Reset</a></div>');
			secs--;
			if(secs==0)
			{
				secs=59;
				mins--;
			}
			if(mins<0)
			{
				clearInterval(temp);
				breakstart();
			}
			
		},1000);
		
       }
    });

    $("#reset").on("click",function(){
    	clearInterval(temp);
    })


});