'use strict';

$('#hamburger-btn').on('click', event => {
    console.log('active');
    $('.mobile-menu').toggleClass('mobile-menu-active');
});