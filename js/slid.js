$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                }

            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }

            }],

    });
});