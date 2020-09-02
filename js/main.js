// Przewijanie nawigacji

$('.navigation__a').on('click', function () {

    const goToSection = "[data-id=" + $(this).attr('data-class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 79
    }, 500)

})

// Obiekty wjeżdżające w sekcji project

$(document).on('scroll', function () {
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop()

    const $project1 = $('.project__row--1');
    const project1FromTop = $project1.offset().top
    const project1Height = $project1.outerHeight()

    const $project2 = $('.project__row--2');
    const project2FromTop = $project2.offset().top
    const project2Height = $project2.outerHeight()

    if (scrollValue > project1FromTop + project1Height - windowHeight) {
        $project1.addClass('active');
    }
    if (scrollValue > project2FromTop + project2Height - windowHeight) {
        $project2.addClass('active');
    }

    if (scrollValue < 100) {
        $('.project__row').removeClass('active');
    }

})

//popup w sekcji ralizacje
$('.realization__img').on('click', function () {
    alert('zostało wybrane zdjęcie')
})