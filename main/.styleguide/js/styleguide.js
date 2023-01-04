$(function()
{   
    $('main > .section').each(function(i)
    {
        // 아이디값 넣기
        $('main > .section').eq(i).attr('id', 'section' + i);

        // 메뉴 생성
        $('#gnb').append('<a href="#section' + i + '">' + $(this).find(' > h2').text() + '</a>');

        // 마크업 한 번 넣어도 소스 저절로 생성되게
        $('main > .section').eq(i).find('> .group').each(function(j)
        {
            $(this).find('> pre').text( $(this).find('> .item').html() );

            // 소스 복사 버튼 생성
            $(this).find('.item').after('<textarea></textarea>');
            $(this).find('> textarea').text( $(this).find('> .item').html() );
            $(this).find('.item').after('<button>소스 복사하기</button>');
        });
    });

    // 소스 복사
    $('main > .section > .group').find('> button').on('click', function()
    {
        $(this).siblings('textarea').select();

        document.execCommand('Copy');

        alert('소스가 복사되었어여');
    });

    // 현재 메뉴 활성화
    $('#lnb a').each(function(i)
    {
        if ( $(this).attr('href') == $(location).attr('pathname').match(/([^\/]*)\/*$/)[1] )
        {
            $(this).addClass('active');
        }
    });

    // 메뉴 눌렀을 때
    $('#gnb a').on('click', function()
    {
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({scrollTop: ($(this.hash).offset().top - 100)});

        return false;
    });

    // 소스 넣기
    SyntaxHighlighter.highlight();

    // 위로가기
    $('footer button').on('click', function()
    {
        $('html, body').animate({scrollTop: 0});
    });
});