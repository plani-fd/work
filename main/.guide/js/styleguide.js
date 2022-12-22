$(function()
{   
    $('main > .section').each(function(i)
    {
        // 아이디값 넣기
        $('main > .section').eq(i).attr('id', 'section' + i);

        // 메뉴 생성
        $('header nav').append('<a href="#section' + i + '">' + $(this).find(' > h2').text() + '</a>');

        // 마크업 한 번 넣어도 소스 저절로 생성되게
        $('main > .section').eq(i).find('> .group').each(function(j)
        {
            $(this).find('> pre').text( $(this).find('> .item').html() );
        });
    });

    // 메뉴 눌렀을 때
    $('header nav a').on('click', function()
    {
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({scrollTop: ($(this.hash).offset().top - 50)});

        return false;
    });

    // 소스 넣기
    SyntaxHighlighter.highlight();

    // 위로가기
    $('.btn_top').on('click', function()
    {
        $('html, body').animate({scrollTop: 0});
    });
});