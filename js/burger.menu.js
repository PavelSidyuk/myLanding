$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, header .nav, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });



    $(document).ready(function(){
        $(".header__link").click(function(event){
            $('.header__list li').removeClass();
            $(this).parent().addClass('active');
            $(' header .nav, .header__burger').removeClass('active');
        });
    });



})