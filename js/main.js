// Меню

$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-130 });
    return false;
});



$(function($){
    var topnav = $('.top');
    var label = $('.label');
    $h = label.offset().top;

    $(window).scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию

        if ( $(window).scrollTop() > $h) {
            topnav.addClass('fix-top');
        }else{
            //Иначе возвращаем всё назад. Тут вы вносите свои данные
            topnav.removeClass('fix-top');
        }
    });
});


// ----- Маска ----------
jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});


jQuery(function($){

    var date = new Date().getDate() + 4;
    console.log(date);

    $('.timer-one').countdown_sg(date);
    $('.timer-two').countdown_sg(date);
    $('.timer-three').countdown_sg(date);
});


jQuery(function($){
	
	
$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});


$('.lab').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<span class="lab-nav prev"></span>',
    nextArrow: '<span class="lab-nav next"></span>'
});



$('.review').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="review-nav prev"></span>',
    nextArrow: '<span class="review-nav next"></span>'
});

});


