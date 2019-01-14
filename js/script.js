/**
 * Created by Саша on 25.10.2018.
 */
$('.footer-slider').slick({
    arrows:true,
    appendArrows: $('.footer-slider_wrapper'),
    prevArrow: '<div class="prev"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="next"><i class="fa fa-chevron-right"></div>',
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2
});