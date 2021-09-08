$(function(){

    $(".carousel").slick({
        // dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        fadeSpeed: 100,
        cssEase: 'linear',
        // variableWidth: true,
    });

});

function hideAndShow(){
    document.getElementById('welcome_inspiration').classList.add('hidden');
    document.getElementById('inspiracoes_content').classList.remove('hidden');
}