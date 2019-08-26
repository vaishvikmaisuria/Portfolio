

jQuery(function($) {


    // portfolio filter
    $(window).on('load', function(){
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        console.log($portfolio)
    $portfolio.isotope({
        itemSelector : '.portfolio-item',
        layoutMode : 'fitRows'
    });

    $portfolio_selectors.on('click', function(){
        $portfolio_selectors.removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({ filter: selector });
        return false;
    });
    });

});