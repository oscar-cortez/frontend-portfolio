$(document).ready(function(){
    $('.one').mouseenter(function(){
        $(".one").fadeTo('fast',1);
});
    $('.one').mouseleave(function() { 
        $(".one").fadeTo('fast',0.5);
});
    $('.two').mouseenter(function(){
        $(".two").fadeTo('fast',1);
});
    $('.two').mouseleave(function() { 
        $(".two").fadeTo('fast',0.5);
});

     $('.three').mouseenter(function(){
        $(".three").fadeTo('fast',1);
});
    $('.three').mouseleave(function() { 
        $(".three").fadeTo('fast',0.5);
});

    $('.four').mouseenter(function(){
        $(".four").fadeTo('fast',1);
});
    $('.four').mouseleave(function() { 
        $(".four").fadeTo('fast',0.5);
});

    $('.five').mouseenter(function(){
        $(".five").fadeTo('fast',1);
});
    $('.five').mouseleave(function() { 
        $(".five").fadeTo('fast',0.5);
});

$('.six').mouseenter(function(){
        $(".six").fadeTo('fast',1);
});
    $('.six').mouseleave(function() { 
        $(".six").fadeTo('fast',0.5);
});

$('.pull-me').click(function() {
$('.panel').slideToggle('slow');
});
//Musica
 var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'js/SonidoBatalla.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

$.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('div').mouseenter(function() {
            audioElement.play();
        });

        });









 