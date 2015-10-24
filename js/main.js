$("#burger,#map").on("click",function() {
    $("body").toggleClass("menu");
});

$("#menu>div.li").on("click",function() {
    $(this).toggleClass("active");
});
