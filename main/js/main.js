/*-------------------------------------------------
title       : 메인
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{
    // 비주얼, 팝업, 갤러리 컨트롤러 장착
    $('#visual, .popup, .gallery').find('.list').after('<div class="control"><button class="prev">이전</button><button class="next">다음</button><button class="play">재생</button><button class="pause active">정지</button><div class="pager"></div></div>');

    // 비주얼, 팝업 재생/정지
    $('#visual, .popup').find('.play, .pause').on('click', function()
    {
        $(this).removeClass('active');
        $(this).siblings('.play, .pause').addClass('active');

        if ( $(this).hasClass('play') == true )
        {
            // 비주얼
            if ( $(this).parents('#visual').length == 1 )
            {
                visual.autoplay.start();
            }
            else if ( $(this).parents('.popup').length == 1 )
            {
                visual.autoplay.start();
            }
        }
        else
        {
            // 비주얼
            if ( $(this).parents('#visual').length == 1 )
            {
                popup.autoplay.stop();
            }
            else if ( $(this).parents('.popup').length == 1 )
            {
                popup.autoplay.stop();
            }
        }
    });

    // 비주얼
    var visual = new Swiper("#visual", 
    {
        autoplay                : 
        {
            delay               : 5000,
            disableOnInteraction: false,
        },
        wrapperClass            : "list",
        slideClass              : "list > li",
        effect                  : "fade",
        loop                    : true,
        loopAdditionalSlides    : 1,            // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        navigation              : 
        {
            nextEl              : "#visual .next",
            prevEl              : "#visual .prev",
        },
        pagination              : 
        {
            el                  : "#visual .pager",
            clickable           : true,
            renderBullet        : function (index, className) 
            {
              return '<button class="' + className + '"> 0' + (index + 1) + "</button>";
            },
        }
    });

    // 최근게시물
    $('.latest .group').classtoggle
    ({
        'button'        : '.label a',   // 이벤트 받을 타겟 선택
        'accordion'		: true,		    // active 될 때 형제요소의 반응 여부
        'latest'        : true
    });

    /*------------------------------------------------- 팝업 -------------------------------------------------*/

    // 스와이퍼
    var popup = new Swiper(".popup", 
    {
        autoplay                : 
        {
            delay               : 3000,
            disableOnInteraction: false,
        },
        wrapperClass            : "list",
        slideClass              : "list > li",
        loop                    : true,
        loopAdditionalSlides    : 1,            // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        navigation              : 
        {
            nextEl              : ".popup .next",
            prevEl              : ".popup .prev",
        },
        pagination              : 
        {
            el                  : ".popup .pager",
            clickable           : true
        }
    });
    
    // 스와이퍼 안에 초점 있을 때 자동재생 정지(접근성)
    $('.popup').find('.list *').on({
        focusin         : function()
        {
            popup.autoplay.stop();
        },
        mouseover   : function()
        {
            popup.autoplay.stop();
        },
        focusout    : function()
        {
            popup.autoplay.start();
        },
        mouseleave  : function()
        {
            popup.autoplay.start();
        },
    });

    /*------------------------------------------------- //팝업 -------------------------------------------------*/

    /*------------------------------------------------- 갤러리 -------------------------------------------------*/

    // 스와이퍼
    var gallery = new Swiper(".gallery .group", 
    {
        autoplay                : 
        {
            delay               : 3000,
            disableOnInteraction: false,
        },
        wrapperClass            : "list",
        slideClass              : "list > li",
        slidesPerView           : "auto",
        spaceBetween            : 30,
        //centeredSlides          : true,
        loop                    : false,
        loopAdditionalSlides    : 1,            // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        navigation              : 
        {
            nextEl              : ".gallery .next",
            prevEl              : ".gallery .prev",
        },
        pagination              : 
        {
            el                  : ".gallery .pager",
            clickable           : true
        },
        scrollbar               : 
        {
            el                  : ".gallery .scroll",
        },
    });
    
    // 스와이퍼 안에 초점 있을 때 자동재생 정지(접근성)
    $('.gallery').find('.list *').on({
        focusin         : function()
        {
            gallery.autoplay.stop();
        },
        mouseover   : function()
        {
            gallery.autoplay.stop();
        },
        focusout    : function()
        {
            gallery.autoplay.start();
        },
        mouseleave  : function()
        {
            gallery.autoplay.start();
        },
    });

    // 갤러리 게시물이 4개 이하일 때
    $(window).on('load resize', function()
    {
        setTimeout(function()
        {
            if ( $('.gallery').find('.prev, next').hasClass('swiper-button-lock') == true )
            {
                $('.gallery').addClass('type1');
            }
            else
            {
                $('.gallery').removeClass('type1');
            }  
            
        }, 100);  
    });

    /*------------------------------------------------- //갤러리 -------------------------------------------------*/
});