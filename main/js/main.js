/*-------------------------------------------------
title       : 메인
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{
    // 비주얼, 팝업, 갤러리 컨트롤러 장착
    $('#visual, .popup, .gallery').find('.list').after('<div class="control"><button class="prev">이전</button><button class="next">다음</button><button class="play">재생</button><button class="pause active">정지</button><div class="pager"></div></div>');

    /*------------------------------------------------- 비주얼 -------------------------------------------------*/

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

    swiperoption('#visual', visual, '');

    /*------------------------------------------------- //비주얼 -------------------------------------------------*/

    // 최근게시물
    $('.latest .group').classtoggle
    ({
        'button'        : '.label a',   // 이벤트 받을 타겟 선택
        'accordion'		: true,		    // active 될 때 형제요소의 반응 여부
        'latest'        : true
    });

    /*------------------------------------------------- 팝업 -------------------------------------------------*/

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

    swiperoption('.popup', popup, '');

    /*------------------------------------------------- //팝업 -------------------------------------------------*/

    /*------------------------------------------------- 갤러리 -------------------------------------------------*/
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

    swiperoption('.gallery', gallery, '');

    /*------------------------------------------------- //갤러리 -------------------------------------------------*/
});