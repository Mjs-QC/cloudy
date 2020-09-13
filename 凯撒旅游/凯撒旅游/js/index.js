$(function(){
    $(".nav_right .caissaapp span").mouseenter(function(){
        $(".caissaapp>.contents").css("display","block");
    })
    $(".nav_right .caissaapp span").mouseleave(function(){
        $(".caissaapp>.contents").css("display","none");
    })
    $(".nav_right .user span").mouseenter(function(){
        $(".user>.contents").css("display","block");
    })
    $(".nav_right .user span").mouseleave(function(){
        $(".user>.contents").css("display","none");
    })
    $(".nav_right .eyes span").mouseenter(function(){
        $(".eyes>.contents").css("display","block");
    })
    $(".nav_right .eyes span").mouseleave(function(){
        $(".eyes>.contents").css("display","none");
    })
    $(".mnav").mouseenter(function(){
        $(this).css("background","#fff");
    })
    $(".mnav").mouseleave(function(){
        $(this).css("background","#f5f5f5");
    })
    $("#m1").mouseenter(function(){
        $(".myCaissaBox1").css("display","block");
    })
    $("#m1").mouseleave(function(){
        $(".myCaissaBox1").css("display","none");
    })
    $("#m2").mouseenter(function(){
        $(".myCaissaBox2").css("display","block");
    })
    $("#m2").mouseleave(function(){
        $(".myCaissaBox2").css("display","none");
    })
    $("#m3").mouseenter(function(){
        $(".nomenu1>.web_app").css("display","block");
    })
    $("#m3").mouseleave(function(){
        $(".nomenu1>.web_app").css("display","none");
    })
    $("#m4").mouseenter(function(){
        $(".nomenu2>.web_app").css("display","block");
    })
    $("#m4").mouseleave(function(){
        $(".nomenu2>.web_app").css("display","none");
    })
    $("#s_menu").click(function(){
        $(this).children("ul").slideToggle();
    })
    $("#gotop").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(".one").eq(0).css("z-index","99");
    $(".tui>ul>li").click(function(){
        i=$(this).index();
        $(this).css({"background":"#cca53c","color":"#fff"}).siblings().css({"background":"#fbfaf6","color":"#000"})
        $(".one").eq(i).css("z-index","99").siblings().css("z-index","1");
    })
    $(".right>ul>li").mouseenter(function(){
    $(this).css("z-index","1").children("div").animate({"top":"-282px","z-index":"99"}).siblings().children("div").animate("top","282px");
    })
    $(".right>ul>li").mouseleave(function(){
        $(this).css("z-index","1").children("div").animate({"top":"0px","z-index":"99"}).siblings().children("div").animate("top","282px");
        })
    function scrolls(){
    $(".contents").animate({"left":"-1349px"},3000,function(){
        $(this).append($(this).children("img:first")).css("left","0px");
    })  
    i=setInterval(scrolls(),3000);}
    scrolls();
})