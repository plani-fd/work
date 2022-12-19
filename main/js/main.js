/*-------------------------------------------------
title       : 메인
Author      : 플랜아이 광주
Create date : 2020-02-14
-------------------------------------------------*/

$(function()
{
    // 비주얼
    $visual = $('#visual .list');

    $visual.bxSlider
    ({
        pause           : 5000,
        speed           : 10,
        pager           : false,
        autoControls    : true,
        auto            : true,
        autoHover       : true,
        onSliderLoad    : function(currentIndex)
        {
            $visual.find('li').eq(currentIndex + 1).addClass('active');
        },
        onSlideBefore   : function($slideElement, oldIndex, newIndex)
        {
            $visual.find('li').removeClass('active');
            $visual.find('li').eq(newIndex + 1).addClass('active');
        }
    });

    setTimeout(function()
    {
        $('#visual').addClass('active');

    }, 100);

    // 최근게시물
    $('.latest .group').classtoggle
    ({
        'button'        : '.label a',   // 이벤트 받을 타겟 선택
        'accordion'		: true,		    // active 될 때 형제요소의 반응 여부
    });

    // 팝업
    $('.popup .list').bxSlider
    ({
        controls        : false,
        autoControls    : true,
        auto            : true,
        autoHover       : true
    });

    // 갤러리
    $gallery = $('.gallery .list');

    $gallery.bxSlider
    ({
        pager           : false,
        autoHover       : true,
        maxSlides       : 4,
        minSlides       : 1,
        moveSlides      : 1,
        slideWidth      : 355
    }).destroySlider();

    $(window).on('load resize', function()
    {
        if ( $(window).width() <= 768 )
        {
            $gallery.reloadSlider
            ({
                pager           : false,
                autoHover       : true,
                maxSlides       : 2,
                minSlides       : 1,
                moveSlides      : 1,
                slideWidth      : 295
            });
        }
        else
        {
            $gallery.destroySlider();
            $gallery.find('li').css('width', '');
        }
    });
});