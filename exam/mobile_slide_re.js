const slide = {
	
	open : function() {
		if(!$("aside").hasClass("on")) {
			$("aside").addClass("on");
		}
		
		$("#layer_dim").removeClass("dn");
	},
	
	close : function() {
		
		$("aside").removeClass("on");
		if (!$("#layer_dim").hasClass("dn")) {  
			$("#layer_dim").addClass("dn");
		}
	}
};

$(function() {
	$(".side_open").click(function(){
		slide.open();
	});
	
	$(".side_close, #layer_dim").click(function(){
		slide.close();
	});
});