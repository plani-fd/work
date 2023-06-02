/*-------------------------------------------------
title       : 가이드
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function()
{   
    $('main > .section').each(function(i)
    {
        // 아이디값 넣기
        $('main > .section').eq(i).attr('id', 'section' + i);

        // 메뉴 생성
        $('.gnb1').append('<li><a href="#section' + i + '">' + $(this).find(' > h2').text() + '</a><ul class="depth2"></ul></li>');

        // 마크업 한 번 넣어도 소스 저절로 생성되게
        $('main > .section').eq(i).find('> .group').each(function(j)
        {
            $('main > .section').eq(i).find('> .group').eq(j).attr('id', 'group' + i + '_' + j);

            // 하위메뉴 생성
            $('.gnb1').find('> li').eq(i).find('.depth2').append('<li><a href="#group' + i + '_' + j + '">' + $(this).find(' > h3').text() + '</a></li>');

            $(this).find('> pre').text( $(this).find('> .item').html() );

            // 소스 복사 버튼 생성
            $(this).find('> .item').after('<textarea></textarea>');
            $(this).find('> textarea').text( $(this).find('> .item').html() );
            $(this).find('> .item').after('<button>소스 복사하기</button>');
        });
    });

    // 통합검색
    $('#gnb').find('button').on('click', function()
    {
        if ( $(this).parent('li').hasClass('active') == false )
        {
            $(this).parent('li').addClass('active');
        }
        else
        {
            $(this).parent('li').removeClass('active');
        }
    });

    $('main > .section > .group > .item').each(function(i)
    {
        // 스크롤
        $(window).on('load scroll', function()
        {
            var sectionPosition = ($('main > .section > .group > .item').eq(i).offset() || { 'top': NaN }).top;

            if ( $('html, body').scrollTop() >= (sectionPosition - 300) )
            {
                if ( $('#gnb .depth2').find('> li').eq(i).hasClass('active') == false )
                {
                    $('#gnb').find('li').removeClass('active');

                    $('#gnb .depth2').find('> li').eq(i).parents('li').addClass('active');
                    $('#gnb .depth2').find('> li').eq(i).addClass('active');
                }
            }
        });
    });

    // 메뉴 눌렀을 때
    $('#gnb').find('a').on('click', function()
    {
        $('html, body').animate({scrollTop: ($(this.hash).offset().top - 100)});

        return false;
    });

    // 현재 메뉴 활성화
    $('#lnb a').each(function(i)
    {
        if ( $(this).attr('href') == $(location).attr('pathname').match(/([^\/]*)\/*$/)[1] )
        {
            $(this).addClass('active');
        }
    });

    $('.btn_control').on('click', function()
    {
        if ( $(this).hasClass('active') == false )
        {
            $(this).addClass('active');
            $(this).text('전체 소스 열기');

            $('main > .section > .group').find('> button').hide();
            $('.syntaxhighlighter').addClass('disable');
        }
        else
        {
            $(this).removeClass('active');
            $(this).text('전체 소스 닫기');

            $('main > .section > .group').find('> show').hide();
            $('.syntaxhighlighter').removeClass('disable');
        }
    });

    // 소스 복사
    $('main > .section > .group').find('> button').on('click', function()
    {
        $(this).siblings('textarea').select();

        document.execCommand('Copy');

        alert('소스가 복사되었어여');
    });

    // 소스 넣기
    SyntaxHighlighter.highlight();

    // 위로가기
    $('footer button').on('click', function()
    {
        $('html, body').animate({scrollTop: 0});
    });
});