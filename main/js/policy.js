/*-------------------------------------------------
title       : 가이드
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{   
   

    //개인정보처리방침
    mouseOver($('.labeling .label_box'));

    function mouseOver(label) {

        label.focus(function(){
            $(this).parent('li').addClass('active');
        });
        label.blur(function(){
            $(this).parent('li').removeClass('active');
        });
        label.on("mouseover focus", function() {
            $(this).parent('li').addClass('active');
        });
        label.on("mouseout focusout", function() {
            $(this).parent('li').removeClass('active');
        });
    }

    $('.labeling_list a').on('click', function(){
        if($(this).parent('li').hasClass('active')){
            $(this).parent('li').removeClass('active');
        }else{
            $('.labeling_list li').removeClass('active')
            $(this).parent('li').addClass('active');
        }
    });
    $('.labeling_list .close').on('click', function(){
        $('.labeling_list li').removeClass('active')
    })

});