$(document).ready(function() {
    $('.slider').slick({
        draggable: false,
        arrows: false,
        dots: false,
        fade: true,
        speed: 3000,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchMove:false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
    });
    $('.selectpicker').selectpicker();

});
