/**
 * Created by duyenpt on 4/19/17.
 */
$(document).ready(function(){
    $('.right-col .bgr-col').mCustomScrollbar();

    $('.main-col .bgr-col').mCustomScrollbar();

    $('.navigator-top .slide-nav').slick({
        dots: false,
        infinite: true,
        slidesToScroll:1,
        variableWidth:true
    })

    $('.toggle-menu').click(function(){
        $('header').toggleClass('open-menu');
    });
});