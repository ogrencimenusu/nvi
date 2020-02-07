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

    secilidosyalar();
    $('.row-type8 input[type=checkbox]').on('change',function(e){
        secilidosyalar();
    });
    function secilidosyalar() {
        var sayi = $('.row-type8 input[type=checkbox]:checked').length;
        if (sayi <= 0 ){
            $('input.say').val('Seçili Dosya Yok')
        }else{
            $('input.say').val('('+sayi+')' + ' Dosya Seçili')
        }

    }

    if($('.selectpicker').length > 0) {
        $('.selectpicker').selectpicker();
    }
});

