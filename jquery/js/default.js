/*-------------------------------------------------
title       : 공통
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{
    // 레이어팝업 닫기
    $('[id*="layerPopup"]').find('.close a').on('click', function()
    {
        $(this).parents('[id*="layerPopup"]').hide();

        return false;
    });

    // 레이어팝업에서 키보드가 나갔을 때 팝업 닫음(접근성)
    $('[id*="layerPopup"]').find('*:last').keydown(function(e) 
    {
        if(e.keyCode === 9) 
        {
            $(this).parents('[id*="layerPopup"]').hide();
        }
    });

    // 모달팝업, 최상단배너 열기 닫기 버튼 클릭 시
    $('#issue, .topbanner').find('a.control').on('click', function()
    {
        // 열기 눌렀을 때
        if ( $(this).hasClass('open') == true )
        {
            // 안 열려있을 때
            if ( $(this).parents('#issue, .topbanner').hasClass('active') == false )
            {
                $(this).parents('#issue, .topbanner').addClass('active');
                $(this).find('.sr_only').text('닫기');

                // 모달팝업 일 때
                if ( $(this).parents('#issue').length == 1 )
                {   
                    modalpopup.slideTo(0);
                    modalpopup.autoplay.start();

                    modalpopupControl();                       
                }
                else
                {
                    topbanner.slideTo(2);
                    topbanner.autoplay.start();
                }           
            }
            // 열려있을 때
            else
            {
                $(this).parents('#issue, .topbanner').removeClass('active');
                $(this).find('.sr_only').text('열기');

                // 모달팝업 일 때
                if ( $(this).parents('#issue').length == 1 )
                {                
                    modalpopup.autoplay.stop();
                    modalpopup.slideTo(0);

                    $('#issue').removeClass('type1');
                }
                else
                {
                    topbanner.autoplay.stop();

                    setTimeout(function()
                    {
                        topbanner.slideTo(2);

                    }, 200);  
                }
            }
        }
        else
        {
            $(this).parents('#issue, .topbanner').removeClass('active');
            $('#issue').removeClass('type1');
            $(this).parents('#issue, .topbanner').find('.open').find('.sr_only').text('열기');

            // 모달팝업 일 때
            if ( $(this).parents('#issue').length == 1 )
            {                
                modalpopup.autoplay.stop();
                modalpopup.slideTo(0);
            }
            else
            {
                topbanner.autoplay.stop();

                setTimeout(function()
                {
                    topbanner.slideTo(2);

                }, 200);                
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

    // 열기 버튼에 링크텍스트 추가
    $('#issue .open .count').after('<span class="sr_only">열기</span>');

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
    
    // 스와이퍼 안에 초점 있을 때 자동재생 정지(접근성)
    $('#issue').find('.list *').on
    ({
        focusin         : function()
        {
            modalpopup.autoplay.stop();
        },
        mouseover   : function()
        {
            modalpopup.autoplay.stop();
        },
        focusout    : function()
        {
            modalpopup.autoplay.start();
        },
        mouseleave  : function()
        {
            modalpopup.autoplay.start();
        },
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

    // 모달팝업에서 키보드가 나갔을 때 팝업 닫음(탭 아웃-접근성)
    $('#issue').find('a:last').keydown(function(e) 
    {
        if ( $(this).parents('#issue').hasClass('active') == true )
        {
            if(e.keyCode === 9) 
            {
                $(this).parents('#issue').removeClass('active');
            }
        }
    });

    // 모달팝업에서 키보드가 나갔을 때 팝업 닫음(역탭 아웃-접근성)
    $('#issue').find('a:first').keydown(function(e) 
    {
        if(e.keyCode === 9 && e.shiftKey) 
        {
            if ( $(this).parents('#issue').hasClass('active') == true )
            {
                $(this).parents('#issue').removeClass('active');
            }
        }
    });

    /*------------------------------------------------- //모달팝업 -------------------------------------------------*/

    /*------------------------------------------------- 최상단배너 -------------------------------------------------*/

    // 최상단배너 열기 버튼에 링크텍스트 추가
    $('.topbanner .open .count').after('<span class="sr_only">닫기</span>');

    // 최상단배너    
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
        navigation              : 
        {
            nextEl              : ".topbanner .next",
            prevEl              : ".topbanner .prev",
        },
        pagination              : 
        {
            el                  : ".topbanner .pager",
            clickable           : true,
        }
    });
    
    // 스와이퍼 안에 초점 있을 때 자동재생 정지(접근성)
    $('.topbanner').find('.list *').on
    ({
        focusin         : function()
        {
            topbanner.autoplay.stop();
        },
        mouseover   : function()
        {
            topbanner.autoplay.stop();
        },
        focusout    : function()
        {
            topbanner.autoplay.start();
        },
        mouseleave  : function()
        {
            topbanner.autoplay.start();
        },
    });

    /*------------------------------------------------- //최상단배너 -------------------------------------------------*/
});