/*-------------------------------------------------
title       : 공통
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{
    // 모달팝업, 최상단배너 열기 닫기 버튼 클릭 시
    $('#issue, .topbanner').find('a.control').on('click', function()
    {
        if ( $(this).hasClass('open') == true )
        {
            if ( $(this).parents('#issue, .topbanner').hasClass('active') == false )
            {
                $(this).parents('#issue, .topbanner').addClass('active');

                if ( $(this).parents('#issue').length == 1 )
                {   
                    modalpopup.slideTo(0);
                    modalpopup.autoplay.start();

                    modalpopupControl();                       
                }           
            }
            else
            {
                $(this).parents('#issue, .topbanner').removeClass('active');

                if ( $(this).parents('#issue').length == 1 )
                {                
                    modalpopup.autoplay.stop();
                    modalpopup.slideTo(0);

                    $('#issue').removeClass('type1');
                }
            }
        }
        else
        {
            $(this).parents('#issue, .topbanner').removeClass('active');

            if ( $(this).parents('#issue').length == 1 )
            {                
                modalpopup.autoplay.stop();
                modalpopup.slideTo(0);

                $('#issue').removeClass('type1');
            }
        }

        return false;
    });

    // 모달팝업, 최상단배너 컨트롤러 장착
    $('#issue .list, .topbanner .list').after('<div class="control"><button class="prev">이전</button><button class="next">다음</button><button class="play">재생</button><button class="pause active">정지</button><div class="pager"></div></div>');

    // 모달팝업, 최상단배너 재생/정지
    $('#issue, .topbanner').find('.play, .pause').on('click', function()
    {
        $(this).removeClass('active');
        $(this).siblings('.play, .pause').addClass('active');

        if ( $(this).hasClass('play') == true )
        {
            if ( $(this).parents('div').hasClass('topbanner') == true )
            {
                topbanner.autoplay.start();
            }
            else
            {
                modalpopup.autoplay.start();
            }
        }
        else
        {
            if ( $(this).parents('div').hasClass('topbanner') == true )
            {
                topbanner.autoplay.stop();
            }
            else
            {
                modalpopup.autoplay.stop();
            }
        }
    });

    /*------------------------------------------------- 모달팝업 -------------------------------------------------*/

    // 팝업건수
    $('#issue .open strong.count, #issue .label .count').text( $('#issue .list li').length );

    // 스와이퍼
    var modalpopup = new Swiper("#issue .group", 
    {
        autoplay                : 
        {
            delay               : 2500,
            disableOnInteraction: false,
        },
        wrapperClass            : "list",
        slideClass              : "list > li",
        slidesPerView           : 1,
        spaceBetween            : 10,
        loop                    : false,
        loopAdditionalSlides    : 1,            // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        navigation              : 
        {
            nextEl              : "#issue .next",
            prevEl              : "#issue .prev",
        },
        pagination              : 
        {
            el                  : "#issue .pager",
            clickable           : true,
        },
        breakpoints             : 
        {
            769 : 
            {
                slidesPerView   : 3,
                spaceBetween    : 30,
            },
            581 : 
            {                    
                slidesPerView   : 2,
                spaceBetween    : 20,
            }
        }
    });

    // 이전다음이 작동 안 할 때 팝업 정렬 등을 위함
    function modalpopupControl()
    {
        setTimeout(function()
        {
            if ( $('#issue').find('.prev, next').hasClass('swiper-button-lock') == true )
            {
                $('#issue').addClass('type1');
            }
            else
            {
                $('#issue').removeClass('type1');
            }

        }, 100);  
    };

    // 윈도우 리사이즈 될 때 동작 
    $(window).on('resize', function()
    {
        modalpopupControl();
    });

    /*------------------------------------------------- //모달팝업 -------------------------------------------------*/

    /*------------------------------------------------- 최상단팝업 -------------------------------------------------*/
    
    var topbanner = new Swiper(".topbanner .group", 
    {
        autoplay                : 
        {
            delay               : 2500,
            disableOnInteraction: false,
        },
        wrapperClass            : "list",
        slideClass              : "list > li",
        direction               : "vertical",
        loop                    : true,
        loopAdditionalSlides    : 1,            // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        navigation              : 
        {
            nextEl              : ".topbanner .next",
            prevEl              : ".topbanner .prev",
        },
        pagination              : 
        {
            el                  : ".topbanner .pager",
            clickable           : true,
        },
        // breakpoints             : 
        // {
        //     1025 : 
        //     {
        //         slidesPerView   : 6,            // 한 슬라이드에 보여줄 갯수
        //     },
        //     769 : 
        //     {
        //         slidesPerView   : 5,            // 한 슬라이드에 보여줄 갯수
        //     },
        //     581 : 
        //     {
        //         slidesPerView   : 4,            // 한 슬라이드에 보여줄 갯수
        //     },
        //     391 : 
        //     {
        //         slidesPerView   : 3,            // 한 슬라이드에 보여줄 갯수
        //     }
        // }
    });

    /*------------------------------------------------- //최상단팝업 -------------------------------------------------*/
});