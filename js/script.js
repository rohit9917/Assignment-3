jQuery(document).ready(function () {
    jQuery('.hamberger-menu i').click(function () {
        if (jQuery('.site-nave').hasClass('hideMenu')) {
            jQuery('.site-nave').addClass('showMenu').removeClass('hideMenu');
        } else {
            jQuery('.site-nave').addClass('hideMenu').removeClass('showMenu');
        }
        if (jQuery('.hamberger-menu i').hasClass('fa-bars')) {
            jQuery('.site-header .hamberger-menu i').addClass('fa-xmark').removeClass('fa-bars');
        } else {
            jQuery('.site-header .hamberger-menu i').addClass('fa-bars').removeClass('fa-xmark');
        }

    })
    jQuery('.search-icon').click(function () {
        if (jQuery('header').hasClass('openSearch')) {
            jQuery('header').addClass('hideSearch').removeClass('openSearch');
        } else {
            jQuery('header').addClass('openSearch').removeClass('hideSearch');
        }
        if (jQuery('header .search-icon i').hasClass('fa-search')) {
            jQuery('header .search-icon i').addClass('fa-xmark').removeClass('fa-search');
        } else {
            jQuery('header .search-icon i').addClass('fa-search').removeClass('fa-xmark');
        }

    })
    $(".sub-head").hide();

    $('.button1').click(function () {
        if ($('.sub-head').is(':hidden')) {
            $('.sub-head').show();
        } else {
            $('.sub-head').hide();
        }
    });

    $(".show-more").hide();

    $('.load').click(function () {
        if ($('.show-more').is(':hidden')) {
            $('.show-more').show();
            $('.hidden').hide();
        } else {
            $('.hidden').hide();
            $('.show-more').hide();
            $('.hidden').show();
        }
    });

});

