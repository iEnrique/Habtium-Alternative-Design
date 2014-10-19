$(function(){
    $('#menu').css('width', '120px').css('height', 'auto').css('overflow', 'hidden').css('left', '-110px').css('position', 'fixed').css('top', '0').css('bottom', '0').css('background-color','rgba(255,255,255,0.35)');
    $('#sky').css('margin-bottom', '12px');
    $('#menu>ul>li').css('float', 'none');
    $('#menu>ul>li.active').css('background-color', 'rgba(255,255,255,0.35)');
    $('#menu>ul>li>a').css('text-shadow', '0 1px 2px rgba(0,0,0,0.5)');
    $('#menu>ul>li.active>a').css('text-shadow', '0 1px 4px rgba(255,255,255,0.75), 0 -1px 4px rgba(255,255,255,0.75), 1px 0 4px rgba(255,255,255,0.75), -1px 0 4px rgba(255,255,255,0.75)');
    $('#menu>ul>li>a').hover(function(){
        $(this).css('text-shadow', '0 1px 4px rgba(255,255,255,0.75), 0 -1px 4px rgba(255,255,255,0.75), 1px 0 4px rgba(255,255,255,0.75), -1px 0 4px rgba(255,255,255,0.75)');
    });
    $('#menu>ul>li>a').mouseleave(function(){
        $(this).css('text-shadow', '');
        $('#menu>ul>li.active>a').css('text-shadow', '0 1px 4px rgba(255,255,255,0.75), 0 -1px 4px rgba(255,255,255,0.75), 1px 0 4px rgba(255,255,255,0.75), -1px 0 4px rgba(255,255,255,0.75)');
    });
    $('#menu').hover(function(){
        $(this).animate({left:'0'}, 'fast');
    });
    $('#menu').mouseleave(function(){
        $(this).animate({left:'-110px'}, 'fast');
    });
});