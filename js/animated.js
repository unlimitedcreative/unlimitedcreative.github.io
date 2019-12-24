(function($) {
    "use strict";

    $(function() {
        var header = $(".start_nav");
        var mediaQuery = window.matchMedia("(min-width: 992px)");
        if (mediaQuery.matches) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll > 10) {
                    header.removeClass('start_nav').addClass("scroll-on");
                } else {
                    header.removeClass('scroll-on').addClass("start_nav");
                }
            });
        }
    });
})(jQuery);