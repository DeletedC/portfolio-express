$(() => {
    $(document).ready(function(){
        $('.collapsible').collapsible();
        $('.carousel').carousel();
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });   
})