(function ($) {
    "use strict";

    $(function () {
        var header = $(".start_nav");
        var mediaQuery = window.matchMedia("(min-width: 992px)");
        if (mediaQuery.matches) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll > 10) {
                    header.removeClass('start_nav').addClass("scroll-on");
                } else {
                    header.removeClass('scroll-on').addClass("start_nav");
                }
            });
        }
    });

    $(function () {
        var header = $(".start_nav");
        var mediaQuery = window.matchMedia("(max-width: 992px)");
        if (mediaQuery.matches) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll > 10) {
                    header.removeClass('start_nav').addClass("scroll-on-mobile");
                } else {
                    header.removeClass('scroll-on-mobile').addClass("start_nav");
                }
            });
        }
    });
      
    $(".nav-item a").on("click", function() {
        $(".nav-item a").removeClass("active");
        $(this).addClass("active");
      });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
})(jQuery);