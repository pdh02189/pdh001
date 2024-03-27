$(window).scroll(function() {
    //헤더 스크롤 이벤트
	var scroll = $(window).scrollTop();
	if (scroll >= 1) {
		$("header").addClass("shadow");
	} else {
		$("header").removeClass("shadow");
	}
});