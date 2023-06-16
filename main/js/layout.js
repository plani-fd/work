/*-------------------------------------------------
title       : 레이아웃
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{
    // 사이트바로가기
    $('.hnb1').classtoggle
    ({
        'button'            : '.label',     // 이벤트 받을 타겟 선택
        'respond'           : true,         // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / click 일때만)
        'respondWidth'      : '1024',       // 반응형 가로 사이즈
    });

    // 언어
    $('.lang').classtoggle({'button' : '.active'});

    // 검색
    $('.search').classtoggle({'tabout' : true});

    // 메뉴 열려있는데 검색 눌렀을 때 검색이 더 위로
    $('.search').find('.control').on('click', function()
    {
        if ( $(this).hasClass('open') == true )
        {
            if ( $('#header').hasClass('active') == true ) 
            {
                $('.search').addClass('type1');
            }
        }
        else
        {
            if ( $('.search').hasClass('type1') == true )
            {
                $('.search').removeClass('type1');
            }
        }
    });

    // 주메뉴
    $('#gnb1').gnb1();

    // 전체메뉴이자 모바일 메뉴
    $('#gnb2').gnb2();

    // 퀵메뉴
    $('#quick').classtoggle({'tabout' : true});

    /*------------------------------------------------- 하단배너 -------------------------------------------------*/
    
    // 컨트롤러 추가
    $('.footbanner').find('.list').after('<div class="control"><button class="prev">이전</button><button class="next">다음</button><button class="play">재생</button><button class="pause active">정지</button><div class="pager"></div></div>');

    // 스와이퍼
    var footbanner = new Swiper(".footbanner", 
    {
        autoplay                : 
        {
            delay               : 2500,
            disableOnInteraction: false,
        },
        wrapperClass            : "list",
        slideClass              : "list > li",
        slidesPerView           : "auto",
        spaceBetween            : 10,
        loop                    : false,
        loopAdditionalSlides    : 1,            // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        navigation              : 
        {
            nextEl              : ".footbanner .next",
            prevEl              : ".footbanner .prev",
        },
        breakpoints             : 
        {
            769 : 
            {
                spaceBetween    : 25,
            },
        }
    });

    swiperoption('.footbanner', footbanner, '');

    /*------------------------------------------------- //하단배너 -------------------------------------------------*/

    // 관련사이트
    $('.related .group').classtoggle({'button' : '.label', 'tabout' : true});

    // 위로가기
    $('#footer .btn_top').on('click', function()
    {
        $('html, body').animate({scrollTop: $(this.hash).offset().top});
        
        $(this.hash).focus();

        return false;
    });
});