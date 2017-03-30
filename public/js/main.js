$(document).ready(function() {
    // variables
    var $header_top = $('.header-top');
    // toggle menu 
    $header_top.find('a').on('click', function() {
        $(this).parent().toggleClass('open-menu');
    });
    // fullpage customization
    $('#fullpage').fullpage({
        sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F', '#348899'],
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        navigation: true,
        slidesNavigation: true,
        css3: true,
        controlArrows: false,
        anchors: ['hero', 'interior-design', 'drawings', 'mosaic', 'photo-inspiration', 'sketch', 'contact-me'],
        menu: '#menu',
    });
});