function main() {
    (function() {
        'use strict';
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })
        $(document).ready(function() {
            $("#team-carousel").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 4],
                    [1400, 4],
                    [1600, 4]
                ],
            });
            $("#clients-carousel").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 5],
                    [1400, 5],
                    [1600, 5]
                ],
            });
            $("#testimonial-carousel").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
            });
        });
        $(".filter-button").click(function() {
            var value = $(this).attr('data-filter');
            if (value == "all") {
                $('.filter').show('1000');
            } else {
                $(".filter").not('.' + value).hide('1000');
                $('.filter').filter('.' + value).show('1000');
            }
              var div = document.getElementById('about-button');
                if(div.style.display = 'none') {
                div.style.display = 'block';
                
                }
                var div = document.getElementById('features-button');
                if(div.style.display = 'none') {
                div.style.display = 'block';
                }
                
        });

        $('.list-inline a').click(function() {
            $('.list-inline .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
        $(document).ready(function() {
            $("html").niceScroll();
        });
        var nice = false;
        $(document).ready(function() {
            nice = $("html").niceScroll();
        });
    }());
}
main();