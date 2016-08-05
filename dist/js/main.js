/*global window, document, $, google, mapCenter, FastClick */

/** Remove tap delay on touch devices */
FastClick.attach(document.body);

/** On document ready */
$(document).ready(function() {

    /** Counter */
    $('.counter').each(function() {
        $('.number', this).wrapInner('<span></span>');
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
