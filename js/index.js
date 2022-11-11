$(window).on('load', function(){
    // $('.outer').delay(2000).fadeOut(300)
    var count = 0;
    function add() {
        count++
        $('.outer .charge').text(count+'%').css({
            width:count+'%'
        })

        if (count===100) {
            clearInterval(timer)
            $('.outer').delay(300).fadeOut(300)
        }
    }
    var timer = setInterval(add, 10)
})




// p.227
// 윈도우.scrollTop() : 브라우저의 수직 스크롤 이동 거리값을 구함
// 박스.offset().top : 브라우저 맨 위에서부터 박스까지의 거리값

$('#menu li a').on('click', function(){
    let lino = $(this).parent().index()
    // console.log(lino)
    let sectdist = $('section').eq(lino).offset().top
    $('html, body').animate({
        scrollTop:sectdist
    }, 1000)

    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
    return false
})

var sect1, sect2, sect3, sect4;
function sect(){
sect1 = $('section').eq(0).offset().top
sect2 = $('section').eq(1).offset().top
sect3 = $('section').eq(2).offset().top
sect4 = $('section').eq(3).offset().top
}
sect()

$(window).resize(function(){
    sect()
})

$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if (sct>0 && sct<sect2) {
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
    } else if ( sct>=sect2 && sct<sect3) {
        $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
    } else if ( sct>=sect3 && sct<sect4 ) {
        $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
    } else if (sct>=sect4) {
        $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
    }
})

$('section').on('mousemove', function(e){
    var posX = e.pageX
    var posY = e.pageY
    
    //첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $(".p11").css({"right":20-(posX/30) , "bottom":20-(posY/30) });
    $(".p12").css({"right":130+(posX/20) , "bottom":-40+(posY/20) });
    $(".p13").css({"right":60+(posX/20) , "top":180+(posY/20) });		
	
    //두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $(".p21").css({"right":-180-(posX/30) , "bottom":-480-(posY/30) });
    $(".p22").css({"right":130+(posX/50) , "bottom":-40+(posY/50) });
		
    //세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $(".p31").css({"right":280-(posX/30) , "bottom":30-(posY/30) });
    $(".p32").css({"right":110+(posX/20) , "bottom":-270+(posY/20) });
    $(".p33").css({"right":-70+(posX/20) , "bottom":-130+(posY/20) });	
		
    //네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $(".p41").css({"right":20-(posX/30) , "bottom":-120-(posY/30) });
    $(".p42").css({"right":0+(posX/20) , "bottom":-180+(posY/20) });	

})

$('section').on('mousewheel', function(e, delta){
    // 위로 delta : 1
    // 아래로 delta : -1
    if (delta>0) {
        var prevTop = $(this).prev().offset().top
        $('html, body').stop().animate({
            scrollTop:prevTop+'px'
        }, 500)
    } else if (delta<0) {
        var nextTop = $(this).next().offset().top
        $('html, body').stop().animate({
            scrollTop:nextTop+'px'
        }, 500)
    }
})