/*-------------------------------------------------
title       : 가이드
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/
$(document).ready(function () {
   
    //개인정보처리방침

    //디바이스따라 라벨링 클릭할지 마우스오버할지
    mouseOver($('.labeling .label_box'));

    function Mobile(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
    
    function mouseOver(label) {
        var device = $(window).width();
        if (Mobile()) { // 모바일

            label.on("click", function () {
                if ($(this).parent('li').hasClass('active')) {
                    $('.labeling .label_box').parent('li').removeClass('active');
                } else {
                    $(this).parent('li').addClass('active');
                }
            });

        } else { 

            label.focus(function () {
                $(this).parent('li').addClass('active');
            });
            label.blur(function () {
                $(this).parent('li').removeClass('active');
            });
            label.on("mouseover focus", function () {
                $(this).parent('li').addClass('active');
            });
            label.on("mouseout focusout", function () {
                $(this).parent('li').removeClass('active');
            });
        }
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