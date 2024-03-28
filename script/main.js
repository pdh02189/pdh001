$(window).scroll(function() {
    //헤더 스크롤 이벤트
	var scroll = $(window).scrollTop();
	if (scroll >= 1) {
		$("header").addClass("shadow");
	} else {
		$("header").removeClass("shadow");
	}
});

$(function() {
	//모바일 메뉴
	var header = $('header');
	var hbg = $('.header_btn');
    var sideMenu = $('.side_menu');
	var depth1 = $('.side_menu .menu_depth1');

    hbg.on('click', function () {
        if (hbg.hasClass("active")) {
        hbg.addClass('not-active').removeClass("active");
        header.removeClass('open');
        sideMenu.addClass('active').show().stop()
            .animate({
            opacity: 0
            }, 250, function () {
            $(this).hide();
            })
        depth1.removeClass('active');
        $('.menu__depth2').stop().slideUp(250);
        } else {
        header.addClass('open');
        hbg.addClass('active').removeClass("not-active");
        sideMenu.show().stop()
            .animate({
            opacity: 1
            }, 250)
        }
    });
    
    depth1.on('click', function () {
      depth1.not($(this)).removeClass('active');

      $('.menu_depth2').not($(this).siblings())
        .stop().slideUp(250);

      $(this).toggleClass('active')
        .siblings('.menu_depth2').stop()
        .slideToggle(250)
    });

	//모바일 검색 팝업
    $('.search_btn').click(function() {
        $('.m_search_popup').css('display', 'block');
    });
});

// 외부영역 클릭 시 검색 팝업 닫기
$(document).mouseup(function (e){
    var LayerPopup = $(".m_search_popup_inner");
    if(LayerPopup.has(e.target).length === 0){
		$('.m_search_popup').css('display', 'none');
    }
});