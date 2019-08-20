var objStr1 = ".dropdown"
$(document).ready(function(){
    $(objStr1).hover(function () {
        $(this).find("ul").hide()
    })
    $(objStr1).mouseover(function () {
        $(this).find("ul").show()
    })
});
$(document).ready(function () {
    $("#head-ul li").click(function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    })
})
$(document).ready(function () {
    $(".search").find("button").hover(function () {
        $(this).css("background","#ff6633");
        $(this).css("color","white");
    })
    $("#commit-btn").mouseover(function () {
        $(this).css("background","#ff9966");
    })
})
$(document).ready(function () {
    $(".all-clz").hover(function () {
        $(this).css("background","#383131");
        $(this).css("color","white");
    })
    $(".all-clz").mouseover(function () {
        $(this).css("background","#cccccc");
        $(this).css("color","red");
    })
})

$(document).ready(function(){
    $(".all-clz").hover(function () {
        $(this).find("ul").hide()
    })
    $(".all-clz").mouseover(function () {
        $(this).find("ul").show()
    })
});
