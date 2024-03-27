$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 1) {
		//console.log('a');
		$("header").addClass("shadow");
	} else {
		//console.log('a');
		$("header").removeClass("shadow");
	}
});