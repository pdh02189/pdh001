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

    //공유하기 팝업
    $('.btn_share').click(function(){
      $('.share_popup').css('display','block');
    });
    $('.share_popup .popup_close').click(function(){
      $('.share_popup').css('display','none');
    });

    // 회원가입 약관 펼침
    $(".check_info .arrow_btn").on("click", function() {
      $(this).parent().toggleClass("on");
  });


    //탭1
    const tabs1 = document.querySelectorAll(".tab1");
    const tabContent1 = document.querySelectorAll(".tab_content1");
    
    let tabNo1 = 0;
    let contentNo1 = 0;
    
    tabs1.forEach((tab1) => {
      tab1.dataset.id = tabNo1;
      tabNo1++;
      tab1.addEventListener("click", function () {
        tabs1.forEach((tab1) => {
          tab1.classList.remove("tab_active");
          tab1.classList.add("non_active");
        });
        this.classList.remove("non_active");
        this.classList.add("tab_active");
        tabContent1.forEach((content1) => {
          content1.classList.add("hidden");
          if (content1.dataset.id === tab1.dataset.id) {
              content1.classList.remove("hidden");
          }
        });
      });
    });
    
    tabContent1.forEach((content) => {
      content.dataset.id = contentNo1;
      contentNo1++;
    });
});

// 외부영역 클릭 시 검색 팝업 닫기
$(document).mouseup(function (e){
    var LayerPopup = $(".m_search_popup_inner");
    if(LayerPopup.has(e.target).length === 0){
		$('.m_search_popup').css('display', 'none');
    }
});