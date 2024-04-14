
$(document).ready(function() {
    // summernote
    $('#summernote').summernote({
        // 에디터 크기 설정
        height: 635,
        // 에디터 한글 설정
        lang: 'ko-KR',
        // 에디터에 커서 이동 (input창의 autofocus라고 생각하시면 됩니다.)
        toolbar: [
            ['fontname', ['fontname']],
            // 글자 크기 설정
            ['fontsize', ['fontsize']],
            // 글자 [굵게, 기울임, 밑줄, 취소 선, 지우기]
            ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
            // 글자색 설정
            ['color', ['color']],
            // 표 만들기
            ['table', ['table']],
            // 서식 [글머리 기호, 번호매기기, 문단정렬]
            ['para', ['ul', 'ol', 'paragraph']],
            // 줄간격 설정
            ['height', ['height']],
            // 이미지 첨부
            ['insert',['picture', 'link']]
            ],
            // 추가한 글꼴
        fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋음체','바탕체'],
        // 추가한 폰트사이즈
        fontSizes: ['8','9','10','11','12','14','15','16','18','20','22','24','28','30','36','50','72','96'],
        // focus는 작성 페이지 접속시 에디터에 커서를 위치하도록 하려면 설정해주세요.
        focus : true,
        // callbacks은 이미지 업로드 처리입니다.
        callbacks: {	//여기 부분이 이미지를 첨부하는 부분
                    onImageUpload : function(files) {
                        uploadSummernoteImageFile(files[0],this);
                    },
                    onPaste: function (e) {
                        var clipboardData = e.originalEvent.clipboardData;
                        if (clipboardData && clipboardData.items && clipboardData.items.length) {
                            var item = clipboardData.items[0];
                            if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                                e.preventDefault();
                            }
                        }
                    }
                }
    });
});