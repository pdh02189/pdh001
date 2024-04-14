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

    //탈퇴 팝업
    $('.btn_withdrawal').click(function(){
      $('.withdrawal_popup_wrap').css('display','flex');
    });
    $('.withdrawal_popup_wrap .close, .withdrawal_popup_wrap .btn_cancel').click(function(){
      $('.withdrawal_popup_wrap').css('display','none');
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

// 등록폼 이미지 업로드
document.addEventListener('DOMContentLoaded', function(){
  //이미지 객체 타입으로 이미지 확장자 밸리데이션
  var validateType = function(img){
      return (['image/jpeg','image/jpg','image/png'].indexOf(img.type) > -1);
  }

  var validateName = function(fname){
      let extensions = ['jpeg','jpg','png'];
      let fparts = fname.split('.');
      let fext = '';
  
      if(fparts.length > 1){
          fext = fparts[fparts.length-1];
      }
  
      let validated = false;
      
      if(fext != ''){
          extensions.forEach(function(ext){
              if(ext == fext){
                  validated = true;
              }
          });
      }
  
      return validated;
  }

  // 파일 선택 필드에 이벤트 리스너 등록
  // document.querySelector('.imageSelector').addEventListener('change', function(e){
  //     let elem = e.target;
  //     if(validateType(elem.files[0])){
  //         let preview = document.querySelector('.thumb img');
  //         preview.src = URL.createObjectURL(elem.files[0]); //파일 객체에서 이미지 데이터 가져옴.
  //         document.querySelector('.thumb').style.display = 'block'; // 이미지 삭제 링크 표시
  //         preview.onload = function() {
  //             URL.revokeObjectURL(preview.src); //URL 객체 해제
  //         }
  //     }else{
  //     console.log('이미지 파일이 아닙니다.');
  //     }
  // });
  // document.querySelector('.dellink').addEventListener('click', function(e){
  //     let dellink = e.target;
  //     let preview = dellink.previousElementSibling;
  //     preview.src = ''; // 썸네일 이미지 src 데이터 해제
  //     document.querySelector('.thumb').style.display = 'none';
  // });
 
});

$(function() {
  $(".imageSelector").off("change").on("change", function(e) {
    var imageSelector = $(this);
    var file = e.target.files[0];
    if(isImageFile(file)) {
      var reader = new FileReader(); 
      reader.onload = function(e) {
        imageSelector.parent().siblings(".thumb").children("img").attr("src", e.target.result);
        imageSelector.parent().siblings(".thumb").removeClass("d_none");
      }
      reader.readAsDataURL(file);
    } else {
      alert("이미지 파일만 첨부 가능합니다.");
      imageSelector.val("");
      imageSelector.parent().siblings(".thumb").children("img").attr("src", "");
    }
  });

  $(".dellink").on("click", function(e) {
      var delbtn = $(this);
      let dellink = e.target;
      let preview = dellink.previousElementSibling;
      preview.src = ''; // 썸네일 이미지 src 데이터 해제
      delbtn.parent(".thumb").addClass("d_none");
      delbtn.parent(".thumb").siblings("label").children(".imageSelector").val("");
  });
});

// 업로드 파일 이미지 파일인지 확인
function isImageFile(file) {
  // 파일명에서 확장자를 가져옴
  var ext = file.name.split(".").pop().toLowerCase(); 
  return ($.inArray(ext, ["jpg", "jpeg", "gif", "png"]) === -1) ? false : true;
}


