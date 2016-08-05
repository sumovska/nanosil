/*global window, document, $, google, mapCenter, FastClick */

/** Remove tap delay on touch devices */
FastClick.attach(document.body);

/** On document ready */
$(document).ready(function() {

    /** Counter */
    $('.counter').each(function() {
        $('.number', this).wrapInner('<span></span>');
        var a = $('.number span', this);
        $(this).countdown('2016/08/20 12:00:00', function(event) {
            a.eq(0).html(event.strftime('%D')[0]);
            a.eq(1).html(event.strftime('%D')[1]);
            a.eq(2).html(event.strftime('%H')[0]);
            a.eq(3).html(event.strftime('%H')[1]);
            a.eq(4).html(event.strftime('%M')[0]);
            a.eq(5).html(event.strftime('%M')[1]);
        });
    });

    /** Effects */
    $('.effects').each(function() {
        $('.list li').prepend('<span class="hexagon"></span>');
    });

    /** Popup */
    $('.popup-open').magnificPopup();

});

/** Magnific Popup defaults */
$.extend(true, $.magnificPopup.defaults, {
    tLoading: 'Загрузка&hellip;',
    closeMarkup: '<span title="%title%" class="mfp-close"></span>',
    tClose: 'Закрыть (Esc)',
    gallery: {
        tPrev: 'Назад',
        tNext: 'Вперед',
        tCounter: '%curr% из %total%',
        arrowMarkup: '<span title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
        navigateByImgClick: true,
        preload: [0, 1],
        cursor: null
    },
    image: {
        verticalFit: true,
        cursor: null
    },
    settings: {
        cache: false
    },
    mainClass: 'mfp-slide-in',
    removalDelay: 800,
    midClick: true,
    preload: false,
    autoFocusLast: false,
    fixedContentPos: true,
    fixedBgPos: true
});
