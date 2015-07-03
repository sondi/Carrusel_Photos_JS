// Esta es otra sintaxis para $(document).ready();
$("#next_frame").on('click',function(){
		var $images = $("ul");
		var $margin = $("ul").css("margin-left");
		$images.css('margin-left', '-=360px')
			if ($margin == "-720px"){
				var $first_img = $("ul li:first-child");
				$first_img.remove()
				$images.append($first_img).css('margin-left', '+=360px')
			}
});

$("#previous_frame").on('click',function(){
		var $images = $("ul");
		var $margin = $("ul").css("margin-left");
		$images.css('margin-left', '+=360px')
			if ($margin == "0px"){
				var $last_img = $("ul li:last-child");
				$last_img.remove()
				$images.prepend($last_img).css('margin-left', '-=360px')
			}
});