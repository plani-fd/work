/*-------------------------------------------------
title       : 게시판
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{
    /*------------------------------------------------- 갤러리 -------------------------------------------------*/

    // 선택자로 만들기 위한 클래스 추가
    $('.gallery_view').find('ul').addClass('swiper');

    // 이전 다음 버튼 추가
    $('.gallery_view').append('<p class="control"><button class="prev">이전</button><button class="next">다음</button></p>');
    
    // 썸네일 슬라이더
    var gallery_thumb = new Swiper(".gallery_view .thumb", 
    {
        wrapperClass        : "swiper",
        slideClass          : "swiper > li",
        slidesPerView       : 2,
        spaceBetween        : 10,
        loop                : false,
        breakpoints             : 
        {
            1025 : 
            {
                slidesPerView   : 6,            // 한 슬라이드에 보여줄 갯수
            },
            769 : 
            {
                slidesPerView   : 5,            // 한 슬라이드에 보여줄 갯수
            },
            581 : 
            {
                slidesPerView   : 4,            // 한 슬라이드에 보여줄 갯수
            },
            391 : 
            {
                slidesPerView   : 3,            // 한 슬라이드에 보여줄 갯수
            }
        }
    });

    // 썸네일 링크 동작 안 하게
    $('.gallery_view .thumb').find('a').on('click', function(){return false;});

    // 이미지 슬라이더
    var gallery_img = new Swiper(".gallery_view .list", 
    {
        wrapperClass        : "swiper",
        slideClass          : "swiper > li",
        loop                : true,
        navigation          : 
        {
            nextEl  : ".gallery_view .next",
            prevEl  : ".gallery_view .prev",
        },
        thumbs              : 
        {
            swiper  : gallery_thumb,
        }
    });

    /*------------------------------------------------- //갤러리 -------------------------------------------------*/

    // FAQ
    $('.faq .label').on('click', function()
    {
        if ( $(this).parent('.group').hasClass('active') == false )
        {
            $(this).parent('.group').addClass('active');
        }
        else
        {
            $(this).parent('.group').removeClass('active');
        }

        return false;
    });

    // 댓글
    $('.comment .list li').each(function()
    {
        $(this).find('.date').css({'left': $(this).find('.name').width()});
    });

    // 파일 첨부
    $('.form_file').find('input').on('change', function()
	{
		if ( $(this).val() != '' )
		{
			$(this).next('.txt').addClass('active');
			$(this).next('.txt').text('' + $(this).val() + '');
		}
	});

    /*------------------------------------------------- 데이트피커 -------------------------------------------------*/

    $.datepicker.setDefaults
    ({
        monthNamesShort     : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNamesMin         : ['일', '월', '화', '수', '목', '금', '토'],
        dateFormat          : 'yy/mm/dd',
        showMonthAfterYear  : true,
        changeYear          : true,
        changeMonth         : true,
        yearRange           : "c-100:c+10",
        showOn              : 'both'
    });

    $('#view_sdate, #view_edate, #data01').datepicker
    ({
        buttonText: '<i class="ri-calendar-todo-fill"><span class="sr_only">달력 보기</span></i>'
    });

    /*------------------------------------------------- //데이트피커 -------------------------------------------------*/

    // 게시판 목록 번호와 제목(.txt_left) 사이에 다른 셀이 존재할 때
    $('.tstyle_list td').each(function()
    {
        if ( $(this).index() > 0 && $(this).next('td').hasClass('txt_left') == true )
        {
            if ( $(this).text() != '' )
            {
                $(this).parent('tr').addClass('type1');
            }
            else
            {
                $(this).addClass('hidden_m');
            }
        }
    }); 
});