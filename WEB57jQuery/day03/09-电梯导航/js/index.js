$(function() {
    var flag = true
    fn()
    function fn() {
        if($(document).scrollTop() >= $(".recommend").offset().top) {
            $(".fixedtool").fadeIn()
       }else {
            $(".fixedtool").fadeOut()
       }
    }
   $(window).scroll(function(){
        fn();
/*         if($(document).scrollTop() >= $(".jiadian").offset().top) {
            $(".fixedtool li").eq(0).addClass("current").siblings().removeClass("current")
        }
        if($(document).scrollTop() >= $(".shouji").offset().top) {
            $(".fixedtool li").eq(1).addClass("current").siblings().removeClass("current")
        }
        if($(document).scrollTop() >= $(".diannao").offset().top) {
            $(".fixedtool li").eq(2).addClass("current").siblings().removeClass("current")
        }
        if($(document).scrollTop() >= $(".jiaju").offset().top) {
            $(".fixedtool li").eq(3).addClass("current").siblings().removeClass("current")
        } */
    if(flag) {
        $(".floor>div").each(function(i,ele){
            if($(document).scrollTop() >= $(ele).offset().top) {
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
            }
        })
    }
   })
   $(".fixedtool li").click(function(){
       flag = false
       $(this).addClass("current").siblings().removeClass("current")
        var distant = $(".floor>div").eq($(this).index()).offset().top
        $("body, html").stop().animate({
            scrollTop:distant
        },function(){
            flag = true
        })
        $(window).scrollTop(distant)
   })
})