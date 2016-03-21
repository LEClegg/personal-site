$(document).ready(function(){
    
//    Cool animation that I can't get to toggle off when selecting 'contact'
    $('.hvr-sweep-to-left').click(function(){
        $(this).toggleClass('active');
    });
    
    $('.hvr-sweep-to-left').click(function(){
        $('.about').toggle();
        $('.contact').hide();
    });
    
//    Cool animation that I can't get to toggle off when selecting 'about'
    $('.hvr-sweep-to-right').click(function(){
        $(this).toggleClass('active');
    });
    
    $('.hvr-sweep-to-right').click(function(){
        $('.contact').toggle();
        $('.about').hide();
    });
    
});