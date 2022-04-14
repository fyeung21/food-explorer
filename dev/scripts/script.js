'use strict';

// jQuery document ready
$(() => {

    // hamburger menu function for mobile
    $('#hamburger-btn').on('click', event => {
        console.log('active');
        $('.mobile-menu').toggleClass('mobile-menu-active');
    });
    
});