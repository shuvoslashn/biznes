$(document).ready(function () {
    // Mixitup JS
    var container = document.querySelector('.gallery');

    var mixer = mixitup(container, {
        selectors: {
            control: '[mixit-control]'
        }
    });

    // Fancybox JS
    $('[data-fancybox]').fancybox({
        protect: true,
        loop: true,
        transitionEffect: "fade",
        transitionDuration: 1500
    });

    // Team Carousel
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: [
            '<i class="icofont-rounded-left"></i>',
            '<i class="icofont-rounded-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Client Carousel
    $('.client-carousel').owlCarousel({
        loop: true,
        margin: 150,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Back to top button & Menu JQuery
    $('.top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $('.top').hide();

    $(window).scroll(function () {
        var scrollSize = $(this).scrollTop();
        if (scrollSize < 50) {
            $('.top').hide();
            $('.menu-area').removeClass('fixed');
            $('.slider').removeClass('pt-130');
            $('.slider').css("padding-top", "0px");
            $('.logo.h2').css("font-size", "42px");
        } else {
            $('.top').show();
            $('.menu-area').addClass('fixed');
            $('.slider').addClass("pt-130");
            $('.logo.h2').css("font-size", "30px");
        }
    });

    $('li.nav-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Popover Js
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    $('.example-popover').popover({
        container: 'body'
    });

    // Search Box
    $(".search-icon").click(function () {
        $(".searchBox").toggleClass("search-design");
    });
});