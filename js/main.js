(function ($) {

    "use strict";
    /*-------------------------------------
     jQuery MeanMenu
     -------------------------------------*/
    $('nav#dropdown').meanmenu({ siteLogo: "<a href='index.html' class='mobile-site-logo'><img src='img/logo.png' /></a>" });

    /*-------------------------------------
     Wow js Active
     -------------------------------------*/
    new WOW().init();

    /*-------------------------------------
     Jquery Scollup
     -------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-------------------------------------
     Jquery Serch Box
     -------------------------------------*/
    $('#search-button').on('click', function (e) {
        e.preventDefault();
        $(this).prev('.search-form').slideToggle('slow');
    });


    /*-------------------------------------
     About Counter
     -------------------------------------*/
    var aboutContainer = $('.about-counter');
    if (aboutContainer.length) {
        aboutContainer.counterUp({
            delay: 50,
            time: 5000
        });

    }

    /*-------------------------------------
     Input Quantity Up & Down
     ***************************************/
    $('#quantity-holder').on('click', '.quantity-plus', function () {
        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(),10);
        if ($.isNumeric($quantity) && $quantity > 0) {
            $quantity = $quantity + 1;
            $target.val($quantity);
        } else {
            $target.val($quantity);
        }
    }).on('click', '.quantity-minus', function () {
        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(),10);
        if ($.isNumeric($quantity) && $quantity >= 2) {
            $quantity = $quantity - 1;
            $target.val($quantity);
        } else {
            $target.val(1);
        }
    });

    /*-------------------------------------
     Accordion
     -------------------------------------*/
    var accordion = $('#accordion');
    accordion.children('.panel').children('.panel-collapse').each(function () {
        if ($(this).hasClass('in')) {
            $(this).parent('.panel').children('.panel-heading').addClass('active');
        }
    });
    accordion
        .on('show.bs.collapse', function (e) {
            $(e.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function (e) {
            $(e.target).prev('.panel-heading').removeClass('active');
        });


   /*----------------------------
     Contact Form activation code
     ------------------------------ */
    var contactForm = $('#contact-form');
    if (contactForm.length) {
        contactForm.validator().on('submit', function (e) {

            var $this = $(this),
                $target = contactForm.find(".form-response");
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
            } else {

                // ajax call
                $.ajax({
                    url: 'php/form-process.php',
                    type: 'POST',
                    data: contactForm.serialize(),
                    beforeSend: function () {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function (text) {
                        if (text == "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
                        }
                    }
                });

                return false;
            }

        });
    }

    /*----------------------------
     Get A Quote Form activation code
     ------------------------------ */
    var getQuoteForm = $('#getQuote-form');
    if (getQuoteForm.length) {
        getQuoteForm.validator().on('submit', function (e) {

            var $this = $(this),
                $target = getQuoteForm.find(".form-response");
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
            } else {

                // ajax call
                $.ajax({
                    url: 'php/get-quote.php',
                    type: 'POST',
                    data: getQuoteForm.serialize(),
                    beforeSend: function () {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function (text) {
                        if (text == "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
                        }
                    }
                });

                return false;
            }

        });
    }

    /*----------------------------
     Get A Quote Form 2 activation code
     ------------------------------ */
    var getQuoteForm2 = $('#getQuote-form2');
    if (getQuoteForm2.length) {
        getQuoteForm2.validator().on('submit', function (e) {

            var $this = $(this),
                $target = getQuoteForm2.find(".form-response");
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-danger'><p>Please select all required field.</p></div>");
            } else {

                // ajax call
                $.ajax({
                    url: 'php/get-quote2.php',
                    type: 'POST',
                    data: getQuoteForm2.serialize(),
                    beforeSend: function () {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function (text) {
                        if (text == "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-danger'><p>" + text + "</p></div>");
                        }
                    }
                });

                return false;
            }

        });
    }

    /*-------------------------------------
        Jquery Loadf function
     -------------------------------------*/

     $(window).on('load', function () {

        // Place holder
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });


        // portfolio 1 Isotope Initialization
        var $container = $('.project-gallery1-area');
        var $isotope1 = $container.find('.featuredContainer').isotope({
            itemSelector: '.project1-box',
            percentPosition: true,
            masonry: {
                columnWidth: '.project1-box.small',
            }
        });
        $container.find('.isotop-classes-tab').on('click', 'a', function () {
            $container.find('.isotop-classes-tab a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $isotope1.isotope({
                filter: selector
            });
            return false;
        });

        // portfolio 2 Isotope Initialization
        var $container2 = $('.project-gallery2-area');
        var $isotope2 = $container2.find('.featuredContainer2').isotope({
            itemSelector: '.project2-box',
            percentPosition: true,
            masonry: {
                columnWidth: '.project2-box.small',
            }
        });

        $container2.find('.isotop-classes-tab2').on('click', 'a', function () {
            $container2.find('.isotop-classes-tab2 a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $isotope2.isotope({
                filter: selector
            });
            return false;
        });

        // portfolio 3 Isotope Initialization
        var $container3 = $('.project-gallery3-area');
        var $isotope3 = $container3.find('.featuredContainer3').isotope({
            itemSelector: '.project3-box',
            percentPosition: true,
            masonry: {
                columnWidth: '.project3-box.small',
            }
        });

        $container3.find('.isotop-classes-tab3').on('click', 'a', function () {
            $container3.find('.isotop-classes-tab3 a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $isotope3.isotope({
                filter: selector
            });
            return false;
        });
    });  // End of load function


    /*-------------------------------------
     Jquery Stiky Menu
     -------------------------------------*/
    $(window).on('scroll', function () {
        var s = $('#sticker'),
            w = $('.wrapper-area'),
            h = s.outerHeight(),
            windowpos = $(window).scrollTop(),
            windowWidth = $(window).width(),
            s4 = $('.header-style4-area'),
            s3 = $('.header-style3-area');

        if (windowWidth > 767) {
            var topBar = s.prev('.header-top-area'),
                topBarH = 0;
            if (topBar.length) {
                topBarH = topBar.outerHeight();
            }
            if (s4.length) {
                topBarH = h = 1;
            }
            if (s3.length) {
                h = 0;
            }
            if (windowpos >= topBarH) {
                s.addClass('stick');
                w.css('padding-top', h + 'px');
            } else {
                s.removeClass('stick');
                w.css('padding-top', 0);
            }

        }
    });
    
    /*-------------------------------------
     Carousel slider initiation
     -------------------------------------*/
    $('.gl-carousel').each(function () {
        var carousel = $(this),
            loop = carousel.data('loop'),
            items = carousel.data('items'),
            margin = carousel.data('margin'),
            stagePadding = carousel.data('stage-padding'),
            autoplay = carousel.data('autoplay'),
            autoplayTimeout = carousel.data('autoplay-timeout'),
            smartSpeed = carousel.data('smart-speed'),
            dots = carousel.data('dots'),
            nav = carousel.data('nav'),
            navSpeed = carousel.data('nav-speed'),
            rXsmall = carousel.data('r-x-small'),
            rXsmallNav = carousel.data('r-x-small-nav'),
            rXsmallDots = carousel.data('r-x-small-dots'),
            rXmedium = carousel.data('r-x-medium'),
            rXmediumNav = carousel.data('r-x-medium-nav'),
            rXmediumDots = carousel.data('r-x-medium-dots'),
            rSmall = carousel.data('r-small'),
            rSmallNav = carousel.data('r-small-nav'),
            rSmallDots = carousel.data('r-small-dots'),
            rMedium = carousel.data('r-medium'),
            rMediumNav = carousel.data('r-medium-nav'),
            rMediumDots = carousel.data('r-medium-dots'),
            center = carousel.data('center');

        carousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            margin: (margin ? margin : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            navSpeed: (navSpeed ? true : false),
            center: (center ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: ( rXsmall ? rXsmall : 1),
                    nav: ( rXsmallNav ? true : false),
                    dots: ( rXsmallDots ? true : false)
                },
                480: {
                    items: ( rXmedium ? rXmedium : 2),
                    nav: ( rXmediumNav ? true : false),
                    dots: ( rXmediumDots ? true : false)
                },
                768: {
                    items: ( rSmall ? rSmall : 3),
                    nav: ( rSmallNav ? true : false),
                    dots: ( rSmallDots ? true : false)
                },
                992: {
                    items: ( rMedium ? rMedium : 5),
                    nav: ( rMediumNav ? true : false),
                    dots: ( rMediumDots ? true : false)
                }
            }
        });

    });

    /*-------------------------------------
     Google Map
     -------------------------------------*/
    if ($('#googleMap').length) {
        var initialize = function () {
            var mapOptions = {
                zoom: 15,
                scrollwheel: false,
                center: new google.maps.LatLng(-37.81618, 144.95692)
            };
            var map = new google.maps.Map(document.getElementById("googleMap"),
                mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/map-marker.png',
                map: map
            });
        }
        google.maps.event.addDomListener(window, "load", initialize);
    }

    /*-------------------------------------
    Window onLoad and onResize event trigger
    -------------------------------------*/
    $(window).on('load resize', function () {

        //Define the maximum height for mobile menu
        var wHeight = $(window).height();
        wHeight = wHeight - 68;
        $('.mean-nav > ul').css('height', wHeight + 'px');

    });


})(jQuery);

