/*global window, document, $, google, mapCenter, FastClick */

/** Load SVG sprite */
(function(window, document) {
    var file = 'svg/sprite.svg';

    if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
        return true;
    }

    var data,
        insertIT = function() {
            var newDiv = document.createElement('div');
            newDiv.className = "sprite-holder";
            newDiv.insertAdjacentHTML('beforeend', data);
            document.body.appendChild(newDiv);
        },
        insert = function() {
            if (document.body) insertIT();
            else document.addEventListener('DOMContentLoaded', insertIT);
        };

    try {
        var request = new XMLHttpRequest();
        request.open('GET', file, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                data = request.responseText;
                insert();
            }
        };
        request.send();
    } catch (e) {}
}(window, document));


/** Remove tap delay on touch devices */
FastClick.attach(document.body);

/** Magnific Popup Settings */
$.extend(true, $.magnificPopup.defaults, {
    closeMarkup: '<span title="%title%" class="mfp-close">x</span>',
    gallery: {
        arrowMarkup: '<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>'
    },
    settings: {
        cache: false
    },
    mainClass: 'mfp-slide-in',
    removalDelay: 600,
    midClick: true,
    autoFocusLast: false,
    preload: false,
    fixedContentPos: true,
    fixedBgPos: true
});


/** On document ready */
$(document).ready(function() {

    /** Nav */
    $('.nav').each(function() {
        function toggleNav() {
            function keyhandler(e) {
                if (e.which == 27) {
                    close();
                }
            }

            function clickhandler(e) {
                if (!flag) {
                    flag = true;
                    setTimeout(function() {
                        flag = false;
                    }, 200);
                    if (($(e.target).closest('.nav').length <= 0) && ($(e.target).closest('.toggle').length <= 0)) {
                        close();
                    }
                }
            }

            function open() {
                html.on('keydown', keyhandler).addClass('nav-visible');
                body.on('click touchstart', clickhandler);
                setTimeout(function() {
                    html.addClass('nav-open');
                }, 10);
            }

            function close() {
                html.off('keydown', keyhandler).removeClass('nav-open');
                body.off('click touchstart', clickhandler);
                setTimeout(function() {
                    html.removeClass('nav-visible');
                }, 420);
            }

            if (html.hasClass('nav-open')) {
                close();
            } else {
                open();
            }
            $(this).blur();
            return false;
        }

        var body = $('body'),
            html = $('html'),
            toggle = $('.toggle', this),
            flag = false;
        var overlay = $('<div class="overlay"/>');
        overlay.appendTo(this);
        $('.area', this).wrapInner('<div class="scroll"/>');
        toggle.add(overlay).on('click', toggleNav);
    });

    /** Gallery */
    $('.gallery').each(function() {
        $('.carousel', this).slick({
            infinite: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<span class="prev"></span>',
            nextArrow: '<span class="next"></span>',
            dots: true,
            customPaging: function(slider, i) {
                return '<span class="dot"></span>';
            }
        });
    });

    /** Google Map */
    $('.map').each(function() {
        var that = $(this),
            m = $('.gmap', this)[0],
            t = $('.title', this);
        $('<span class="arrow"><span></span></span>').appendTo(t);
        t.on('click', function() {
            that.toggleClass('open');
            return false;
        });

        /** Map initialization */
        window.mapInit = function() {
            if (typeof google != 'undefined') {
                var pos = new google.maps.LatLng(59.9638353, 30.3381309);
                var map = new google.maps.Map(m, {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: pos,
                    zoom: 15,
                    scrollwheel: false,
                    disableDefaultUI: true,
                    backgroundColor: "#f3f2ef"
                });
                new google.maps.Marker({
                    position: pos,
                    map: map
                });
                google.maps.event.addDomListener(window, 'resize', function() {
                    mapCenter.call(map);
                });
                mapCenter.call(map);
            }
        };

        /** Map centering */
        window.mapCenter = function() {
            var center = this.getCenter();
            google.maps.event.trigger(this, 'resize');
            this.setCenter(center);
        };

        /** Map script */
        setTimeout(function() {
            $.getScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=ru-RU&callback=mapInit');
        }, 100);
    });

    /* Pager */
    $('.pager').each(function() {
        var t = $('ul li', this).filter('.prev, .next').find('a');
        $('<span class="arrow"><span></span></span>').appendTo(t);
    });

    /* Gallery popup */
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    /* Staff  photos type */
    $('.staff').each(function() {
        $('.head', this).each(function() {
            $('.photo', this).each(function() {
                if ($(this).width() * 0.8 >= $(this).height()) {
                    $(this).addClass('landscape');
                } else {
                    $(this).addClass('portrait');
                }
            });
        });
    });

    /* Wide */
    $('.wide').each(function(){
        $(this).wrapInner('<div class="space"></div>');
    });

});

/*
 * Magnific Popup default settings
 */
$.extend(true, $.magnificPopup.defaults, {
    closeMarkup: '<span title="%title%" class="mfp-close"></span>',
    gallery: {
        arrowMarkup: '<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
        cursor: null
    },
    image: {
        cursor: null
    },
    midClick: true,
    settings: {
        cache: false
    },
    mainClass: 'mfp-fade',
    removalDelay: 300
});
