// Animations

var smoothScrollTo = smoothScrollTo || {

	scroll: function(targetId){

		var $target = $(targetId).first();
		if ($target) {
			$('html,body').animate({
			 	scrollTop: $target.offset().top
			}, 1000);
		}
		
	}

}